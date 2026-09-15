'use client';

import Link from 'next/link';
import { useEffect, useId, useRef, useSyncExternalStore } from 'react';
import { useT } from '@/i18n/TranslationProvider';
import {
  consentServerSnapshot,
  readConsent,
  readConsentBanner,
  subscribeConsent,
  writeConsent,
} from '@/lib/consent';

// While the banner is open, globals.css adds this much bottom padding and scroll
// padding, so a focused element or the end of the page is never hidden under it.
const BANNER_HEIGHT_VARIABLE = '--consent-banner-height';

// Reject and Accept share one class so neither choice looks like the default.
const choiceButtonClass =
  'cursor-pointer rounded-full border border-charcoal/15 bg-cream px-5 py-2 text-sm font-medium ' +
  'text-charcoal transition-colors hover:bg-warm-dark/50 focus-visible:outline-hidden ' +
  'focus-visible:ring-2 focus-visible:ring-lavender-dark focus-visible:ring-offset-2';

// Render it before the page content: it is fixed to the bottom, so it looks the
// same, but keyboard and screen reader users reach it first.
export default function CookieBanner() {
  const t = useT();
  const messageId = useId();
  const sectionRef = useRef<HTMLElement>(null);
  const banner = useSyncExternalStore(subscribeConsent, readConsentBanner, consentServerSnapshot);
  const choice = useSyncExternalStore(subscribeConsent, readConsent, consentServerSnapshot);
  const open = banner !== null;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const root = document.documentElement;
    const observer = new ResizeObserver(() => {
      const coveredHeight = window.innerHeight - section.getBoundingClientRect().top;
      root.style.setProperty(BANNER_HEIGHT_VARIABLE, `${Math.ceil(coveredHeight)}px`);
    });
    observer.observe(section);
    return () => {
      observer.disconnect();
      root.style.removeProperty(BANNER_HEIGHT_VARIABLE);
    };
  }, [open]);

  // Only a reopen moves focus. On a first visit, focus stays where it is.
  useEffect(() => {
    if (banner === 'reopened') sectionRef.current?.focus();
  }, [banner]);

  if (!open) return null;

  // A reopened banner tells screen readers which choice is stored. Sighted
  // visitors see two identical buttons, so neither choice looks preferred.
  const showStoredChoice = banner === 'reopened' && choice !== null;

  return (
    <section
      ref={sectionRef}
      tabIndex={-1}
      aria-labelledby={messageId}
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto flex max-w-xl flex-col gap-3 rounded-2xl border border-charcoal/10 bg-white px-4 py-3 shadow-xl shadow-charcoal/10 sm:flex-row sm:items-center"
    >
      <p id={messageId} className="flex-1 text-sm text-charcoal-light">
        {t.cookieBanner.message}{' '}
        <Link href="/privacy" className="underline underline-offset-2 hover:text-charcoal">
          {t.cookieBanner.privacyLink}
        </Link>
      </p>
      <div className="grid shrink-0 grid-cols-2 gap-2">
        <button
          type="button"
          aria-pressed={showStoredChoice ? choice === 'denied' : undefined}
          onClick={() => writeConsent('denied')}
          className={choiceButtonClass}
        >
          {t.cookieBanner.reject}
        </button>
        <button
          type="button"
          aria-pressed={showStoredChoice ? choice === 'granted' : undefined}
          onClick={() => writeConsent('granted')}
          className={choiceButtonClass}
        >
          {t.cookieBanner.accept}
        </button>
      </div>
    </section>
  );
}
