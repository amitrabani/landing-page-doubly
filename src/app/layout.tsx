import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import t from '@/translations/en';
import PostHogProvider from './PostHogProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
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
    <html lang="en" className={inter.variable}>
      <body>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
