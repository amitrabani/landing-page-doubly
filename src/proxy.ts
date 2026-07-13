import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, isLocale } from '@/i18n/config';
import { pickLocale } from '@/i18n/pickLocale';

// Only the bare "/" is handled: a first-time visitor whose browser prefers a
// supported non-English language is sent to that locale's homepage. A manual
// choice (NEXT_LOCALE cookie, set by the language switcher) always wins, so a
// visitor who picked English stays on "/".
//
// The locale comes from the browser's Accept-Language header only — never from
// the visitor's country. See src/i18n/pickLocale.ts for the matching rules.
export const config = {
  matcher: ['/'],
};

export function proxy(req: NextRequest) {
  const cookieLocale = req.cookies.get('NEXT_LOCALE')?.value;
  const chosen =
    cookieLocale && isLocale(cookieLocale)
      ? cookieLocale
      : pickLocale(req.headers.get('accept-language'));

  if (chosen !== defaultLocale) {
    const url = req.nextUrl.clone();
    url.pathname = `/${chosen}`;
    return NextResponse.redirect(url, 307);
  }

  return NextResponse.next();
}
