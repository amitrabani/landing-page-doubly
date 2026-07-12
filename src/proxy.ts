import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale, isLocale } from '@/i18n/config';

// Only the bare "/" is handled: a first-time visitor whose browser prefers a
// supported non-English language is sent to that locale's homepage. A manual
// choice (NEXT_LOCALE cookie, set by the language switcher) always wins, so a
// visitor who picked English stays on "/".
export const config = {
  matcher: ['/'],
};

function pickLocale(acceptLanguage: string | null): string {
  if (!acceptLanguage) return defaultLocale;

  const ranked = acceptLanguage
    .split(',')
    .map((part) => {
      const [tag, qPart] = part.trim().split(';q=');
      return { tag: tag.toLowerCase(), q: qPart ? parseFloat(qPart) : 1 };
    })
    .filter((entry) => entry.tag)
    .sort((a, b) => b.q - a.q);

  const lower = locales.map((l) => ({ locale: l, key: l.toLowerCase() }));

  for (const { tag } of ranked) {
    const exact = lower.find((l) => l.key === tag);
    if (exact) return exact.locale;

    const base = tag.split('-')[0];
    const baseMatch = lower.find((l) => l.key === base || l.key.split('-')[0] === base);
    if (baseMatch) return baseMatch.locale;
  }

  return defaultLocale;
}

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
