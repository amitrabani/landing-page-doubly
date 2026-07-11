'use client';

import { useState } from 'react';
import posthog from 'posthog-js';
import { getSupabase, hasSupabaseEnv } from '@/lib/supabase';
import t from '@/translations/en';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = 'idle' | 'open' | 'sending' | 'done' | 'error';

/**
 * Collapsed one-line prompt that expands into an email capture for Android
 * visitors. Emails land in the landing Supabase `android_waitlist` table
 * (insert-only for anon) and are mirrored into PostHog; a Reddit SignUp event
 * fires so ads get a real conversion signal (Lead stays reserved for App Store
 * clicks, see src/lib/appStore.ts).
 */
export default function AndroidWaitlist({ className = '' }: { className?: string }) {
  const [status, setStatus] = useState<Status>('idle');
  const [email, setEmail] = useState('');
  const [invalid, setInvalid] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const value = email.trim().toLowerCase();
    if (!EMAIL_RE.test(value)) {
      setInvalid(true);
      return;
    }
    setInvalid(false);
    setStatus('sending');

    // Two sinks, best-effort each: success as long as one of them took the
    // email (PostHog keeps working even if the Supabase table is missing).
    let stored = false;
    if (hasSupabaseEnv()) {
      try {
        const { error } = await getSupabase()
          .from('android_waitlist')
          .insert({ email: value, source: window.location.pathname });
        // 23505 = unique violation: already on the list, treat as success.
        stored = !error || error.code === '23505';
      } catch {
        stored = false;
      }
    }

    let captured = false;
    if (posthog.__loaded) {
      posthog.capture('android_waitlist_signup', { email: value, stored_in_db: stored });
      captured = true;
    }

    if (stored || captured) {
      window.rdt?.('track', 'SignUp');
      setStatus('done');
    } else {
      setStatus('error');
    }
  };

  if (status === 'done') {
    return <p className={`text-sm text-sage-dark ${className}`}>{t.hero.android.success}</p>;
  }

  if (status === 'idle') {
    return (
      <button
        type="button"
        onClick={() => {
          setStatus('open');
          if (posthog.__loaded) posthog.capture('android_waitlist_open');
        }}
        className={`text-sm text-muted underline decoration-charcoal/20 underline-offset-4 hover:text-charcoal transition-colors ${className}`}
      >
        {t.hero.android.prompt}
      </button>
    );
  }

  return (
    <div className={className}>
      <form
        onSubmit={submit}
        className="flex flex-col sm:flex-row items-center gap-2 justify-center lg:justify-start"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.hero.android.placeholder}
          autoFocus
          aria-label={t.hero.android.prompt}
          className="w-full sm:w-64 rounded-full border border-charcoal/10 bg-white/90 px-4 py-2 text-sm text-charcoal placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-lavender"
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="rounded-full bg-charcoal text-white px-5 py-2 text-sm font-medium hover:bg-charcoal/90 transition-colors disabled:opacity-60"
        >
          {t.hero.android.submit}
        </button>
      </form>
      {invalid && <p className="mt-1.5 text-xs text-coral">{t.hero.android.invalid}</p>}
      {status === 'error' && <p className="mt-1.5 text-xs text-coral">{t.hero.android.error}</p>}
    </div>
  );
}
