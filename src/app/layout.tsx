import type { Metadata } from 'next';
import { DM_Sans, Inter } from 'next/font/google';
import './globals.css';

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
  title: 'Doubly | The ADHD app that helps you start',
  description:
    'Brain dump the chaos, get one clear next step, and use accountability to actually follow through. Built for ADHD minds that need help starting, not just planning.',
  keywords: ['ADHD', 'productivity', 'brain dump', 'task management', 'accountability', 'focus'],
  icons: {
    icon: '/favicon.ico?v=2',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Doubly | The ADHD app that helps you start',
    description:
      'Brain dump the chaos, get one clear next step, and use accountability to actually follow through.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
