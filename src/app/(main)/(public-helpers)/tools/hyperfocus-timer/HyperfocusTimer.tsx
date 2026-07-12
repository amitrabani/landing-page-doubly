'use client';

import { useCallback, useEffect, useReducer, useRef, useState } from 'react';

type Status = 'idle' | 'running' | 'paused' | 'check-in-due' | 'session-cap';

type Settings = {
  intervalMin: number;
  maxSessionMin: number;
  soundEnabled: boolean;
  announceTime: boolean;
  notificationsEnabled: boolean;
  task: string;
};

type NotificationPermissionState = 'unsupported' | 'default' | 'granted' | 'denied';

type CheckIn = {
  at: number;
  task: string;
  action: 'continue' | 'break' | 'stop';
};

type RunState = {
  status: Status;
  startedAt: number | null;
  pausedAt: number | null;
  accumulatedPauseMs: number;
  nextCheckInAt: number | null;
  capAt: number | null;
  lastCheckInAt: number | null;
  checkInDueAt: number | null;
  checkIns: CheckIn[];
};

type Persisted = {
  settings: Settings;
};

const STORAGE_KEY = 'doubly:hyperfocus-timer:v1';

const DEFAULT_SETTINGS: Settings = {
  intervalMin: 30,
  maxSessionMin: 120,
  soundEnabled: true,
  announceTime: true,
  notificationsEnabled: true,
  task: '',
};

const JITTER_FRACTION = 0.1;

const INTERVAL_PRESETS = [15, 20, 30, 45, 60, 90];
const CAP_PRESETS: Array<{ label: string; value: number }> = [
  { label: 'Off', value: 0 },
  { label: '1h', value: 60 },
  { label: '2h', value: 120 },
  { label: '3h', value: 180 },
  { label: '4h', value: 240 },
];

type Action =
  | { type: 'start'; now: number; firstCheckInAt: number; capAt: number | null }
  | { type: 'pause'; now: number }
  | { type: 'resume'; now: number; intervalMs: number; capMs: number | null }
  | { type: 'reset' }
  | { type: 'check-in-due'; now: number }
  | { type: 'cap-hit'; now: number }
  | { type: 'acknowledge'; now: number; nextCheckInAt: number; action: CheckIn['action']; task: string }
  | { type: 'tick' };

function initialRunState(): RunState {
  return {
    status: 'idle',
    startedAt: null,
    pausedAt: null,
    accumulatedPauseMs: 0,
    nextCheckInAt: null,
    capAt: null,
    lastCheckInAt: null,
    checkInDueAt: null,
    checkIns: [],
  };
}

function jitter(ms: number): number {
  const delta = ms * JITTER_FRACTION;
  return Math.round(ms + (Math.random() * 2 - 1) * delta);
}

function escalation(elapsedSinceDueMs: number): { intensity: 1 | 2 | 3 | 4; repeatMs: number } {
  if (elapsedSinceDueMs < 15_000) return { intensity: 1, repeatMs: 15_000 };
  if (elapsedSinceDueMs < 30_000) return { intensity: 2, repeatMs: 15_000 };
  if (elapsedSinceDueMs < 60_000) return { intensity: 3, repeatMs: 12_000 };
  return { intensity: 4, repeatMs: 8_000 };
}

function reducer(state: RunState, action: Action): RunState {
  switch (action.type) {
    case 'start':
      return {
        status: 'running',
        startedAt: action.now,
        pausedAt: null,
        accumulatedPauseMs: 0,
        nextCheckInAt: action.firstCheckInAt,
        capAt: action.capAt,
        lastCheckInAt: null,
        checkInDueAt: null,
        checkIns: [],
      };
    case 'pause':
      if (state.status !== 'running' && state.status !== 'check-in-due') return state;
      return { ...state, status: 'paused', pausedAt: action.now };
    case 'resume': {
      if (state.status !== 'paused' || state.pausedAt === null) return state;
      const pausedFor = action.now - state.pausedAt;
      return {
        ...state,
        status: 'running',
        pausedAt: null,
        accumulatedPauseMs: state.accumulatedPauseMs + pausedFor,
        nextCheckInAt:
          state.nextCheckInAt !== null ? state.nextCheckInAt + pausedFor : action.now + action.intervalMs,
        capAt: state.capAt !== null ? state.capAt + pausedFor : null,
      };
    }
    case 'reset':
      return initialRunState();
    case 'check-in-due':
      return { ...state, status: 'check-in-due', checkInDueAt: action.now };
    case 'cap-hit':
      return { ...state, status: 'session-cap', checkInDueAt: null };
    case 'acknowledge': {
      const entry: CheckIn = { at: action.now, task: action.task, action: action.action };
      if (action.action === 'stop') {
        return { ...initialRunState(), checkIns: [...state.checkIns, entry] };
      }
      return {
        ...state,
        status: 'running',
        nextCheckInAt: action.nextCheckInAt,
        lastCheckInAt: action.now,
        checkInDueAt: null,
        checkIns: [...state.checkIns, entry],
      };
    }
    case 'tick':
      return state;
  }
}

