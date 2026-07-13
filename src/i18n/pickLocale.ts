import { locales, defaultLocale, type Locale } from './config';

// Chooses the homepage locale for a first-time visitor from the browser's
// Accept-Language header.
//
// The visitor's LANGUAGE decides the locale — never their country. There is no
// IP/geo lookup anywhere in this codebase, and the region subtag of a language
// tag ("de-AT", "en-GB", "pt-PT") is deliberately ignored for selection: an
// English speaker browsing from Germany gets English, and a German speaker
// browsing from the US gets German.
//
// Matching, per RFC 9110 §12.5.4, in descending q order:
//   1. exact tag match      "pt-br"  -> pt-BR,  "zh-hans" -> zh-Hans
//   2. language-only match  "de-AT"  -> de,     "pt-PT"   -> pt-BR,  "zh-TW" -> zh-Hans
// Entries with q=0 mean "not acceptable" and are never selected. Unsupported
// languages fall through to the next preference, then to English.
export function pickLocale(acceptLanguage: string | null | undefined): Locale {
  if (!acceptLanguage) return defaultLocale;

  const ranked = acceptLanguage
    .split(',')
    .map((part) => {
      const [rawTag, ...params] = part.trim().split(';');
      const qParam = params.find((p) => p.trim().toLowerCase().startsWith('q='));
      const parsed = qParam ? Number.parseFloat(qParam.trim().slice(2)) : 1;
      return {
        tag: rawTag.trim().toLowerCase(),
        // A malformed q is treated as unacceptable rather than as top priority.
        q: Number.isFinite(parsed) ? parsed : 0,
      };
    })
    // "*" is a wildcard, and q=0 explicitly rejects a language: never pick either.
    .filter((entry) => entry.tag && entry.tag !== '*' && entry.q > 0)
    // Stable sort: equal-q tags keep the browser's own ordering.
    .sort((a, b) => b.q - a.q);

  const supported = locales.map((locale) => {
    const key = locale.toLowerCase();
    return { locale, key, language: key.split('-')[0] };
  });

  for (const { tag } of ranked) {
    const exact = supported.find((l) => l.key === tag);
    if (exact) return exact.locale;

    // Compare language subtags only, so the region/country subtag cannot decide.
    const language = tag.split('-')[0];
    const byLanguage = supported.find((l) => l.language === language);
    if (byLanguage) return byLanguage.locale;
  }

  return defaultLocale;
}
