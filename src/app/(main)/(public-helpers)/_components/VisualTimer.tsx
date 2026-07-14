'use client';

import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import TimerDial from './TimerDial';
import TimerControls from './TimerControls';
import { useT } from '@/i18n/TranslationProvider';
import type { Translations } from '@/translations/en';

type TimerStrings = Translations['toolWidgets']['visualTimer'];

type Status = 'idle' | 'running' | 'paused';

type TimerState = {
  status: Status;
  durationMs: number;
  endTime: number | null;
  remainingMs: number;
};

type Persisted = {
  lastDurationMs?: number;
  soundEnabled?: boolean;
};

export type VisualTimerProps = {
  presets: number[];
  defaultMinutes: number;
  storageKey: string;
  ariaLabel?: string;
};

type Action =
  | { type: 'hydrate'; durationMs: number }
  | { type: 'setDuration'; durationMs: number }
  | { type: 'start' }
  | { type: 'pause'; now: number }
  | { type: 'resume' }
  | { type: 'reset' }
  | { type: 'tick'; now: number }
  | { type: 'complete' };

function reducer(state: TimerState, action: Action): TimerState {
  switch (action.type) {
    case 'hydrate':
      return { status: 'idle', durationMs: action.durationMs, endTime: null, remainingMs: action.durationMs };
    case 'setDuration':
      return { status: 'idle', durationMs: action.durationMs, endTime: null, remainingMs: action.durationMs };
    case 'start':
      return { ...state, status: 'running', endTime: Date.now() + state.remainingMs };
    case 'pause':
      return {
        ...state,
        status: 'paused',
        remainingMs: state.endTime ? Math.max(0, state.endTime - action.now) : state.remainingMs,
        endTime: null,
      };
    case 'resume':
      return { ...state, status: 'running', endTime: Date.now() + state.remainingMs };
    case 'reset':
      return { ...state, status: 'idle', endTime: null, remainingMs: state.durationMs };
    case 'tick':
      if (state.status !== 'running' || state.endTime === null) return state;
      return { ...state, remainingMs: Math.max(0, state.endTime - action.now) };
    case 'complete':
      return { ...state, status: 'idle', endTime: null, remainingMs: 0 };
  }
}

