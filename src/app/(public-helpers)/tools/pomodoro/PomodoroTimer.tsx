'use client';

import { useCallback, useEffect, useReducer, useRef, useState } from 'react';

type Mode = 'work' | 'short-break' | 'long-break';

type Durations = { work: number; short: number; long: number }; // minutes

type Settings = {
  durations: Durations;
  soundEnabled: boolean;
  longBreakEvery: number;
};

type TimerState = {
  mode: Mode;
  completedWorkSessions: number;
  // When running: endTime is an absolute epoch ms. Tick by computing endTime - Date.now() so the timer
  // stays accurate even when the tab is throttled in the background.
  // When paused: remainingMs is the snapshot taken at pause time.
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

const MODE_LABEL: Record<Mode, string> = {
  work: 'Focus',
  'short-break': 'Short break',
  'long-break': 'Long break',
};

const MODE_ACCENT: Record<Mode, string> = {
  work: 'bg-coral text-cream',
  'short-break': 'bg-sage text-cream',
  'long-break': 'bg-lavender text-cream',
};

function durationFor(mode: Mode, d: Durations): number {
  return (mode === 'work' ? d.work : mode === 'short-break' ? d.short : d.long) * 60_000;
}

function nextMode(current: Mode, completedWorkSessions: number, longBreakEvery: number): Mode {
  if (current !== 'work') return 'work';
  // We just finished a work session. That completion happens before this call,
  // so completedWorkSessions already includes the one we just finished.
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
    // Two soft tones. Short, ADHD-friendly - not a startling alarm.
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
    // Audio failures are silent - the tool still works.
  }
}

export default function PomodoroTimer() {
  const [settings, setSettings] = useState<Settings>(DEFAULTS);
  const [state, dispatch] = useReducer(reducer, initialState(DEFAULTS));
  const [hydrated, setHydrated] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const originalTitleRef = useRef<string | null>(null);

  // Load persisted state on mount.
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
          // If a session was running when the tab closed, resume it from the original endTime
          // so the user doesn't lose elapsed time.
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
              // Session expired while away - restart it idle at full duration on the same mode.
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

  // Persist whenever state or settings change.
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ settings, state }));
    } catch {
      // Storage quota / private mode - non-fatal.
    }
  }, [hydrated, settings, state]);

  // Tick loop - uses absolute endTime so background-throttled tabs stay accurate.
  useEffect(() => {
    if (state.status !== 'running' || state.endTime === null) return;
    const id = window.setInterval(() => dispatch({ type: 'tick', now: Date.now() }), 250);
    return () => window.clearInterval(id);
  }, [state.status, state.endTime]);

  // Detect session completion.
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

  // Update document title while running so users on another tab can glance at progress.
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (originalTitleRef.current === null) originalTitleRef.current = document.title;
    if (state.status === 'running') {
      document.title = `${format(state.remainingMs)} · ${MODE_LABEL[state.mode]} · Doubly`;
    } else if (originalTitleRef.current) {
      document.title = originalTitleRef.current;
    }
    return () => {
      if (originalTitleRef.current) document.title = originalTitleRef.current;
    };
  }, [state.status, state.remainingMs, state.mode]);

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

  // Reset remaining time when active mode's duration changes via settings.
  useEffect(() => {
    if (state.status === 'idle') {
      dispatch({ type: 'reset', durationMs: durationFor(state.mode, settings.durations) });
    }
    // We intentionally only react to durations, not to status changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.durations.work, settings.durations.short, settings.durations.long]);

  const display = format(state.remainingMs);
  const isRunning = state.status === 'running';
  const isPaused = state.status === 'paused';
  const totalMs = durationFor(state.mode, settings.durations);
  const progress = totalMs > 0 ? Math.min(1, Math.max(0, 1 - state.remainingMs / totalMs)) : 0;

  return (
    <section
      aria-label="Pomodoro timer"
      className="rounded-3xl bg-white border border-warm-dark/30 shadow-[0_4px_30px_rgba(45,43,50,0.06)] p-6 sm:p-10"
    >
      {/* Mode tabs */}
      <div role="tablist" aria-label="Timer mode" className="flex flex-wrap gap-2 mb-8">
        {(['work', 'short-break', 'long-break'] as Mode[]).map((m) => (
          <button
            key={m}
            role="tab"
            type="button"
            aria-selected={state.mode === m}
            onClick={() => switchMode(m)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              state.mode === m
                ? MODE_ACCENT[m]
                : 'bg-warm text-charcoal-light hover:bg-warm-dark'
            }`}
          >
            {MODE_LABEL[m]}
          </button>
        ))}
      </div>

      {/* Timer display */}
      <div className="text-center mb-8">
        <div
          aria-live="polite"
          aria-atomic="true"
          className="font-[family-name:var(--font-display)] text-7xl sm:text-8xl font-bold text-charcoal tabular-nums tracking-tight"
        >
          {display}
        </div>
        <p className="mt-2 text-sm text-muted">
          Sessions completed today:{' '}
          <span className="text-charcoal font-medium">{state.completedWorkSessions}</span>
        </p>

        {/* Progress bar */}
        <div className="mt-6 h-1.5 w-full bg-warm rounded-full overflow-hidden" aria-hidden="true">
          <div
            className={`h-full transition-[width] duration-300 ${
              state.mode === 'work' ? 'bg-coral' : state.mode === 'short-break' ? 'bg-sage' : 'bg-lavender'
            }`}
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {!isRunning ? (
          <button
            type="button"
            onClick={start}
            className="px-8 py-3 rounded-full bg-charcoal text-cream font-semibold hover:bg-charcoal-light transition-colors min-w-[8rem]"
          >
            {isPaused ? 'Resume' : 'Start'}
          </button>
        ) : (
          <button
            type="button"
            onClick={pause}
            className="px-8 py-3 rounded-full bg-charcoal text-cream font-semibold hover:bg-charcoal-light transition-colors min-w-[8rem]"
          >
            Pause
          </button>
        )}
        <button
          type="button"
          onClick={reset}
          className="px-6 py-3 rounded-full bg-warm text-charcoal font-medium hover:bg-warm-dark transition-colors"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={skip}
          className="px-6 py-3 rounded-full bg-warm text-charcoal font-medium hover:bg-warm-dark transition-colors"
          aria-label="Skip to next session"
        >
          Skip &rarr;
        </button>
      </div>

      {/* Settings toggle */}
      <div className="mt-8 flex items-center justify-between text-sm border-t border-warm-dark/20 pt-6">
        <label className="inline-flex items-center gap-2 cursor-pointer text-charcoal-light">
          <input
            type="checkbox"
            checked={settings.soundEnabled}
            onChange={(e) => setSettings((s) => ({ ...s, soundEnabled: e.target.checked }))}
            className="h-4 w-4 rounded accent-lavender-dark"
          />
          Sound at session end
        </label>
        <button
          type="button"
          onClick={() => setSettingsOpen((o) => !o)}
          aria-expanded={settingsOpen}
          aria-controls="pomodoro-settings"
          className="text-sm font-medium text-lavender-dark hover:underline"
        >
          {settingsOpen ? 'Hide settings' : 'Customize durations'}
        </button>
      </div>

      {settingsOpen && (
        <div
          id="pomodoro-settings"
          className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-2xl bg-cream-dark/60 p-4"
        >
          <DurationInput
            label="Focus (min)"
            value={settings.durations.work}
            onChange={(n) => updateDuration('work', n)}
          />
          <DurationInput
            label="Short break (min)"
            value={settings.durations.short}
            onChange={(n) => updateDuration('short', n)}
          />
          <DurationInput
            label="Long break (min)"
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
