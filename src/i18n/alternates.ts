import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/sitemap-data';
import { locales, defaultLocale, htmlLang, type Locale } from './config';

// Localized surfaces: the homepage plus the /tools and /learn pages. Default
// locale lives at the bare path, every other locale under "/{locale}". Every
// translated variant carries the full hreflang cluster.

export function homePath(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}`;
}

export function localePath(locale: Locale, path: string): string {
  return locale === defaultLocale ? path : `/${locale}${path}`;
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

// Cluster for localized inner pages (/tools, /tools/{slug}, /learn). Same shape
// as the homepage cluster, but hreflang alternates must only point at locales
// that actually HAVE the page (progressive rollout): a hreflang link to a
// locale variant that 404s is an SEO error, so `available` filters the cluster.
// English is always available (the hand-written page is the source), so it and
// x-default always appear.
export function buildPathAlternates(
  current: Locale,
  path: string,
  available: readonly Locale[] = locales,
): Metadata['alternates'] {
  const set = new Set<Locale>([defaultLocale, ...available]);
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    if (!set.has(locale)) continue;
    languages[htmlLang[locale]] = `${SITE_URL}${localePath(locale, path)}`;
  }
  languages['x-default'] = `${SITE_URL}${path}`;

  return {
    canonical: `${SITE_URL}${localePath(current, path)}`,
    languages,
  };
}
