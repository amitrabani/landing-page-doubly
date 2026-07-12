import type { Metadata } from 'next';
import '../globals.css';
import en from '@/translations/en';
import { fontVariables } from '../fonts';
import PostHogProvider from '../PostHogProvider';
import ScrollDepthTracker from '@/components/ScrollDepthTracker';
import { GoogleTagManagerScript, GoogleTagManagerNoScript } from '../GoogleTagManager';
import { RedditPixel } from '../RedditPixel';
import { EnglishTranslationProvider } from '@/i18n/TranslationProvider';
import { SITE_URL } from '@/lib/sitemap-data';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: en.metadata.title,
  description: en.metadata.description,
  keywords: [...en.metadata.keywords],
  icons: {
    icon: '/favicon.ico?v=2',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: en.metadata.ogTitle,
    description: en.metadata.ogDescription,
    type: 'website',
  },
};

export default function MainRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <head>
        <GoogleTagManagerScript />
        <RedditPixel />
      </head>
      <body suppressHydrationWarning>
        <GoogleTagManagerNoScript />
        <PostHogProvider>
          <ScrollDepthTracker />
          <EnglishTranslationProvider>{children}</EnglishTranslationProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
