import type { Metadata } from 'next';
import HomePage from '@/components/HomePage';
import { buildHomeAlternates } from '@/i18n/alternates';

export const metadata: Metadata = {
  alternates: buildHomeAlternates('en'),
};

export default function Home() {
  return <HomePage />;
}