function formatClock(ms: number): string {
  const date = new Date(ms);
  return date.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });
}

function formatDurationLong(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  if (h === 0 && m === 0) return 'less than a minute';
  const parts: string[] = [];
  if (h > 0) parts.push(`${h} hour${h === 1 ? '' : 's'}`);
  if (m > 0) parts.push(`${m} minute${m === 1 ? '' : 's'}`);
  return parts.join(' and ');
}

function formatDurationShort(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  if (h > 0) return `${h}h ${m.toString().padStart(2, '0')}m`;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function formatCountdown(ms: number): string {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

type ChimeProfile = { tones: number[]; gain: number; spacing: number; type: OscillatorType };

const CHIME_LEVELS: Record<1 | 2 | 3 | 4, ChimeProfile> = {
  1: { tones: [880, 1320], gain: 0.18, spacing: 0.2, type: 'sine' },
  2: { tones: [660, 880, 1320], gain: 0.28, spacing: 0.16, type: 'sine' },
  3: { tones: [660, 880, 1100, 1320], gain: 0.38, spacing: 0.13, type: 'triangle' },
  4: { tones: [880, 660, 1320, 880, 1320], gain: 0.5, spacing: 0.11, type: 'triangle' },
};

function playChime(intensity: 1 | 2 | 3 | 4 = 1): void {
  try {
    const Ctx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const now = ctx.currentTime;
    const profile = CHIME_LEVELS[intensity];
    profile.tones.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = profile.type;
      osc.frequency.value = freq;
      const t = now + i * profile.spacing;
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(profile.gain, t + 0.02);
      gain.gain.linearRampToValueAtTime(0, t + 0.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.45);
    });
    const total = profile.tones.length * profile.spacing * 1000 + 800;
    setTimeout(() => ctx.close(), total);
  } catch {
    // Audio failures are silent.
  }
}

function notificationPermission(): NotificationPermissionState {
  if (typeof window === 'undefined' || !('Notification' in window)) return 'unsupported';
  return Notification.permission as NotificationPermissionState;
}

async function requestNotificationPermission(): Promise<NotificationPermissionState> {
  if (typeof window === 'undefined' || !('Notification' in window)) return 'unsupported';
  try {
    const result = await Notification.requestPermission();
    return result as NotificationPermissionState;
  } catch {
    return 'denied';
  }
}

function fireNotification(title: string, body: string): void {
  try {
    if (typeof window === 'undefined' || !('Notification' in window)) return;
    if (Notification.permission !== 'granted') return;
    const n = new Notification(title, {
      body,
      tag: 'doubly-hyperfocus-check-in',
      requireInteraction: true,
      silent: false,
    });
    n.onclick = () => {
      try {
        window.focus();
        n.close();
      } catch {
        // ignore
      }
    };
  } catch {
    // Notification failures are silent.
  }
}

function speak(text: string): void {
  try {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 0.95;
    utter.pitch = 1;
    utter.volume = 0.9;
    window.speechSynthesis.speak(utter);
  } catch {
    // Speech failures are silent.
  }
}

const CARD_STYLE: React.CSSProperties = {
  background: 'linear-gradient(160deg, var(--color-cream), var(--color-cream-dark))',
};

const PRIMARY_CLASS =
  'px-8 py-3 rounded-full text-cream font-semibold min-w-[8rem] transition-shadow ' +
  'shadow-[0_4px_12px_rgba(45,43,50,0.18),inset_0_1px_0_rgba(255,255,255,0.1)] ' +
  'hover:shadow-[0_6px_16px_rgba(45,43,50,0.22),inset_0_1px_0_rgba(255,255,255,0.12)]';

const PRIMARY_STYLE: React.CSSProperties = {
  background: 'linear-gradient(180deg, var(--color-charcoal-light), var(--color-charcoal))',
};

