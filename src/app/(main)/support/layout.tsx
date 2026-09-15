import CookieSettingsFooter from '@/components/CookieSettingsFooter';

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <CookieSettingsFooter />
    </>
  );
}
