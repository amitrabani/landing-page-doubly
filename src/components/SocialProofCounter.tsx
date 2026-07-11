'use client';

import { useEffect, useState } from 'react';
import t from '@/translations/en';

// The member count comes from the backend (/api/user-count), which owns the
// increment logic. We render a sensible fallback for SSR and the first paint,
// then swap in the value from the API after hydration so the server and client
// markup never disagree. Keep this loosely anchored to the API's base count.
const FALLBACK_COUNT = 470;

export default function SocialProofCounter({
  className = 'text-sm text-muted',
}: {
  className?: string;
}) {
  const [count, setCount] = useState(FALLBACK_COUNT);

  useEffect(() => {
    let active = true;
    fetch('/api/user-count')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        const next = Number(data?.count);
        if (active && Number.isFinite(next) && next > 0) setCount(next);
      })
      .catch(() => {
        /* keep the fallback */
      });
    return () => {
      active = false;
    };
  }, []);

  return <p className={className}>{t.common.socialProof(count)}</p>;
}
