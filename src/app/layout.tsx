import type { Metadata } from 'next';
import { DM_Sans, Inter } from 'next/font/google';
import './globals.css';
import t from '@/translations/en';
import PostHogProvider from './PostHogProvider';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600'],
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
    <html lang="en" className={`${dmSans.variable} ${inter.variable}`}>
      <body>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
