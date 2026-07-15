import { headers } from 'next/headers';

import { isRtl } from '@/i18n/config';
import { pickLocale } from '@/i18n/pickLocale';
import { LocaleTranslationProvider } from '@/i18n/TranslationProvider';

import Room from './Room';

export const dynamic = 'force-dynamic';

// The room is the one page whose language does NOT come from the URL.
//
// /r/[id] is a link two people share, so a locale segment would bake the
// sharer's language into everyone else's room. Instead each viewer's own
// Accept-Language decides what THEY see: the same room renders in Hebrew for one
// participant and in German for the other, and the link stays copy-pasteable.
// The page is already force-dynamic, so reading the header costs nothing extra
// and the locale resolves server-side (no hydration flash, no locale flicker).
//
// The room is noindex (see ../layout.tsx), so there is no hreflang or canonical
// story to get wrong by keeping one URL.
export default async function RoomPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const locale = pickLocale((await headers()).get('accept-language'));

  // <html dir> lives in the (main) root layout and is pinned to English/ltr, so
  // an RTL viewer gets their direction from this subtree wrapper instead.
  return (
    <div dir={isRtl(locale) ? 'rtl' : 'ltr'}>
      <LocaleTranslationProvider locale={locale}>
        <Room roomId={id} />
      </LocaleTranslationProvider>
    </div>
  );
}
