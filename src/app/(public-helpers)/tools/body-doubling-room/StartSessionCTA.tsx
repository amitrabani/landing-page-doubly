'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { nanoid } from 'nanoid';

export default function StartSessionCTA() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    const id = nanoid(12);
    router.push(`/r/${id}`);
  };

  return (
    <button
      type="button"
      onClick={start}
      disabled={loading}
      data-cta="start-body-doubling-session"
      className="inline-flex items-center gap-2 rounded-full bg-charcoal text-cream px-6 py-4 text-base font-semibold hover:bg-charcoal-light disabled:opacity-70 transition-colors shadow-[0_4px_20px_rgba(45,43,50,0.15)]"
    >
      {loading ? 'Creating room...' : 'Start a focus session'}
      <span aria-hidden="true">→</span>
    </button>
  );
}
