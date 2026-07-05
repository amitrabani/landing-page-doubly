import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import './globals.css';
import t from '@/translations/en';
import PostHogProvider from './PostHogProvider';
import ScrollDepthTracker from '@/components/ScrollDepthTracker';
import { GoogleTagManagerScript, GoogleTagManagerNoScript } from './GoogleTagManager';
import { RedditPixel } from './RedditPixel';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  title: t.metadata.title,
  description: t.metadata.description,
  keywords: [...t.metadata.keywords],
  icons: {
    icon: '/favicon.ico?v=2',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: t.metadata.ogTitle,
    description: t.metadata.ogDescription,
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <GoogleTagManagerScript />
        <RedditPixel />
      </head>
      <body suppressHydrationWarning>
        <GoogleTagManagerNoScript />
        <PostHogProvider>
          <ScrollDepthTracker />
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
