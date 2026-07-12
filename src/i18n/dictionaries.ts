// Maps each locale to its translation dictionary.
//
// Every dictionary mirrors the shape of the English source of truth
// (src/translations/en.ts). Non-English files are authored to match that shape;
// they are cast to `Translations` here so consumers get full typing against the
// canonical English keys. Missing/extra keys would surface at build time when
// the localized pages are statically rendered.

import type { Locale } from './config';
import type { Translations } from '@/translations/en';

import en from '@/translations/en';
import de from '@/translations/de';
import es from '@/translations/es';
import fr from '@/translations/fr';
import it from '@/translations/it';
import nl from '@/translations/nl';
import ptBR from '@/translations/pt-BR';
import ru from '@/translations/ru';
import tr from '@/translations/tr';
import hi from '@/translations/hi';
import ja from '@/translations/ja';
import ko from '@/translations/ko';
import zhHans from '@/translations/zh-Hans';
import ar from '@/translations/ar';
import he from '@/translations/he';

const dictionaries: Record<Locale, Translations> = {
  en,
  de: de as unknown as Translations,
  es: es as unknown as Translations,
  fr: fr as unknown as Translations,
  it: it as unknown as Translations,
  nl: nl as unknown as Translations,
  'pt-BR': ptBR as unknown as Translations,
  ru: ru as unknown as Translations,
  tr: tr as unknown as Translations,
  hi: hi as unknown as Translations,
  ja: ja as unknown as Translations,
  ko: ko as unknown as Translations,
  'zh-Hans': zhHans as unknown as Translations,
  ar: ar as unknown as Translations,
  he: he as unknown as Translations,
};

export function getDictionary(locale: Locale): Translations {
  return dictionaries[locale] ?? en;
}
