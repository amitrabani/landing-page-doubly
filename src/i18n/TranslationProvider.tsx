'use client';

// Provides the active locale's translation dictionary to client components.
//
// The dictionary contains helper FUNCTIONS (socialProof, tasksFound, ...), which
// cannot be serialized across the server->client boundary. So the providers
// import the dictionary themselves (client-side) and only receive the locale as
// a plain string prop. Two variants keep bundles tight:
//   - EnglishTranslationProvider bundles only en (used by the default "/" tree,
//     including the English homepage and all tools pages).
//   - LocaleTranslationProvider bundles every dictionary and selects by locale
//     (used only by the 14 localized "/{locale}" homepages).

import { createContext, useContext } from 'react';
import type { Translations } from '@/translations/en';
import en from '@/translations/en';
import { getDictionary } from '@/i18n/dictionaries';
import type { Locale } from './config';

type TranslationContextValue = {
  t: Translations;
  locale: Locale;
};

const TranslationContext = createContext<TranslationContextValue | null>(null);

export function EnglishTranslationProvider({ children }: { children: React.ReactNode }) {
  return (
    <TranslationContext.Provider value={{ t: en, locale: 'en' }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function LocaleTranslationProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <TranslationContext.Provider value={{ t: getDictionary(locale), locale }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useT(): Translations {
  const ctx = useContext(TranslationContext);
  if (!ctx) {
    throw new Error('useT must be used within a TranslationProvider');
  }
  return ctx.t;
}

export function useLocale(): Locale {
  const ctx = useContext(TranslationContext);
  if (!ctx) {
    throw new Error('useLocale must be used within a TranslationProvider');
  }
  return ctx.locale;
}