const GHOST_CLASS =
  'px-6 py-3 rounded-full text-charcoal font-medium bg-white/60 hover:bg-white/85 ' +
  'transition-colors shadow-[inset_0_0_0_1px_rgba(45,43,50,0.08)]';

const PILL_INACTIVE =
  'px-4 py-2 rounded-full text-sm font-medium bg-white/60 text-charcoal hover:bg-white/85 shadow-[inset_0_0_0_1px_rgba(45,43,50,0.08)] transition-colors';
const PILL_ACTIVE =
  'px-4 py-2 rounded-full text-sm font-semibold text-cream shadow-[0_2px_8px_rgba(45,43,50,0.18),inset_0_1px_0_rgba(255,255,255,0.1)]';
const PILL_ACTIVE_STYLE: React.CSSProperties = {
  background: 'linear-gradient(180deg, var(--color-charcoal-light), var(--color-charcoal))',
};

const STRIP_STYLE: React.CSSProperties = {
  background:
    'linear-gradient(110deg, var(--color-sage), var(--color-cream-dark) 55%, var(--color-coral-light))',
};

function BellIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 1.6a.7.7 0 0 1 .7.7v.5a4 4 0 0 1 3.3 3.94v2.32l1.18 1.77a.55.55 0 0 1-.46.86H3.28a.55.55 0 0 1-.46-.86L4 8.76V6.74A4 4 0 0 1 7.3 2.8v-.5a.7.7 0 0 1 .7-.7zM6.6 13.2a1.4 1.4 0 0 0 2.8 0H6.6z" />
    </svg>
  );
}

function StopGlyph({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="10" height="10" rx="2.2" />
    </svg>
  );
}

function intervalLabelFor(min: number): string {
  if (min < 60) return `${min} min`;
  if (min % 60 === 0) return `${min / 60} h`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return `${h} h ${m} min`;
}

function capLabelFor(min: number): string {
  if (min === 0) return 'no hard stop';
  return `${min / 60} h`;
}

function SessionStrip({ intervalMin, capMin }: { intervalMin: number; capMin: number }) {
  const capOff = capMin === 0;
  const totalMin = capOff ? Math.max(intervalMin * 4, intervalMin) : capMin;
  const rawCount = Math.floor(totalMin / Math.max(1, intervalMin));
  const count = capOff ? Math.min(rawCount, 5) : rawCount;
  const marks = Array.from({ length: count }, (_, i) => ((i + 1) * intervalMin) / totalMin);

  return (
    <div
      role="img"
      aria-label={
        capOff
          ? `Check-in every ${intervalLabelFor(intervalMin)}, no hard stop`
          : `Check-in every ${intervalLabelFor(intervalMin)}, hard stop at ${capLabelFor(capMin)}`
      }
      className="relative h-16 sm:h-20 w-full rounded-full overflow-hidden shadow-[inset_0_2px_6px_rgba(45,43,50,0.08),inset_0_0_0_1px_rgba(255,255,255,0.45)]"
      style={STRIP_STYLE}
    >
      {capOff && (
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 w-1/3 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(247,242,232,0) 0%, var(--color-cream) 90%)',
          }}
        />
      )}

      {marks.map((pos, i) => {
        const isLastInCap = !capOff && i === marks.length - 1 && Math.abs(pos - 1) < 0.001;
        if (isLastInCap) return null;
        return (
          <div
            key={`bell-${i}`}
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 text-charcoal"
            style={{ left: `${pos * 100}%` }}
          >
            <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white/70 shadow-[0_1px_2px_rgba(45,43,50,0.18),inset_0_0_0_1px_rgba(255,255,255,0.6)]">
              <BellIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </span>
          </div>
        );
      })}

      {!capOff && (
        <div
          className="absolute top-1/2 right-3 -translate-y-1/2 text-cream"
          aria-hidden="true"
        >
          <span
            className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full shadow-[0_2px_6px_rgba(45,43,50,0.25),inset_0_1px_0_rgba(255,255,255,0.18)]"
            style={{
              background:
                'linear-gradient(180deg, var(--color-charcoal-light), var(--color-charcoal))',
            }}
          >
            <StopGlyph className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </span>
        </div>
      )}
    </div>
  );
}

const TOGGLE_CHIP_BASE =
  'inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed';
const TOGGLE_CHIP_OFF =
  'bg-white/55 text-charcoal-light hover:bg-white/80 shadow-[inset_0_0_0_1px_rgba(45,43,50,0.08)]';
