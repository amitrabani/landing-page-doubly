import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const APP_ID = '6760469944';

export const metadata: Metadata = {
  other: {
    // Smart App Banner — iOS Safari renders Apple's native banner.
    // Per-page metadata can override `app-argument` to deep-link to the matching feature.
    'apple-itunes-app': `app-id=${APP_ID}`,
  },
};

export default function PublicHelpersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-cream">{children}</main>
      <Footer />
    </>
  );
}
