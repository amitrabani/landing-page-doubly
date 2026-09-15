import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import '../globals.css';
import { fontVariables } from '../fonts';
import ConsentedTrackers from '../ConsentedTrackers';
import CookieBanner from '@/components/CookieBanner';
import { LocaleTranslationProvider } from '@/i18n/TranslationProvider';
import { isLocale, isRtl, htmlLang, defaultLocale, nonDefaultLocales } from '@/i18n/config';
import { SITE_URL } from '@/lib/sitemap-data';

// Only the known non-English locales resolve here; anything else 404s (English
// lives in the (main) tree at "/").
export const dynamicParams = false;

export function generateStaticParams() {
  return nonDefaultLocales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: '/favicon.ico?v=2',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export default async function LocaleRootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === defaultLocale) {
    notFound();
  }

  return (
    <html
      lang={htmlLang[locale]}
      dir={isRtl(locale) ? 'rtl' : 'ltr'}
      className={fontVariables}
    >
      <body suppressHydrationWarning>
        <ConsentedTrackers />
        <LocaleTranslationProvider locale={locale}>
          <CookieBanner />
          {children}
        </LocaleTranslationProvider>
      </body>
    </html>
  );
}