const TOGGLE_CHIP_ON =
  'text-cream shadow-[0_2px_8px_rgba(45,43,50,0.18),inset_0_1px_0_rgba(255,255,255,0.12)]';

function ToggleChip({
  active,
  onClick,
  disabled,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  disabled?: boolean;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={active}
      className={`${TOGGLE_CHIP_BASE} ${active ? TOGGLE_CHIP_ON : TOGGLE_CHIP_OFF}`}
      style={active ? PILL_ACTIVE_STYLE : undefined}
    >
      <span aria-hidden="true" className="inline-flex">
        {icon}
      </span>
      <span>{label}</span>
    </button>
  );
}

function SoundChipIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="currentColor" aria-hidden="true">
      <path d="M7 3 4 5.6H2.4a.6.6 0 0 0-.6.6v3.6a.6.6 0 0 0 .6.6H4l3 2.6a.4.4 0 0 0 .67-.3V3.3A.4.4 0 0 0 7 3zm3.4 1.6a.6.6 0 0 1 .85 0 4.8 4.8 0 0 1 0 6.8.6.6 0 1 1-.85-.85 3.6 3.6 0 0 0 0-5.1.6.6 0 0 1 0-.85zM12.2 2.8a.6.6 0 0 1 .85 0 7.2 7.2 0 0 1 0 10.4.6.6 0 1 1-.85-.85 6 6 0 0 0 0-8.7.6.6 0 0 1 0-.85z" />
    </svg>
  );
}

function VoiceChipIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="currentColor" aria-hidden="true">
      <path d="M8 1.4a2.4 2.4 0 0 0-2.4 2.4v4.4a2.4 2.4 0 0 0 4.8 0V3.8A2.4 2.4 0 0 0 8 1.4zm-4 6.4a.6.6 0 0 1 .6.6 3.4 3.4 0 0 0 6.8 0 .6.6 0 1 1 1.2 0 4.6 4.6 0 0 1-4 4.56v1.04h1.6a.6.6 0 1 1 0 1.2H5.8a.6.6 0 1 1 0-1.2h1.6V13a4.6 4.6 0 0 1-4-4.56.6.6 0 0 1 .6-.64z" />
    </svg>
  );
}

function NotifyChipIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="currentColor" aria-hidden="true">
      <path d="M8 1.6a.7.7 0 0 1 .7.7v.5a4 4 0 0 1 3.3 3.94v2.32l1.18 1.77a.55.55 0 0 1-.46.86H3.28a.55.55 0 0 1-.46-.86L4 8.76V6.74A4 4 0 0 1 7.3 2.8v-.5a.7.7 0 0 1 .7-.7zM6.6 13.2a1.4 1.4 0 0 0 2.8 0H6.6z" />
    </svg>
  );
}

