// Central i18n configuration for the landing page.
//
// The set of locales mirrors the languages the Doubly app itself ships
// (src/localization/*.json in the app repo). English is the default and lives
// at the bare "/" path; every other locale is served under "/{locale}".

export const defaultLocale = 'en' as const;

// Order here drives the order in the language switcher.
export const locales = [
  'en',
  'de',
  'es',
  'fr',
  'it',
  'nl',
  'pt-BR',
  'ru',
  'tr',
  'hi',
  'ja',
  'ko',
  'zh-Hans',
  'ar',
  'he',
] as const;

export type Locale = (typeof locales)[number];

// Locales whose script reads right-to-left. Used to set <html dir>.
export const rtlLocales: readonly Locale[] = ['ar', 'he'];

// Native names shown in the language switcher (always in the target language).
export const localeNames: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
  it: 'Italiano',
  nl: 'Nederlands',
  'pt-BR': 'Português',
  ru: 'Русский',
  tr: 'Türkçe',
  hi: 'हिन्दी',
  ja: '日本語',
  ko: '한국어',
  'zh-Hans': '简体中文',
  ar: 'العربية',
  he: 'עברית',
};

// BCP-47 tags for the <html lang> attribute and hreflang alternates.
export const htmlLang: Record<Locale, string> = {
  en: 'en',
  de: 'de',
  es: 'es',
  fr: 'fr',
  it: 'it',
  nl: 'nl',
  'pt-BR': 'pt-BR',
  ru: 'ru',
  tr: 'tr',
  hi: 'hi',
  ja: 'ja',
  ko: 'ko',
  'zh-Hans': 'zh-Hans',
  ar: 'ar',
  he: 'he',
};

// English names of each locale's language, for AI prompts that must instruct
// the model which language to answer in (native names confuse instruction
// following; the English name is unambiguous).
export const localeEnglishNames: Record<Locale, string> = {
  en: 'English',
  de: 'German',
  es: 'Spanish',
  fr: 'French',
  it: 'Italian',
  nl: 'Dutch',
  'pt-BR': 'Brazilian Portuguese',
  ru: 'Russian',
  tr: 'Turkish',
  hi: 'Hindi',
  ja: 'Japanese',
  ko: 'Korean',
  'zh-Hans': 'Simplified Chinese',
  ar: 'Arabic',
  he: 'Hebrew',
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}

// Non-default locales — these are the ones that get a "/{locale}" path.
export const nonDefaultLocales = locales.filter((l) => l !== defaultLocale);
