'use client';

import { useEffect, useMemo, useState } from 'react';

import { useT } from '@/i18n/TranslationProvider';

const STORAGE_KEY = 'pick-one-input-v1';
const MAX_LENGTH = 4000;

// Stable English ids: they drive the picking logic and index the copy dictionary.
type Mode = 'smallest' | 'scariest' | 'random';

const MODES: Mode[] = ['smallest', 'scariest', 'random'];

const SCARY_WORDS = [
  'tax',
  'taxes',
  'doctor',
  'dentist',
  'doctors',
  'insurance',
  'bill',
  'bills',
  'rent',
  'mortgage',
  'lawyer',
  'attorney',
  'court',
  'irs',
  'hmrc',
  'email back',
  'reply',
  'apology',
  'apologize',
  'boss',
  'manager',
  'difficult conversation',
  'breakup',
  'cancel',
  'unsubscribe',
  'dispute',
  'complaint',
  'overdue',
  'forgot',
  'should have',
  'meant to',
];

function splitList(raw: string): string[] {
  return raw
    .split(/[\n;,]+/)
    .map((s) => s.replace(/^[\s\-*•\d.)]+/, '').trim())
    .filter((s) => s.length > 0 && s.length < 200);
}

function scariness(item: string): number {
  const lower = item.toLowerCase();
  let score = item.length / 40;
  for (const w of SCARY_WORDS) {
    if (lower.includes(w)) score += 2;
  }
  return score;
}

function pickIndex(items: string[], mode: Mode, excluded: Set<string>): number {
  const candidates = items
    .map((text, idx) => ({ text, idx }))
    .filter((c) => !excluded.has(c.text));
  if (candidates.length === 0) return -1;

  if (mode === 'smallest') {
    return candidates.reduce((best, c) =>
      c.text.length < best.text.length ? c : best,
    ).idx;
  }
  if (mode === 'scariest') {
    return candidates.reduce((best, c) =>
      scariness(c.text) > scariness(best.text) ? c : best,
    ).idx;
  }
  const choice = candidates[Math.floor(Math.random() * candidates.length)];
  return choice.idx;
}

export default function PickOneTool() {
  const t = useT();
  const copy = t.toolWidgets.pickOne;

  const [input, setInput] = useState('');
  const [mode, setMode] = useState<Mode>('smallest');
  const [pickedIdx, setPickedIdx] = useState<number | null>(null);
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
  const pickedText = pickedIdx !== null ? items[pickedIdx] ?? null : null;

  const handlePick = () => {
    const idx = pickIndex(items, mode, excluded);
    setPickedIdx(idx === -1 ? null : idx);
  };

  const handleSkip = () => {
    if (pickedText) {
      setSkipped((prev) => new Set(prev).add(pickedText));
    }
    const newExcluded = new Set(excluded);
    if (pickedText) newExcluded.add(pickedText);
    const idx = pickIndex(items, mode, newExcluded);
    setPickedIdx(idx === -1 ? null : idx);
  };

  const handleDone = () => {
    if (pickedText) {
      setDone((prev) => new Set(prev).add(pickedText));
    }
    const newExcluded = new Set(excluded);
    if (pickedText) newExcluded.add(pickedText);
    const idx = pickIndex(items, mode, newExcluded);
    setPickedIdx(idx === -1 ? null : idx);
  };

  const handleReset = () => {
    setSkipped(new Set());
    setDone(new Set());
    setPickedIdx(null);
  };

  const handleClear = () => {
    setInput('');
    setSkipped(new Set());
    setDone(new Set());
    setPickedIdx(null);
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
              onClick={() => setMode(m)}
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
              {copy.modes[mode].reason}
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
