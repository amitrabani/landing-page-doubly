import type { Metadata } from 'next';
import HomePage from '@/components/HomePage';
import { getDictionary } from '@/i18n/dictionaries';
import { isLocale, defaultLocale } from '@/i18n/config';
import { buildHomeAlternates } from '@/i18n/alternates';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale) || locale === defaultLocale) {
    return {};
  }
  const dict = getDictionary(locale);
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    keywords: [...dict.metadata.keywords],
    openGraph: {
      title: dict.metadata.ogTitle,
      description: dict.metadata.ogDescription,
      type: 'website',
    },
    alternates: buildHomeAlternates(locale),
  };
}

export default function LocaleHome() {
  return <HomePage />;
}
