'use client';

import { useEffect, useMemo, useState } from 'react';

import { useLocale, useT } from '@/i18n/TranslationProvider';
import { MODES, pickOne, splitList, type Mode, type Picked } from './pickLogic';

const STORAGE_KEY = 'pick-one-input-v1';
const MAX_LENGTH = 4000;

export default function PickOneTool() {
  const t = useT();
  const locale = useLocale();
  const copy = t.toolWidgets.pickOne;

  const [input, setInput] = useState('');
  const [mode, setMode] = useState<Mode>('smallest');
  const [picked, setPicked] = useState<Picked | null>(null);
  const [skipped, setSkipped] = useState<Set<string>>(new Set());
  const [done, setDone] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setInput(saved);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, input);
    } catch {
      // ignore
    }
  }, [input]);

  const items = useMemo(() => splitList(input), [input]);
  const excluded = useMemo(() => {
    const set = new Set<string>();
    for (const s of skipped) set.add(s);
    for (const s of done) set.add(s);
    return set;
  }, [skipped, done]);

  const remaining = items.filter((t) => !excluded.has(t));
  const pickedText = picked !== null ? items[picked.idx] ?? null : null;

  const repick = (nextExcluded: Set<string>) =>
    setPicked(pickOne(items, mode, nextExcluded, copy.scaryWords, locale));

  const handlePick = () => repick(excluded);

  const handleSkip = () => {
    if (!pickedText) return;
    setSkipped((prev) => new Set(prev).add(pickedText));
    repick(new Set(excluded).add(pickedText));
  };

  const handleDone = () => {
    if (!pickedText) return;
    setDone((prev) => new Set(prev).add(pickedText));
    repick(new Set(excluded).add(pickedText));
  };

  const handleReset = () => {
    setSkipped(new Set());
    setDone(new Set());
    setPicked(null);
  };

  const handleClear = () => {
    setInput('');
    setSkipped(new Set());
    setDone(new Set());
    setPicked(null);
  };

  const canPick = remaining.length > 0;
  const allDone = items.length > 0 && remaining.length === 0;

  return (
    <div className="rounded-3xl bg-white border border-charcoal/8 shadow-sm shadow-charcoal/5 p-5 sm:p-7">
      <label htmlFor="pick-one-input" className="block text-sm font-medium text-charcoal mb-3">
        {copy.inputLabel}
      </label>
      <textarea
        id="pick-one-input"
        value={input}
        onChange={(e) => setInput(e.target.value.slice(0, MAX_LENGTH))}
        placeholder={copy.inputPlaceholder}
        rows={6}
        maxLength={MAX_LENGTH}
        className="w-full rounded-2xl px-5 py-4 text-base bg-cream border border-charcoal/10 text-charcoal placeholder:text-muted-light focus:outline-none focus:border-lavender/50 focus:ring-2 focus:ring-lavender/15 transition-all resize-y min-h-[160px]"
      />

      <div className="mt-3 flex items-center justify-between text-xs text-muted-light">
        <span aria-live="polite">
          {excluded.size > 0 && remaining.length > 0
            ? copy.itemsDetectedWithLeft(items.length, remaining.length)
            : copy.itemsDetected(items.length)}
        </span>
        {input && (
          <button
            type="button"
            onClick={handleClear}
            className="underline hover:no-underline"
          >
            {copy.clearEverything}
          </button>
        )}
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-charcoal mb-3">{copy.modeLegend}</legend>
        <div className="flex flex-wrap gap-2">
          {MODES.map((m) => (
            <button
              key={m}
              type="button"
              // Drop the current pick: its reason line belongs to the old mode.
              onClick={() => {
                setMode(m);
                setPicked(null);
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium border transition-all ${
                mode === m
                  ? 'bg-charcoal text-cream border-charcoal'
                  : 'bg-white text-charcoal border-charcoal/15 hover:border-lavender/50'
              }`}
              aria-pressed={mode === m}
            >
              {copy.modes[m].label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={handlePick}
          disabled={!canPick}
          className="rounded-2xl px-6 py-3 text-base font-semibold bg-charcoal text-cream hover:bg-charcoal-light transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {pickedText ? copy.pickAnotherCta : copy.pickCta}
        </button>
      </div>

      <div className="mt-6 min-h-[60px]" aria-live="polite">
        {!pickedText && items.length === 0 && (
          <p className="text-sm text-muted-light">{copy.emptyHint}</p>
        )}

        {!pickedText && items.length > 0 && !allDone && (
          <p className="text-sm text-muted-light">{copy.readyHint}</p>
        )}

        {allDone && (
          <div className="rounded-2xl bg-sage/15 border border-sage/30 p-5">
            <p className="font-[family-name:var(--font-display)] text-base font-semibold text-sage-dark mb-2">
              {copy.allDoneTitle}
            </p>
            <p className="text-sm text-charcoal-light leading-6 mb-3">
              {copy.allDoneBody}
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleReset}
                className="rounded-xl px-4 py-2 text-sm font-medium bg-white text-charcoal border border-charcoal/15 hover:border-lavender/40 transition-all"
              >
                {copy.bringSkippedBack}
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="rounded-xl px-4 py-2 text-sm font-medium bg-white text-charcoal border border-charcoal/15 hover:border-lavender/40 transition-all"
              >
                {copy.startFreshList}
              </button>
            </div>
          </div>
        )}

        {pickedText && (
          <div className="rounded-2xl bg-cream border border-lavender/30 p-5 sm:p-6">
            <p className="text-xs uppercase tracking-wider text-lavender-dark font-semibold mb-2">
              {copy.pickedEyebrow}
            </p>
            <p className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-charcoal leading-snug mb-3">
              {pickedText}
            </p>
            <p className="text-sm text-charcoal-light leading-6 mb-5">
              {picked?.noSignal
                ? copy.modes.scariest.noSignalReason
                : copy.modes[mode].reason}
            </p>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handleDone}
                className="rounded-xl px-4 py-2 text-sm font-medium bg-sage text-white hover:bg-sage-dark transition-all"
              >
                {copy.didIt}
              </button>
              <button
                type="button"
                onClick={handleSkip}
                className="rounded-xl px-4 py-2 text-sm font-medium bg-white text-charcoal border border-charcoal/15 hover:border-lavender/40 transition-all"
              >
                {copy.notThisOne}
              </button>
              <button
                type="button"
                onClick={handlePick}
                className="rounded-xl px-4 py-2 text-sm font-medium bg-white text-charcoal border border-charcoal/15 hover:border-lavender/40 transition-all"
              >
                {copy.pickAgain}
              </button>
            </div>

            {(done.size > 0 || skipped.size > 0) && (
              <p className="mt-4 text-xs text-muted-light">
                {copy.progress(done.size, skipped.size, remaining.length)}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
