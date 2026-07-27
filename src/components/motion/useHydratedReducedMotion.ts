'use client';

import { useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * Hydration-safe replacement for framer-motion's `useReducedMotion`.
 *
 * The upstream hook resolves the preference *during render*: it calls
 * `initPrefersReducedMotion()`, which reads `matchMedia('(prefers-reduced-motion)')`
 * synchronously, then seeds `useState` with the result. Server-side that read is
 * skipped and the shared state stays `null`, so the server always renders as
 * "motion allowed" while the very first client render already returns `true` for
 * anyone with Reduce Motion enabled.
 *
 * Every caller feeds the value straight into `style` / `initial` / variants, so the
 * two sides serialise different markup and React aborts hydration with minified
 * error #418 ("the server rendered HTML didn't match the client") and regenerates
 * the whole tree on the client. That was firing ~110 times a day, exclusively on
 * iOS Safari and Chrome iOS, where Reduce Motion is far more commonly enabled.
 *
 * Reporting `false` until after mount makes the hydration render byte-match the
 * server. The real preference lands on the very next commit, before any
 * scroll-, hover- or viewport-triggered animation has a chance to run, so
 * reduced-motion users still get the static treatment.
 */
export function useHydratedReducedMotion(): boolean {
  const reduced = useReducedMotion();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated && reduced === true;
}
