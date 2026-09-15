import CookieSettingsButton from '@/components/CookieSettingsButton';

// The footer for pages without the site Footer (privacy, terms, support, the
// room). The privacy policy tells visitors "Cookie settings" is in the footer of
// every page.
export default function CookieSettingsFooter() {
  return (
    <footer className="border-t border-charcoal/5 bg-cream px-6 py-8">
      <div className="mx-auto flex max-w-2xl justify-center">
        <CookieSettingsButton className="cursor-pointer text-sm text-muted underline-offset-2 transition-colors hover:text-charcoal hover:underline" />
      </div>
    </footer>
  );
}
