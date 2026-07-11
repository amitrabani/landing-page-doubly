'use client';

import { useEffect, useState } from 'react';
import t from '@/translations/en';

// Deterministic member counter: BASE_COUNT at EPOCH, +1 every STEP_MS, so every
// visitor sees the same number at the same moment (no backend needed).
// SSR and the first client render both show BASE_COUNT; the effect swaps in the
// live value after hydration so server and client markup never disagree.
// Keep BASE_COUNT/STEP_MS roughly anchored to real installs.
const BASE_COUNT = 392;
const EPOCH = Date.UTC(2026, 6, 11); // 2026-07-11, the day the counter went live
const STEP_MS = 40 * 60 * 1000; // +1 every 40 minutes

function liveCount() {
  return BASE_COUNT + Math.max(0, Math.floor((Date.now() - EPOCH) / STEP_MS));
}

export default function SocialProofCounter({ className = '' }: { className?: string }) {
  const [count, setCount] = useState(BASE_COUNT);

  useEffect(() => {
    setCount(liveCount());
    const id = setInterval(() => setCount(liveCount()), 60_000);
    return () => clearInterval(id);
  }, []);

  return <p className={`text-sm text-muted ${className}`}>{t.common.socialProof(count)}</p>;
}
