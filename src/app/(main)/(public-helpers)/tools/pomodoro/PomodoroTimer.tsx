'use client';

import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { useT } from '@/i18n/TranslationProvider';
import TimerDial, { type WedgeTone } from '../../_components/TimerDial';
import TimerControls from '../../_components/TimerControls';

type Mode = 'work' | 'short-break' | 'long-break';

type Durations = { work: number; short: number; long: number };

type Settings = {
  durations: Durations;
  soundEnabled: boolean;
  longBreakEvery: number;
};

type TimerState = {
  mode: Mode;
  completedWorkSessions: number;
  status: 'idle' | 'running' | 'paused';
  endTime: number | null;
  remainingMs: number;
};

const DEFAULTS: Settings = {
  durations: { work: 25, short: 5, long: 15 },
  soundEnabled: false,
  longBreakEvery: 4,
};

const STORAGE_KEY = 'doubly:pomodoro:v1';

const MODE_TONE: Record<Mode, WedgeTone> = {
  work: 'coral',
  'short-break': 'sage',
  'long-break': 'lavender',
};

const MODE_TAB_GRADIENT: Record<Mode, string> = {
  work: 'linear-gradient(180deg, var(--color-coral-light), var(--color-coral-dark))',
  'short-break': 'linear-gradient(180deg, var(--color-sage), var(--color-sage-dark))',
  'long-break': 'linear-gradient(180deg, var(--color-lavender), var(--color-lavender-dark))',
};

function durationFor(mode: Mode, d: Durations): number {
  return (mode === 'work' ? d.work : mode === 'short-break' ? d.short : d.long) * 60_000;
}

function nextMode(current: Mode, completedWorkSessions: number, longBreakEvery: number): Mode {
  if (current !== 'work') return 'work';
  return completedWorkSessions % longBreakEvery === 0 ? 'long-break' : 'short-break';
}

function format(ms: number): string {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(total / 60).toString().padStart(2, '0');
  const s = (total % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

type Action =
  | { type: 'hydrate'; state: TimerState }
  | { type: 'start'; durationMs: number }
  | { type: 'pause'; now: number }
  | { type: 'resume' }
  | { type: 'reset'; durationMs: number }
  | { type: 'tick'; now: number }
  | { type: 'complete'; nextMode: Mode; nextDurationMs: number; incrementWork: boolean }
  | { type: 'switchMode'; mode: Mode; durationMs: number };

function reducer(state: TimerState, action: Action): TimerState {
  switch (action.type) {
    case 'hydrate':
      return action.state;
    case 'start':
      return {
        ...state,
        status: 'running',
        endTime: Date.now() + action.durationMs,
        remainingMs: action.durationMs,
      };
    case 'pause':
      return {
        ...state,
        status: 'paused',
        endTime: null,
        remainingMs: state.endTime ? Math.max(0, state.endTime - action.now) : state.remainingMs,
      };
    case 'resume':
      return {
        ...state,
        status: 'running',
        endTime: Date.now() + state.remainingMs,
      };
    case 'reset':
      return {
        ...state,
        status: 'idle',
        endTime: null,
        remainingMs: action.durationMs,
      };
    case 'tick':
      if (state.status !== 'running' || state.endTime === null) return state;
      return { ...state, remainingMs: Math.max(0, state.endTime - action.now) };
    case 'complete':
      return {
        ...state,
        mode: action.nextMode,
        completedWorkSessions: action.incrementWork
          ? state.completedWorkSessions + 1
          : state.completedWorkSessions,
        status: 'idle',
        endTime: null,
        remainingMs: action.nextDurationMs,
      };
    case 'switchMode':
      return {
        ...state,
        mode: action.mode,
        status: 'idle',
        endTime: null,
        remainingMs: action.durationMs,
      };
  }
}

function initialState(settings: Settings): TimerState {
  return {
    mode: 'work',
    completedWorkSessions: 0,
    status: 'idle',
    endTime: null,
    remainingMs: durationFor('work', settings.durations),
  };
}

function playChime(): void {
  try {
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const now = ctx.currentTime;
    [880, 1320].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      const t = now + i * 0.18;
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.18, t + 0.02);
      gain.gain.linearRampToValueAtTime(0, t + 0.32);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.35);
    });
    setTimeout(() => ctx.close(), 1000);
  } catch {
    // Audio failures are silent. The tool still works.
  }
}

const CARD_STYLE: React.CSSProperties = {
  background: 'linear-gradient(160deg, var(--color-cream), var(--color-cream-dark))',
};

