'use client';

import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'pick-one-input-v1';
const MAX_LENGTH = 4000;

type Mode = 'smallest' | 'scariest' | 'random';

const MODE_LABEL: Record<Mode, string> = {
  smallest: 'Smallest',
  scariest: 'Scariest',
  random: 'Just pick one',
};

const MODE_REASON: Record<Mode, string> = {
  smallest: 'Shortest item on the list. Start tiny, build momentum.',
  scariest: 'The one you would rather not look at. Doing it first frees the day.',
  random: 'No deliberation. The list picked itself. Just start.',
};

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
        Paste your list. One per line, or just messy with commas. Whatever.
      </label>
      <textarea
        id="pick-one-input"
        value={input}
        onChange={(e) => setInput(e.target.value.slice(0, MAX_LENGTH))}
        placeholder={'reply to mom\nbook the dentist\nfile expenses\nfinish the slide deck\nwater the plants'}
        rows={6}
        maxLength={MAX_LENGTH}
        className="w-full rounded-2xl px-5 py-4 text-base bg-cream border border-charcoal/10 text-charcoal placeholder:text-muted-light focus:outline-none focus:border-lavender/50 focus:ring-2 focus:ring-lavender/15 transition-all resize-y min-h-[160px]"
      />

      <div className="mt-3 flex items-center justify-between text-xs text-muted-light">
        <span aria-live="polite">
          {items.length} item{items.length === 1 ? '' : 's'} detected
          {excluded.size > 0 && remaining.length > 0 && ` , ${remaining.length} left`}
        </span>
        {input && (
          <button
            type="button"
            onClick={handleClear}
            className="underline hover:no-underline"
          >
            Clear everything
          </button>
        )}
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-charcoal mb-3">How should we pick?</legend>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(MODE_LABEL) as Mode[]).map((m) => (
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
              {MODE_LABEL[m]}
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
          {pickedText ? 'Pick another' : 'Pick one for me'}
        </button>
      </div>

      <div className="mt-6 min-h-[60px]" aria-live="polite">
        {!pickedText && items.length === 0 && (
          <p className="text-sm text-muted-light">
            Add at least one item, then tap pick.
          </p>
        )}

        {!pickedText && items.length > 0 && !allDone && (
          <p className="text-sm text-muted-light">
            Ready. Tap &ldquo;Pick one for me&rdquo; whenever you can&rsquo;t decide.
          </p>
        )}

        {allDone && (
          <div className="rounded-2xl bg-sage/15 border border-sage/30 p-5">
            <p className="font-[family-name:var(--font-display)] text-base font-semibold text-sage-dark mb-2">
              List handled.
            </p>
            <p className="text-sm text-charcoal-light leading-6 mb-3">
              Every item is either done or skipped. You can clear the list, or reset to bring skipped
              items back into the pool.
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleReset}
                className="rounded-xl px-4 py-2 text-sm font-medium bg-white text-charcoal border border-charcoal/15 hover:border-lavender/40 transition-all"
              >
                Bring skipped back
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="rounded-xl px-4 py-2 text-sm font-medium bg-white text-charcoal border border-charcoal/15 hover:border-lavender/40 transition-all"
              >
                Start a fresh list
              </button>
            </div>
          </div>
        )}

        {pickedText && (
          <div className="rounded-2xl bg-cream border border-lavender/30 p-5 sm:p-6">
            <p className="text-xs uppercase tracking-wider text-lavender-dark font-semibold mb-2">
              Start with this one
            </p>
            <p className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-charcoal leading-snug mb-3">
              {pickedText}
            </p>
            <p className="text-sm text-charcoal-light leading-6 mb-5">
              {MODE_REASON[mode]}
            </p>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handleDone}
                className="rounded-xl px-4 py-2 text-sm font-medium bg-sage text-white hover:bg-sage-dark transition-all"
              >
                Did it
              </button>
              <button
                type="button"
                onClick={handleSkip}
                className="rounded-xl px-4 py-2 text-sm font-medium bg-white text-charcoal border border-charcoal/15 hover:border-lavender/40 transition-all"
              >
                Not this one
              </button>
              <button
                type="button"
                onClick={handlePick}
                className="rounded-xl px-4 py-2 text-sm font-medium bg-white text-charcoal border border-charcoal/15 hover:border-lavender/40 transition-all"
              >
                Pick again
              </button>
            </div>

            {(done.size > 0 || skipped.size > 0) && (
              <p className="mt-4 text-xs text-muted-light">
                {done.size} done , {skipped.size} skipped , {remaining.length} left
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
