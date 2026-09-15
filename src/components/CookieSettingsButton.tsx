'use client';

import { useT } from '@/i18n/TranslationProvider';
import { reopenConsentBanner } from '@/lib/consent';

// Reopens the cookie banner so a visitor can change or withdraw their choice.
export default function CookieSettingsButton({ className }: { className: string }) {
  const t = useT();
  return (
    <button
      type="button"
      onClick={(event) => reopenConsentBanner(event.currentTarget)}
      className={className}
    >
      {t.footer.cookieSettings}
    </button>
  );
}
