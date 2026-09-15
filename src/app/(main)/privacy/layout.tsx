import CookieSettingsFooter from '@/components/CookieSettingsFooter';

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <CookieSettingsFooter />
    </>
  );
}
