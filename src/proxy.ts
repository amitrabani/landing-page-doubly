import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, isLocale } from '@/i18n/config';
import { pickLocale } from '@/i18n/pickLocale';
import { localizedHref } from '@/i18n/links';

// A first-time visitor is sent to the version of the page they landed on in the
// language their browser prefers: "/" -> "/de", "/tools/pomodoro" ->
// "/de/tools/pomodoro". A manual choice (the NEXT_LOCALE cookie, set by the
// language switcher) always wins, so a visitor who picked English stays on the
// English URLs.
//
// The locale comes from the browser's Accept-Language header only - never from
// the visitor's country. See src/i18n/pickLocale.ts for the matching rules.
//
// Only the localized surfaces are matched. /privacy, /terms, /support and the
// body-doubling rooms (/r/{id}) are English-only and must never redirect.
export const config = {
  matcher: ['/', '/tools', '/tools/:slug', '/learn'],
};

export function proxy(req: NextRequest) {
  const cookieLocale = req.cookies.get('NEXT_LOCALE')?.value;
  const chosen =
    cookieLocale && isLocale(cookieLocale)
      ? cookieLocale
      : pickLocale(req.headers.get('accept-language'));

  if (chosen === defaultLocale) return NextResponse.next();

  // localizedHref is the single source of truth for "does this page exist in
  // this locale?" - it consults the generated tools manifest and hands back the
  // English path unchanged for anything not translated yet. Redirecting to a
  // path it did not rewrite would 404, so an unchanged path means "stay put".
  const { pathname } = req.nextUrl;
  const target = localizedHref(chosen, pathname);
  if (target === pathname) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = target;
  return NextResponse.redirect(url, 307);
}
