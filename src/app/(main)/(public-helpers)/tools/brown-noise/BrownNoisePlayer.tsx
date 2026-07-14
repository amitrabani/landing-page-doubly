'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useT } from '@/i18n/TranslationProvider';
import { createSoundBuffer, SOUND_ORDER, type SoundType } from './sounds';

type SleepMinutes = 0 | 15 | 30 | 60 | 90;

type Persisted = {
  sound: SoundType;
  volume: number;
  sleep: SleepMinutes;
};

const STORAGE_KEY = 'doubly:brown-noise:v1';
const DEFAULT_VOLUME = 60;
const FADE_SECONDS = 2;
const SLEEP_OPTIONS: SleepMinutes[] = [0, 15, 30, 60, 90];

function loadPersisted(): Partial<Persisted> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Partial<Persisted>;
    return parsed;
  } catch {
    return {};
  }
}

function volumeToGain(volume: number): number {
  const v = Math.max(0, Math.min(100, volume)) / 100;
  return v * v;
}

export default function BrownNoisePlayer() {
  const t = useT();
  const copy = t.toolWidgets.brownNoise;
  const [sound, setSound] = useState<SoundType>('brown');
  const [volume, setVolume] = useState<number>(DEFAULT_VOLUME);
  const [sleep, setSleep] = useState<SleepMinutes>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hydrated, setHydrated] = useState<boolean>(false);

  const ctxRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const sourceRef = useRef<AudioBufferSourceNode | null>(null);
  const bufferCacheRef = useRef<Partial<Record<SoundType, AudioBuffer>>>({});
  const sleepTimerRef = useRef<number | null>(null);
  const originalTitleRef = useRef<string>('');

  useEffect(() => {
    const persisted = loadPersisted();
    if (persisted.sound && SOUND_ORDER.includes(persisted.sound)) setSound(persisted.sound);
    if (typeof persisted.volume === 'number') setVolume(persisted.volume);
    if (typeof persisted.sleep === 'number') setSleep(persisted.sleep as SleepMinutes);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const payload: Persisted = { sound, volume, sleep };
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // ignore
    }
  }, [hydrated, sound, volume, sleep]);

  useEffect(() => {
    originalTitleRef.current = document.title;
    return () => {
      document.title = originalTitleRef.current;
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      document.title = copy.documentTitle(copy.sounds[sound].name);
    } else if (originalTitleRef.current) {
      document.title = originalTitleRef.current;
    }
  }, [copy, isPlaying, sound]);

  const clearSleepTimer = useCallback(() => {
    if (sleepTimerRef.current !== null) {
      window.clearTimeout(sleepTimerRef.current);
      sleepTimerRef.current = null;
    }
  }, []);

  const stop = useCallback(() => {
    const ctx = ctxRef.current;
    const gain = gainRef.current;
    const source = sourceRef.current;
    if (gain && ctx) {
      const now = ctx.currentTime;
      gain.gain.cancelScheduledValues(now);
      gain.gain.setValueAtTime(gain.gain.value, now);
      gain.gain.linearRampToValueAtTime(0, now + 0.04);
    }
    if (source) {
      try {
        source.stop(ctx ? ctx.currentTime + 0.05 : 0);
      } catch {
        // already stopped
      }
      source.disconnect();
      sourceRef.current = null;
    }
    clearSleepTimer();
    setIsPlaying(false);
  }, [clearSleepTimer]);

  const fadeOutAndStop = useCallback(() => {
    const ctx = ctxRef.current;
    const gain = gainRef.current;
    if (!ctx || !gain) {
      stop();
      return;
    }
    const now = ctx.currentTime;
    gain.gain.cancelScheduledValues(now);
    gain.gain.setValueAtTime(gain.gain.value, now);
    gain.gain.linearRampToValueAtTime(0, now + FADE_SECONDS);
    window.setTimeout(stop, FADE_SECONDS * 1000 + 100);
  }, [stop]);

  const armSleepTimer = useCallback(
    (minutes: SleepMinutes) => {
      clearSleepTimer();
      if (minutes === 0) return;
      sleepTimerRef.current = window.setTimeout(() => {
        fadeOutAndStop();
      }, minutes * 60 * 1000);
    },
    [clearSleepTimer, fadeOutAndStop],
  );

  const ensureContext = useCallback((): AudioContext => {
    if (!ctxRef.current) {
      const Ctor: typeof AudioContext =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      ctxRef.current = new Ctor();
    }
    if (ctxRef.current.state === 'suspended') {
      void ctxRef.current.resume();
    }
    return ctxRef.current;
  }, []);

  const getBuffer = useCallback((ctx: AudioContext, type: SoundType): AudioBuffer => {
    const cached = bufferCacheRef.current[type];
    if (cached) return cached;
    const buffer = createSoundBuffer(ctx, type);
    bufferCacheRef.current[type] = buffer;
    return buffer;
  }, []);

  const play = useCallback(
    (type: SoundType) => {
      const ctx = ensureContext();
      if (sourceRef.current) {
        try {
          sourceRef.current.stop();
        } catch {
          // ignore
        }
        sourceRef.current.disconnect();
        sourceRef.current = null;
      }
      if (!gainRef.current) {
        gainRef.current = ctx.createGain();
        gainRef.current.connect(ctx.destination);
      }
      const gain = gainRef.current;
      const target = volumeToGain(volume);
      const now = ctx.currentTime;
      gain.gain.cancelScheduledValues(now);
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(target, now + 0.05);

      const source = ctx.createBufferSource();
      source.buffer = getBuffer(ctx, type);
      source.loop = true;
      source.connect(gain);
      source.start();
      sourceRef.current = source;

      armSleepTimer(sleep);
      setIsPlaying(true);
    },
    [armSleepTimer, ensureContext, getBuffer, sleep, volume],
  );

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      stop();
    } else {
      play(sound);
    }
  }, [isPlaying, play, sound, stop]);

  const handleSelectSound = useCallback(
    (next: SoundType) => {
      setSound(next);
      if (isPlaying) play(next);
    },
    [isPlaying, play],
  );

  useEffect(() => {
    const gain = gainRef.current;
    const ctx = ctxRef.current;
    if (!gain || !ctx) return;
    const now = ctx.currentTime;
    const target = isPlaying ? volumeToGain(volume) : 0;
    gain.gain.cancelScheduledValues(now);
    gain.gain.linearRampToValueAtTime(target, now + 0.08);
  }, [volume, isPlaying]);

  useEffect(() => {
    if (isPlaying) armSleepTimer(sleep);
  }, [sleep, isPlaying, armSleepTimer]);

  useEffect(() => {
    return () => {
      clearSleepTimer();
      const source = sourceRef.current;
      if (source) {
        try {
          source.stop();
        } catch {
          // already stopped
        }
        source.disconnect();
      }
      const ctx = ctxRef.current;
      if (ctx && ctx.state !== 'closed') {
        void ctx.close();
      }
    };
  }, [clearSleepTimer]);

  return (
    <div className="rounded-3xl bg-white border border-warm-dark/30 shadow-[0_8px_32px_rgba(45,43,50,0.06)] p-6 sm:p-8">
      <div className="flex flex-col items-center">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={
            isPlaying
              ? copy.pause(copy.sounds[sound].name)
              : copy.play(copy.sounds[sound].name)
          }
          aria-pressed={isPlaying}
          className="group relative flex h-32 w-32 sm:h-40 sm:w-40 items-center justify-center rounded-full bg-charcoal text-cream transition-transform active:scale-[0.97] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lavender/50"
        >
          {isPlaying ? (
            <svg viewBox="0 0 24 24" className="h-12 w-12 sm:h-14 sm:w-14" aria-hidden="true">
              <rect x="7" y="5" width="3.5" height="14" rx="1" fill="currentColor" />
              <rect x="13.5" y="5" width="3.5" height="14" rx="1" fill="currentColor" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-12 w-12 sm:h-14 sm:w-14 translate-x-[2px]" aria-hidden="true">
              <path d="M8 5.5v13l11-6.5L8 5.5z" fill="currentColor" />
            </svg>
          )}
        </button>

        <p className="mt-4 text-sm text-charcoal-light text-center max-w-xs">
          {copy.sounds[sound].description}
        </p>
      </div>

      <fieldset className="mt-6">
        <legend className="sr-only">{copy.chooseSound}</legend>
        <div role="radiogroup" aria-label={copy.soundGroupLabel} className="grid grid-cols-3 gap-2">
          {SOUND_ORDER.map((type) => {
            const selected = sound === type;
            return (
              <button
                key={type}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => handleSelectSound(type)}
                className={[
                  'rounded-xl px-3 py-3 text-sm font-medium transition-colors',
                  selected
                    ? 'bg-charcoal text-cream'
                    : 'bg-warm/60 text-charcoal hover:bg-warm-dark/40',
                ].join(' ')}
              >
                {copy.sounds[type].name}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-6">
        <label htmlFor="bn-volume" className="flex items-center justify-between text-sm text-charcoal-light mb-2">
          <span>{copy.volume}</span>
          <span className="tabular-nums text-muted">{copy.volumePercent(volume)}</span>
        </label>
        <input
          id="bn-volume"
          type="range"
          min={0}
          max={100}
          step={1}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="w-full accent-lavender-dark"
        />
      </div>

      <div className="mt-6">
        <label htmlFor="bn-sleep" className="block text-sm text-charcoal-light mb-2">
          {copy.sleepTimer}
        </label>
        <div role="radiogroup" aria-label={copy.sleepTimer} className="grid grid-cols-5 gap-2">
          {SLEEP_OPTIONS.map((value) => {
            const selected = sleep === value;
            return (
              <button
                key={value}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => setSleep(value)}
                className={[
                  'rounded-lg px-2 py-2 text-xs font-medium transition-colors',
                  selected
                    ? 'bg-charcoal text-cream'
                    : 'bg-warm/60 text-charcoal hover:bg-warm-dark/40',
                ].join(' ')}
              >
                {value === 0 ? copy.sleepOff : copy.sleepMinutes(value)}
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-6 text-xs text-muted text-center">{copy.privacyNote}</p>
    </div>
  );
}
