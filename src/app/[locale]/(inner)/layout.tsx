import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Chrome for the localized inner pages (/{locale}/tools, /{locale}/learn).
// Mirrors the English (public-helpers) layout: Navbar + padded main + Footer.
// The <html lang/dir>, fonts, analytics, and TranslationProvider all come from
// the parent [locale] root layout, so this only supplies the page frame.
export default function LocaleInnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-cream">{children}</main>
      <Footer />
    </>
  );
}