export default function HyperfocusTimer() {
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [hydrated, setHydrated] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialRunState());
  const [now, setNow] = useState<number>(() => Date.now());
  const [customIntervalOpen, setCustomIntervalOpen] = useState(false);
  const [customizeOpen, setCustomizeOpen] = useState(false);
  const [customIntervalValue, setCustomIntervalValue] = useState<string>(
    String(DEFAULT_SETTINGS.intervalMin),
  );
  const wakeLockRef = useRef<WakeLockSentinel | null>(null);
  const reminderChimeRef = useRef<number>(0);
  const originalTitleRef = useRef<string | null>(null);
  const [notificationState, setNotificationState] = useState<NotificationPermissionState>('default');

  useEffect(() => {
    setNotificationState(notificationPermission());
  }, []);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<Persisted>;
        if (parsed.settings) {
          const merged: Settings = { ...DEFAULT_SETTINGS, ...parsed.settings };
          setSettings(merged);
          setCustomIntervalValue(String(merged.intervalMin));
        }
      }
    } catch {
      // Corrupted storage. Fall back to defaults.
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      const payload: Persisted = { settings };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // Storage quota or private mode. Non-fatal.
    }
  }, [hydrated, settings]);

  useEffect(() => {
    if (state.status !== 'running' && state.status !== 'check-in-due') return;
    const id = window.setInterval(() => setNow(Date.now()), 500);
    return () => window.clearInterval(id);
  }, [state.status]);

  const intervalMs = settings.intervalMin * 60_000;
  const capMs = settings.maxSessionMin > 0 ? settings.maxSessionMin * 60_000 : null;

  const elapsedMs = (() => {
    if (state.startedAt === null) return 0;
    const end = state.status === 'paused' && state.pausedAt !== null ? state.pausedAt : now;
    return Math.max(0, end - state.startedAt - state.accumulatedPauseMs);
  })();

  const remainingToCheckIn =
    state.nextCheckInAt !== null && state.status === 'running'
      ? Math.max(0, state.nextCheckInAt - now)
      : 0;

  const remainingToCap =
    state.capAt !== null && state.status !== 'idle'
      ? Math.max(0, state.capAt - now)
      : null;

  useEffect(() => {
    if (state.status !== 'running') return;
    if (state.nextCheckInAt === null) return;
    if (now >= state.nextCheckInAt) {
      dispatch({ type: 'check-in-due', now });
      if (settings.soundEnabled) playChime(1);
      const clock = formatClock(now);
      const elapsedText = formatDurationLong(elapsedMs);
      const taskPart = settings.task.trim() ? ` on ${settings.task.trim()}` : '';
      if (settings.announceTime) {
        speak(`Check in. It's ${clock}. You've been working${taskPart} for ${elapsedText}.`);
      }
      if (
        settings.notificationsEnabled &&
        typeof document !== 'undefined' &&
        document.visibilityState === 'hidden'
      ) {
        fireNotification(
          'Hyperfocus check-in',
          `It's ${clock}. You've been at this for ${elapsedText}.`,
        );
      }
      reminderChimeRef.current = now;
    }
  }, [state.status, state.nextCheckInAt, now, settings, elapsedMs]);

  useEffect(() => {
    if (state.status !== 'check-in-due') return;
    if (!settings.soundEnabled) return;
    if (state.checkInDueAt === null) return;
    const elapsedSinceDue = now - state.checkInDueAt;
    const { intensity, repeatMs } = escalation(elapsedSinceDue);
    if (elapsedSinceDue >= 1_000 && now - reminderChimeRef.current >= repeatMs) {
      playChime(intensity);
      reminderChimeRef.current = now;
    }
  }, [state.status, state.checkInDueAt, now, settings.soundEnabled]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (originalTitleRef.current === null) originalTitleRef.current = document.title;
    if (state.status !== 'check-in-due') {
      if (originalTitleRef.current) document.title = originalTitleRef.current;
      return;
    }
    const tick = () => {
      if (!originalTitleRef.current) return;
      if (document.visibilityState === 'visible') {
        document.title = originalTitleRef.current;
        return;
      }
      const seconds = Math.floor(Date.now() / 1000);
      document.title =
        seconds % 2 === 0 ? `⚠ Check in | Doubly` : originalTitleRef.current;
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => {
      window.clearInterval(id);
      if (originalTitleRef.current) document.title = originalTitleRef.current;
    };
  }, [state.status]);

  useEffect(() => {
    if (state.status !== 'running') return;
    if (state.capAt === null) return;
    if (now >= state.capAt) {
      dispatch({ type: 'cap-hit', now });
      if (settings.soundEnabled) playChime(4);
      const clock = formatClock(now);
      const elapsedText = formatDurationLong(elapsedMs);
      if (settings.announceTime) {
        speak(
          `Session cap reached. It's ${clock}. You've been at this for ${elapsedText}. Time to stop.`,
        );
      }
      if (
        settings.notificationsEnabled &&
        typeof document !== 'undefined' &&
        document.visibilityState === 'hidden'
      ) {
        fireNotification(
          'Hyperfocus cap reached',
          `It's ${clock}. You've been at this for ${elapsedText}. Time to stop.`,
        );
      }
    }
  }, [state.status, state.capAt, now, settings, elapsedMs]);

  useEffect(() => {
    if (typeof navigator === 'undefined') return;
    const nav = navigator as Navigator & {
      wakeLock?: { request: (type: 'screen') => Promise<WakeLockSentinel> };
    };
    if (!nav.wakeLock) return;

    const acquire = async () => {
      try {
        if (state.status === 'running' || state.status === 'check-in-due') {
          if (!wakeLockRef.current) {
            wakeLockRef.current = await nav.wakeLock!.request('screen');
          }
        } else if (wakeLockRef.current) {
          await wakeLockRef.current.release();
          wakeLockRef.current = null;
        }
      } catch {
        // Wake lock can be refused. Not critical.
      }
    };
    acquire();

    const onVisibility = () => {
      if (
        document.visibilityState === 'visible' &&
        (state.status === 'running' || state.status === 'check-in-due')
      ) {
        acquire();
      }
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [state.status]);

  const start = useCallback(() => {
    const t = Date.now();
    dispatch({
      type: 'start',
      now: t,
      firstCheckInAt: t + jitter(intervalMs),
      capAt: capMs !== null ? t + capMs : null,
    });
    setNow(t);
    if (settings.notificationsEnabled && notificationState === 'default') {
      requestNotificationPermission().then((p) => setNotificationState(p));
    }
  }, [intervalMs, capMs, settings.notificationsEnabled, notificationState]);

  const pause = useCallback(() => {
    dispatch({ type: 'pause', now: Date.now() });
  }, []);

  const resume = useCallback(() => {
    dispatch({ type: 'resume', now: Date.now(), intervalMs, capMs });
  }, [intervalMs, capMs]);

  const reset = useCallback(() => {
    try {
      window.speechSynthesis?.cancel();
    } catch {
      // Speech may not be supported.
    }
    dispatch({ type: 'reset' });
  }, []);

  const acknowledge = useCallback(
    (action: CheckIn['action']) => {
      try {
        window.speechSynthesis?.cancel();
      } catch {
        // Speech may not be supported.
      }
      const t = Date.now();
      dispatch({
        type: 'acknowledge',
        now: t,
        nextCheckInAt: t + jitter(intervalMs),
        action,
        task: settings.task.trim(),
      });
    },
    [intervalMs, settings.task],
  );

  const applyInterval = useCallback((mins: number) => {
    const safe = Math.max(1, Math.min(240, Math.round(mins)));
    setSettings((s) => ({ ...s, intervalMin: safe }));
    setCustomIntervalValue(String(safe));
  }, []);

  const applyCustomInterval = useCallback(() => {
    const n = Number(customIntervalValue);
    if (Number.isFinite(n) && n > 0) applyInterval(n);
  }, [customIntervalValue, applyInterval]);

  const isIdle = state.status === 'idle';
  const isRunning = state.status === 'running';
  const isPaused = state.status === 'paused';
  const isCheckInDue = state.status === 'check-in-due';
  const isSessionCap = state.status === 'session-cap';

  return (
    <section
      aria-label="Hyperfocus interrupt timer"
      className="rounded-3xl border border-warm-dark/30 shadow-[0_4px_30px_rgba(45,43,50,0.06)] p-6 sm:p-10"
      style={CARD_STYLE}
    >
      {isIdle && (
        <div className="flex flex-col gap-7">
          <SessionStrip intervalMin={settings.intervalMin} capMin={settings.maxSessionMin} />

          <p className="text-center text-lg sm:text-xl font-[family-name:var(--font-display)] text-charcoal leading-snug">
            Check in every{' '}
            <span className="font-bold">{intervalLabelFor(settings.intervalMin)}</span>
            {settings.maxSessionMin > 0 ? (
              <>
                {' '}with a hard stop at{' '}
                <span className="font-bold">{capLabelFor(settings.maxSessionMin)}</span>.
              </>
            ) : (
              <> with no hard stop.</>
            )}
          </p>

          <div>
            <p className="text-sm font-medium text-charcoal mb-2 text-center">Check in every</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {INTERVAL_PRESETS.map((m) => {
                const active = settings.intervalMin === m && !customIntervalOpen;
                return (
                  <button
                    key={m}
                    type="button"
                    onClick={() => {
                      applyInterval(m);
                      setCustomIntervalOpen(false);
                    }}
                    className={active ? PILL_ACTIVE : PILL_INACTIVE}
                    style={active ? PILL_ACTIVE_STYLE : undefined}
                  >
                    {m} min
                  </button>
                );
              })}
              <button
                type="button"
                onClick={() => setCustomIntervalOpen((o) => !o)}
                aria-expanded={customIntervalOpen}
                aria-controls="hyperfocus-custom-interval"
                className={customIntervalOpen ? PILL_ACTIVE : PILL_INACTIVE}
                style={customIntervalOpen ? PILL_ACTIVE_STYLE : undefined}
              >
                Custom
              </button>
            </div>
            {customIntervalOpen && (
              <div
                id="hyperfocus-custom-interval"
                className="mt-3 flex flex-wrap items-end justify-center gap-3 rounded-2xl bg-white/40 backdrop-blur-sm p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)]"
              >
                <label className="flex flex-col gap-1 text-sm text-charcoal-light">
                  <span>Minutes</span>
                  <input
                    type="number"
                    min={1}
                    max={240}
                    value={customIntervalValue}
                    onChange={(e) => setCustomIntervalValue(e.target.value)}
                    className="w-28 rounded-lg border border-warm-dark/40 bg-white px-3 py-2 text-charcoal focus:outline-none focus:ring-2 focus:ring-lavender"
                  />
                </label>
                <button
                  type="button"
                  onClick={applyCustomInterval}
                  className="px-5 py-2 rounded-full text-cream font-medium shadow-[0_4px_12px_rgba(149,133,184,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] transition-shadow"
                  style={{
                    background: 'linear-gradient(180deg, var(--color-lavender), var(--color-lavender-dark))',
                  }}
                >
                  Set
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between gap-3 border-t border-warm-dark/20 pt-5">
            <p className="text-xs text-muted">
              Check-ins are jittered by about ten percent so the brain cannot pre-dismiss them.
            </p>
            <button
              type="button"
              onClick={() => setCustomizeOpen((o) => !o)}
              aria-expanded={customizeOpen}
              aria-controls="hyperfocus-customize"
              className="shrink-0 text-sm font-medium text-lavender-dark hover:underline"
            >
              {customizeOpen ? 'Hide options' : 'More options'}
            </button>
          </div>

          {customizeOpen && (
            <div
              id="hyperfocus-customize"
              className="flex flex-col gap-5 rounded-2xl bg-white/40 backdrop-blur-sm p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)]"
            >
              <label className="flex flex-col gap-2 text-sm text-charcoal-light">
                <span className="font-medium text-charcoal">What are you working on? (optional)</span>
                <input
                  type="text"
                  value={settings.task}
                  maxLength={80}
                  onChange={(e) => setSettings((s) => ({ ...s, task: e.target.value }))}
                  placeholder="e.g. tax forms, design review, the script"
                  className="rounded-lg border border-warm-dark/40 bg-white px-3 py-2 text-charcoal focus:outline-none focus:ring-2 focus:ring-lavender"
                />
                <span className="text-xs text-muted">
                  Used in spoken check-ins so you hear what you sat down to do.
                </span>
              </label>

              <div>
                <p className="text-sm font-medium text-charcoal mb-2">Hard stop after</p>
                <div className="flex flex-wrap gap-2">
                  {CAP_PRESETS.map((c) => {
                    const active = settings.maxSessionMin === c.value;
                    return (
                      <button
                        key={c.label}
                        type="button"
                        onClick={() => setSettings((s) => ({ ...s, maxSessionMin: c.value }))}
                        className={active ? PILL_ACTIVE : PILL_INACTIVE}
                        style={active ? PILL_ACTIVE_STYLE : undefined}
                      >
                        {c.label}
                      </button>
                    );
                  })}
                </div>
                <p className="mt-2 text-xs text-muted">
                  A louder alert fires once the cap is reached so a six-hour spiral cannot sneak past you.
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-charcoal mb-2">Alerts</p>
                <div className="flex flex-wrap gap-2">
                  <ToggleChip
                    active={settings.soundEnabled}
                    onClick={() => setSettings((s) => ({ ...s, soundEnabled: !s.soundEnabled }))}
                    icon={<SoundChipIcon />}
                    label="Chime"
                  />
                  <ToggleChip
                    active={settings.announceTime}
                    onClick={() => setSettings((s) => ({ ...s, announceTime: !s.announceTime }))}
                    icon={<VoiceChipIcon />}
                    label="Voice"
                  />
                  <ToggleChip
                    active={settings.notificationsEnabled && notificationState !== 'denied'}
                    disabled={notificationState === 'unsupported' || notificationState === 'denied'}
                    onClick={() => {
                      const next = !settings.notificationsEnabled;
                      setSettings((s) => ({ ...s, notificationsEnabled: next }));
                      if (next && notificationState === 'default') {
                        requestNotificationPermission().then((p) => setNotificationState(p));
                      }
                    }}
                    icon={<NotifyChipIcon />}
                    label="Notify"
                  />
                </div>
                <p className="mt-2 text-xs text-muted">
                  Chime gets louder if a check-in is ignored. Voice speaks the time and elapsed
                  duration. Notify fires a browser notification when the tab is in the background.
                </p>
                {notificationState === 'denied' && (
                  <p className="mt-1 text-xs text-muted">
                    Notifications are blocked in this browser. Enable them in site settings to use
                    this.
                  </p>
                )}
                {notificationState === 'unsupported' && (
                  <p className="mt-1 text-xs text-muted">
                    Your browser does not support web notifications.
                  </p>
                )}
              </div>
            </div>
          )}

          <div className="flex justify-center">
            <button type="button" onClick={start} className={PRIMARY_CLASS} style={PRIMARY_STYLE}>
              Start session
            </button>
          </div>
        </div>
      )}

      {!isIdle && (
        <div className="flex flex-col items-center gap-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full text-center">
            <StatBlock label="Elapsed" value={formatDurationShort(elapsedMs)} />
            <StatBlock
              label="Next check-in"
              value={
                isCheckInDue
                  ? 'Now'
                  : isPaused
                    ? 'Paused'
                    : isSessionCap
                      ? 'Cap hit'
                      : formatCountdown(remainingToCheckIn)
              }
            />
            <StatBlock
              label="Cap"
              value={
                remainingToCap === null
                  ? 'Off'
                  : isSessionCap
                    ? '00:00'
                    : formatDurationShort(remainingToCap)
              }
            />
          </div>

          {settings.task.trim() && (
            <p className="text-sm text-muted">
              Working on{' '}
              <span className="text-charcoal font-medium">{settings.task.trim()}</span>
            </p>
          )}

          {isCheckInDue && (
            <div
              role="alertdialog"
              aria-labelledby="check-in-heading"
              className="w-full rounded-2xl border-2 border-coral/60 bg-white/80 p-5"
              style={{ boxShadow: '0 8px 28px rgba(232, 150, 122, 0.28)' }}
            >
              <h3
                id="check-in-heading"
                className="font-[family-name:var(--font-display)] text-xl font-bold text-charcoal mb-1"
              >
                Quick check-in
              </h3>
              <p className="text-sm text-charcoal-light leading-6 mb-4">
                It is {formatClock(now)} and you have been at this for {formatDurationLong(elapsedMs)}.
                Are you still on the task you started, or is it time to surface?
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => acknowledge('continue')}
                  className={PRIMARY_CLASS}
                  style={PRIMARY_STYLE}
                >
                  Still going
                </button>
                <button
                  type="button"
                  onClick={() => acknowledge('break')}
                  className={GHOST_CLASS}
                >
                  Take a break
                </button>
                <button
                  type="button"
                  onClick={() => acknowledge('stop')}
                  className={GHOST_CLASS}
                >
                  Stop session
                </button>
              </div>
            </div>
          )}

          {isSessionCap && (
            <div
              role="alertdialog"
              aria-labelledby="cap-heading"
              className="w-full rounded-2xl border-2 border-charcoal/40 bg-white/85 p-5"
            >
              <h3
                id="cap-heading"
                className="font-[family-name:var(--font-display)] text-xl font-bold text-charcoal mb-1"
              >
                Session cap reached
              </h3>
              <p className="text-sm text-charcoal-light leading-6 mb-4">
                You set a hard stop at {settings.maxSessionMin} minutes. Stand up, drink water,
                eat something. The work will still be here.
              </p>
              <button type="button" onClick={reset} className={PRIMARY_CLASS} style={PRIMARY_STYLE}>
                End session
              </button>
            </div>
          )}

          {(isRunning || isPaused) && !isCheckInDue && !isSessionCap && (
            <div className="flex flex-wrap items-center justify-center gap-3">
              {isRunning ? (
                <button type="button" onClick={pause} className={PRIMARY_CLASS} style={PRIMARY_STYLE}>
                  Pause
                </button>
              ) : (
                <button type="button" onClick={resume} className={PRIMARY_CLASS} style={PRIMARY_STYLE}>
                  Resume
                </button>
              )}
              <button type="button" onClick={reset} className={GHOST_CLASS}>
                End session
              </button>
            </div>
          )}

          {state.checkIns.length > 0 && (
            <div className="w-full border-t border-warm-dark/20 pt-5">
              <p className="text-sm font-medium text-charcoal mb-2">Check-in log</p>
              <ul className="space-y-1.5">
                {state.checkIns.slice(-5).reverse().map((c) => (
                  <li key={c.at} className="text-sm text-charcoal-light flex items-center gap-2">
                    <span className="tabular-nums text-muted w-14">{formatClock(c.at)}</span>
                    <span className="capitalize">{c.action === 'continue' ? 'kept going' : c.action === 'break' ? 'took a break' : 'stopped'}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

function StatBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/60 px-3 py-4 shadow-[inset_0_0_0_1px_rgba(45,43,50,0.06)]">
      <p className="text-xs uppercase tracking-wider text-muted mb-1">{label}</p>
      <p className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-charcoal tabular-nums">
        {value}
      </p>
    </div>
  );
}
