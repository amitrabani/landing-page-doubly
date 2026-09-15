import CookieSettingsFooter from '@/components/CookieSettingsFooter';

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <CookieSettingsFooter />
    </>
  );
}
