'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { nanoid } from 'nanoid';
import { useT } from '@/i18n/TranslationProvider';

export default function StartSessionCTA() {
  const t = useT().toolWidgets.shared;
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
      {loading ? t.creatingRoom : t.startSession}
      <span aria-hidden="true" className="rtl:rotate-180">
        →
      </span>
    </button>
  );
}
