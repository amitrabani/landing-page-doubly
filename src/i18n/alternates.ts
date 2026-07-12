import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/sitemap-data';
import { locales, defaultLocale, htmlLang, type Locale } from './config';

// The homepage is the only surface translated into every locale, so it is the
// only one that gets a full hreflang cluster. Default locale lives at "/",
// every other locale at "/{locale}".

export function homePath(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}`;
}

export function buildHomeAlternates(current: Locale): Metadata['alternates'] {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[htmlLang[locale]] = `${SITE_URL}${homePath(locale)}`;
  }
  // x-default points at the English homepage for unmatched languages.
  languages['x-default'] = `${SITE_URL}/`;

  return {
    canonical: `${SITE_URL}${homePath(current)}`,
    languages,
  };
}