function formatTime(ms: number): string {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  if (h > 0) {
    return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function describeDuration(ms: number, strings: TimerStrings): string {
  const total = Math.round(ms / 1000);
  const m = Math.floor(total / 60);
  const s = total % 60;
  if (m === 0) return strings.seconds(s);
  if (s === 0) return strings.minutes(m);
  return strings.minutesAndSeconds(m, s);
}

function playChime(): void {
  try {
    const Ctx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
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
    // Audio failures are silent. The visual still works.
  }
}

const CARD_STYLE: React.CSSProperties = {
  background: 'linear-gradient(160deg, var(--color-cream), var(--color-cream-dark))',
};

export default function VisualTimer({
  presets,
  defaultMinutes,
  storageKey,
  ariaLabel,
}: VisualTimerProps) {
  const t = useT();
  const strings = t.toolWidgets.visualTimer;
  const initialDurationMs = defaultMinutes * 60_000;
  const [state, dispatch] = useReducer(reducer, {
    status: 'idle',
    durationMs: initialDurationMs,
    endTime: null,
    remainingMs: initialDurationMs,
  });
  const [hydrated, setHydrated] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [customOpen, setCustomOpen] = useState(false);
  const [customValue, setCustomValue] = useState<string>(String(defaultMinutes));
  const originalTitleRef = useRef<string | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw) as Persisted;
        if (typeof parsed.lastDurationMs === 'number' && parsed.lastDurationMs > 0) {
          dispatch({ type: 'hydrate', durationMs: parsed.lastDurationMs });
          setCustomValue(String(Math.round(parsed.lastDurationMs / 60_000)));
        }
        if (typeof parsed.soundEnabled === 'boolean') {
          setSoundEnabled(parsed.soundEnabled);
        }
      }
    } catch {
      // Corrupted storage, fall back to defaults.
    }
    setHydrated(true);
  }, [storageKey]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      const payload: Persisted = { lastDurationMs: state.durationMs, soundEnabled };
      localStorage.setItem(storageKey, JSON.stringify(payload));
    } catch {
      // Storage quota or private mode. Non-fatal.
    }
  }, [hydrated, state.durationMs, soundEnabled, storageKey]);

  useEffect(() => {
    if (state.status !== 'running' || state.endTime === null) return;
    const id = window.setInterval(() => dispatch({ type: 'tick', now: Date.now() }), 200);
    return () => window.clearInterval(id);
  }, [state.status, state.endTime]);

  useEffect(() => {
    if (state.status !== 'running') return;
    if (state.remainingMs > 0) return;
    if (soundEnabled) playChime();
    dispatch({ type: 'complete' });
  }, [state.status, state.remainingMs, soundEnabled]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (originalTitleRef.current === null) originalTitleRef.current = document.title;
    if (state.status === 'running') {
      document.title = strings.documentTitle(formatTime(state.remainingMs));
    } else if (originalTitleRef.current) {
      document.title = originalTitleRef.current;
    }
    return () => {
      if (originalTitleRef.current) document.title = originalTitleRef.current;
    };
  }, [state.status, state.remainingMs, strings]);

  const start = useCallback(() => {
    if (state.status === 'idle') dispatch({ type: 'start' });
    else if (state.status === 'paused') dispatch({ type: 'resume' });
  }, [state.status]);

  const pause = useCallback(() => dispatch({ type: 'pause', now: Date.now() }), []);
  const reset = useCallback(() => dispatch({ type: 'reset' }), []);

  const applyPreset = useCallback((minutes: number) => {
    const safe = Math.max(1, Math.min(180, Math.round(minutes)));
    dispatch({ type: 'setDuration', durationMs: safe * 60_000 });
    setCustomValue(String(safe));
  }, []);

  const applyCustom = useCallback(() => {
    const n = Number(customValue);
    if (Number.isFinite(n) && n > 0) {
      const safe = Math.max(1, Math.min(180, Math.round(n)));
      dispatch({ type: 'setDuration', durationMs: safe * 60_000 });
      setCustomValue(String(safe));
    }
  }, [customValue]);

  const isRunning = state.status === 'running';
  const isPaused = state.status === 'paused';
  const isFinished = state.status === 'idle' && state.remainingMs === 0;
  const progress = state.durationMs > 0 ? state.remainingMs / state.durationMs : 0;
  const display = formatTime(state.remainingMs);
  const currentMinutes = Math.round(state.durationMs / 60_000);

  return (
    <section
      aria-label={ariaLabel ?? strings.ariaLabel}
      className="rounded-3xl border border-warm-dark/30 shadow-[0_4px_30px_rgba(45,43,50,0.06)] p-6 sm:p-10"
      style={CARD_STYLE}
    >
      <div className="flex flex-col items-center gap-6">
        <TimerDial
          progress={progress}
          tone="coral"
          display={display}
          status={state.status}
          ariaLabel={strings.dialAriaLabel(describeDuration(state.remainingMs, strings))}
        />

        <p className="text-sm text-muted">
          {isRunning
            ? strings.countingDown(currentMinutes)
            : isPaused
              ? strings.paused
              : isFinished
                ? strings.timeIsUp
                : strings.setFor(currentMinutes)}
        </p>
      </div>

      <div className="mt-8">
        <TimerControls
          status={state.status}
          remainingMs={state.remainingMs}
          onStart={start}
          onPause={pause}
          onReset={reset}
        />
      </div>

      <div
        role="group"
        aria-label={strings.presetsLabel}
        className="mt-8 flex flex-wrap items-center justify-center gap-2"
      >
        {presets.map((m) => {
          const active = currentMinutes === m && !customOpen;
          return (
            <button
              key={m}
              type="button"
              onClick={() => {
                applyPreset(m);
                setCustomOpen(false);
              }}
              className={
                active
                  ? 'px-4 py-2 rounded-full text-sm font-semibold text-cream shadow-[0_2px_8px_rgba(45,43,50,0.18),inset_0_1px_0_rgba(255,255,255,0.1)]'
                  : 'px-4 py-2 rounded-full text-sm font-medium bg-white/60 text-charcoal hover:bg-white/85 shadow-[inset_0_0_0_1px_rgba(45,43,50,0.08)] transition-colors'
              }
              style={
                active
                  ? { background: 'linear-gradient(180deg, var(--color-charcoal-light), var(--color-charcoal))' }
                  : undefined
              }
            >
              {strings.presetMinutes(m)}
            </button>
          );
        })}
        <button
          type="button"
          onClick={() => setCustomOpen((o) => !o)}
          aria-expanded={customOpen}
          aria-controls="visual-timer-custom"
          className={
            customOpen
              ? 'px-4 py-2 rounded-full text-sm font-semibold text-cream shadow-[0_2px_8px_rgba(45,43,50,0.18),inset_0_1px_0_rgba(255,255,255,0.1)]'
              : 'px-4 py-2 rounded-full text-sm font-medium bg-white/60 text-charcoal hover:bg-white/85 shadow-[inset_0_0_0_1px_rgba(45,43,50,0.08)] transition-colors'
          }
          style={
            customOpen
              ? { background: 'linear-gradient(180deg, var(--color-charcoal-light), var(--color-charcoal))' }
              : undefined
          }
        >
          {strings.custom}
        </button>
      </div>

      {customOpen && (
        <div
          id="visual-timer-custom"
          className="mt-4 flex flex-wrap items-end justify-center gap-3 rounded-2xl bg-white/40 backdrop-blur-sm p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)]"
        >
          <label className="flex flex-col gap-1 text-sm text-charcoal-light">
            <span>{strings.minutesLabel}</span>
            <input
              type="number"
              min={1}
              max={180}
              value={customValue}
              onChange={(e) => setCustomValue(e.target.value)}
              className="w-28 rounded-lg border border-warm-dark/40 bg-white px-3 py-2 text-charcoal focus:outline-none focus:ring-2 focus:ring-lavender"
            />
          </label>
          <button
            type="button"
            onClick={applyCustom}
            className="px-5 py-2 rounded-full text-cream font-medium shadow-[0_4px_12px_rgba(149,133,184,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_6px_16px_rgba(149,133,184,0.4),inset_0_1px_0_rgba(255,255,255,0.25)] transition-shadow"
            style={{ background: 'linear-gradient(180deg, var(--color-lavender), var(--color-lavender-dark))' }}
          >
            {strings.set}
          </button>
        </div>
      )}

      <div className="mt-8 flex items-center justify-center text-sm border-t border-warm-dark/20 pt-6">
        <label className="inline-flex items-center gap-2 cursor-pointer text-charcoal-light">
          <input
            type="checkbox"
            checked={soundEnabled}
            onChange={(e) => setSoundEnabled(e.target.checked)}
            className="h-4 w-4 rounded accent-lavender-dark"
          />
          {strings.soundWhenDone}
        </label>
      </div>
    </section>
  );
}