export default function PomodoroTimer() {
  const copy = useT().toolWidgets.pomodoro;
  const modeLabels = useMemo<Record<Mode, string>>(
    () => ({
      work: copy.modes.work,
      'short-break': copy.modes['short-break'],
      'long-break': copy.modes['long-break'],
    }),
    [copy],
  );
  const [settings, setSettings] = useState<Settings>(DEFAULTS);
  const [state, dispatch] = useReducer(reducer, initialState(DEFAULTS));
  const [hydrated, setHydrated] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const originalTitleRef = useRef<string | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as { settings?: Partial<Settings>; state?: Partial<TimerState> };
        const loadedSettings: Settings = {
          durations: { ...DEFAULTS.durations, ...(parsed.settings?.durations ?? {}) },
          soundEnabled: parsed.settings?.soundEnabled ?? DEFAULTS.soundEnabled,
          longBreakEvery: parsed.settings?.longBreakEvery ?? DEFAULTS.longBreakEvery,
        };
        setSettings(loadedSettings);

        const persistedState = parsed.state;
        if (persistedState) {
          const mode: Mode = (persistedState.mode as Mode) ?? 'work';
          const completed = persistedState.completedWorkSessions ?? 0;
          const status = persistedState.status ?? 'idle';
          const endTime = persistedState.endTime ?? null;
          const remainingMs = persistedState.remainingMs ?? durationFor(mode, loadedSettings.durations);

          if (status === 'running' && endTime !== null) {
            const remaining = endTime - Date.now();
            if (remaining > 0) {
              dispatch({
                type: 'hydrate',
                state: { mode, completedWorkSessions: completed, status: 'running', endTime, remainingMs: remaining },
              });
            } else {
              dispatch({
                type: 'hydrate',
                state: {
                  mode,
                  completedWorkSessions: completed,
                  status: 'idle',
                  endTime: null,
                  remainingMs: durationFor(mode, loadedSettings.durations),
                },
              });
            }
          } else {
            dispatch({
              type: 'hydrate',
              state: { mode, completedWorkSessions: completed, status: status === 'running' ? 'paused' : status, endTime: null, remainingMs },
            });
          }
        } else {
          dispatch({ type: 'hydrate', state: initialState(loadedSettings) });
        }
      }
    } catch {
      // Corrupted storage - fall back to defaults silently.
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ settings, state }));
    } catch {
      // Storage quota / private mode - non-fatal.
    }
  }, [hydrated, settings, state]);

  useEffect(() => {
    if (state.status !== 'running' || state.endTime === null) return;
    const id = window.setInterval(() => dispatch({ type: 'tick', now: Date.now() }), 250);
    return () => window.clearInterval(id);
  }, [state.status, state.endTime]);

  useEffect(() => {
    if (state.status !== 'running') return;
    if (state.remainingMs > 0) return;
    const justFinishedWork = state.mode === 'work';
    const newCompleted = justFinishedWork ? state.completedWorkSessions + 1 : state.completedWorkSessions;
    const next = nextMode(state.mode, newCompleted, settings.longBreakEvery);
    if (settings.soundEnabled) playChime();
    dispatch({
      type: 'complete',
      nextMode: next,
      nextDurationMs: durationFor(next, settings.durations),
      incrementWork: justFinishedWork,
    });
  }, [state.status, state.remainingMs, state.mode, state.completedWorkSessions, settings]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (originalTitleRef.current === null) originalTitleRef.current = document.title;
    if (state.status === 'running') {
      document.title = copy.documentTitle(format(state.remainingMs), modeLabels[state.mode]);
    } else if (originalTitleRef.current) {
      document.title = originalTitleRef.current;
    }
    return () => {
      if (originalTitleRef.current) document.title = originalTitleRef.current;
    };
  }, [state.status, state.remainingMs, state.mode, copy, modeLabels]);

  const start = useCallback(() => {
    if (state.status === 'idle') {
      dispatch({ type: 'start', durationMs: state.remainingMs || durationFor(state.mode, settings.durations) });
    } else if (state.status === 'paused') {
      dispatch({ type: 'resume' });
    }
  }, [state.status, state.remainingMs, state.mode, settings.durations]);

  const pause = useCallback(() => dispatch({ type: 'pause', now: Date.now() }), []);

  const reset = useCallback(() => {
    dispatch({ type: 'reset', durationMs: durationFor(state.mode, settings.durations) });
  }, [state.mode, settings.durations]);

  const skip = useCallback(() => {
    const justFinishedWork = state.mode === 'work';
    const newCompleted = justFinishedWork ? state.completedWorkSessions + 1 : state.completedWorkSessions;
    const next = nextMode(state.mode, newCompleted, settings.longBreakEvery);
    dispatch({
      type: 'complete',
      nextMode: next,
      nextDurationMs: durationFor(next, settings.durations),
      incrementWork: justFinishedWork,
    });
  }, [state.mode, state.completedWorkSessions, settings]);

  const switchMode = useCallback(
    (mode: Mode) => dispatch({ type: 'switchMode', mode, durationMs: durationFor(mode, settings.durations) }),
    [settings.durations],
  );

  const updateDuration = useCallback((key: keyof Durations, minutes: number) => {
    const safe = Math.min(120, Math.max(1, Math.round(minutes)));
    setSettings((s) => ({ ...s, durations: { ...s.durations, [key]: safe } }));
  }, []);

  useEffect(() => {
    if (state.status === 'idle') {
      dispatch({ type: 'reset', durationMs: durationFor(state.mode, settings.durations) });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.durations.work, settings.durations.short, settings.durations.long]);

  const display = format(state.remainingMs);
  const totalMs = durationFor(state.mode, settings.durations);
  const progress = totalMs > 0 ? Math.max(0, Math.min(1, state.remainingMs / totalMs)) : 0;

  return (
    <section
      aria-label={copy.timerLabel}
      className="rounded-3xl border border-warm-dark/30 shadow-[0_4px_30px_rgba(45,43,50,0.06)] p-6 sm:p-10"
      style={CARD_STYLE}
    >
      <div
        role="tablist"
        aria-label={copy.modeTablistLabel}
        className="flex flex-wrap justify-center gap-2 mb-8"
      >
        {(['work', 'short-break', 'long-break'] as Mode[]).map((m) => {
          const active = state.mode === m;
          return (
            <button
              key={m}
              role="tab"
              type="button"
              aria-selected={active}
              onClick={() => switchMode(m)}
              className={
                active
                  ? 'px-4 py-2 rounded-full text-sm font-semibold text-cream shadow-[0_2px_8px_rgba(45,43,50,0.18),inset_0_1px_0_rgba(255,255,255,0.2)] transition-shadow'
                  : 'px-4 py-2 rounded-full text-sm font-medium bg-white/60 text-charcoal-light hover:bg-white/85 shadow-[inset_0_0_0_1px_rgba(45,43,50,0.08)] transition-colors'
              }
              style={active ? { background: MODE_TAB_GRADIENT[m] } : undefined}
            >
              {modeLabels[m]}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col items-center gap-4">
        <TimerDial
          progress={progress}
          tone={MODE_TONE[state.mode]}
          display={display}
          status={state.status}
          ariaLabel={copy.dialLabel(modeLabels[state.mode], display)}
        />
        <p className="text-sm text-muted">{copy.sessionsToday(state.completedWorkSessions)}</p>
      </div>

      <div className="mt-8">
        <TimerControls
          status={state.status}
          remainingMs={state.remainingMs}
          onStart={start}
          onPause={pause}
          onReset={reset}
          onSkip={skip}
        />
      </div>

      <div className="mt-8 flex items-center justify-between text-sm border-t border-warm-dark/20 pt-6">
        <label className="inline-flex items-center gap-2 cursor-pointer text-charcoal-light">
          <input
            type="checkbox"
            checked={settings.soundEnabled}
            onChange={(e) => setSettings((s) => ({ ...s, soundEnabled: e.target.checked }))}
            className="h-4 w-4 rounded accent-lavender-dark"
          />
          {copy.soundToggle}
        </label>
        <button
          type="button"
          onClick={() => setSettingsOpen((o) => !o)}
          aria-expanded={settingsOpen}
          aria-controls="pomodoro-settings"
          className="text-sm font-medium text-lavender-dark hover:underline"
        >
          {settingsOpen ? copy.hideSettings : copy.customizeDurations}
        </button>
      </div>

      {settingsOpen && (
        <div
          id="pomodoro-settings"
          className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-2xl bg-white/40 backdrop-blur-sm p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)]"
        >
          <DurationInput
            label={copy.focusMinutes}
            value={settings.durations.work}
            onChange={(n) => updateDuration('work', n)}
          />
          <DurationInput
            label={copy.shortBreakMinutes}
            value={settings.durations.short}
            onChange={(n) => updateDuration('short', n)}
          />
          <DurationInput
            label={copy.longBreakMinutes}
            value={settings.durations.long}
            onChange={(n) => updateDuration('long', n)}
          />
        </div>
      )}
    </section>
  );
}

function DurationInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <label className="flex flex-col gap-1 text-sm text-charcoal-light">
      <span>{label}</span>
      <input
        type="number"
        min={1}
        max={120}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="rounded-lg border border-warm-dark/40 bg-white px-3 py-2 text-charcoal focus:outline-none focus:ring-2 focus:ring-lavender"
      />
    </label>
  );
}
