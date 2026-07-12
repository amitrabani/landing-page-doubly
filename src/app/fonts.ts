import { Inter, Fraunces } from 'next/font/google';

// Shared across both root layouts ((main) and [locale]) so the CSS variables
// resolve identically. next/font dedupes these calls.

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['500', '600', '700'],
});

export const fontVariables = `${inter.variable} ${fraunces.variable}`;
