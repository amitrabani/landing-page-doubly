'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { locales, localeNames, defaultLocale, type Locale } from '@/i18n/config';
import { useLocale } from '@/i18n/TranslationProvider';

function homePath(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}`;
}

// Language picker. Persists the choice in the NEXT_LOCALE cookie (so the root
// redirect respects it) and does a full navigation, since each locale is served
// by a different root layout with its own <html lang/dir>.
export default function LanguageSwitcher({ className = '' }: { className?: string }) {
  const current = useLocale();
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  function choose(locale: Locale) {
    document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=31536000;samesite=lax`;
    setOpen(false);
    if (locale !== current) {
      window.location.assign(homePath(locale));
    }
  }

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
        className="inline-flex items-center gap-1.5 rounded-full border border-charcoal/10 px-3 py-1.5 text-sm text-charcoal hover:border-charcoal/25 transition-colors"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span className="font-medium">{localeNames[current]}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.98 }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.16 }}
            className="absolute end-0 top-full z-50 mt-2 max-h-80 w-44 overflow-y-auto rounded-2xl border border-charcoal/10 bg-cream p-1.5 shadow-xl shadow-charcoal/10"
          >
            {locales.map((locale) => (
              <li key={locale} role="option" aria-selected={locale === current}>
                <button
                  type="button"
                  onClick={() => choose(locale)}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition-colors ${
                    locale === current
                      ? 'bg-lavender-light/30 text-charcoal font-medium'
                      : 'text-charcoal-light hover:bg-warm/60'
                  }`}
                >
                  {localeNames[locale]}
                  {locale === current && (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
