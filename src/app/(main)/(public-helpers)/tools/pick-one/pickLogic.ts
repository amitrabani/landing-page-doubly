import type { Locale } from '@/i18n/config';

// Stable English ids: they drive the picking logic and index the copy dictionary.
export type Mode = 'smallest' | 'scariest' | 'random';

export const MODES: Mode[] = ['smallest', 'scariest', 'random'];

export function splitList(raw: string): string[] {
  return raw
    .split(/[\n;,]+/)
    .map((s) => s.replace(/^[\s\-*•\d.)]+/, '').trim())
    .filter((s) => s.length > 0 && s.length < 200);
}

// How many dread words the item trips. 0 means we have no evidence at all that
// this item is scary.
//
// Lowercasing is locale-aware on purpose: Turkish "VERGİ" only folds to the
// keyword "vergi" under tr rules (a plain toLowerCase leaves a combining dot
// behind and the match silently fails).
export function dreadHits(
  item: string,
  scaryWords: readonly string[],
  locale: Locale,
): number {
  const lower = item.toLocaleLowerCase(locale);
  let hits = 0;
  for (const w of scaryWords) {
    if (lower.includes(w)) hits += 1;
  }
  return hits;
}

// `noSignal` is true when the "scariest" pick had nothing to go on. The old code
// scored length + 2*hits, so a list with zero hits (i.e. EVERY list in every
// locale, because the keywords were English-only) quietly ranked by length and
// presented the longest item as the scariest one. Callers use this flag to say
// what actually happened instead of dressing a length ranking up as dread.
export type Picked = { idx: number; noSignal: boolean };

export function pickOne(
  items: string[],
  mode: Mode,
  excluded: Set<string>,
  scaryWords: readonly string[],
  locale: Locale,
  // Injectable only so tests can make the random branch deterministic.
  rand: () => number = Math.random,
): Picked | null {
  const candidates = items
    .map((text, idx) => ({ text, idx }))
    .filter((c) => !excluded.has(c.text));
  if (candidates.length === 0) return null;

  const random = () => candidates[Math.floor(rand() * candidates.length)];

  if (mode === 'smallest') {
    const best = candidates.reduce((a, c) => (c.text.length < a.text.length ? c : a));
    return { idx: best.idx, noSignal: false };
  }

  if (mode === 'scariest') {
    const scored = candidates.map((c) => ({ ...c, hits: dreadHits(c.text, scaryWords, locale) }));
    const dreaded = scored.filter((c) => c.hits > 0);
    // Nothing on the list looks scary. Don't dress a length ranking up as dread.
    if (dreaded.length === 0) return { idx: random().idx, noSignal: true };
    // Most dread words wins; a longer item breaks a tie, since a bigger job with
    // the same dread in it is the one you are more likely to be avoiding.
    const best = dreaded.reduce((a, c) =>
      c.hits > a.hits || (c.hits === a.hits && c.text.length > a.text.length) ? c : a,
    );
    return { idx: best.idx, noSignal: false };
  }

  return { idx: random().idx, noSignal: false };
}
