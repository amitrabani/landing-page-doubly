import type { Metadata } from 'next';
import { headers } from 'next/headers';

import { getDictionary } from '@/i18n/dictionaries';
import { pickLocale } from '@/i18n/pickLocale';

// The tab title follows the viewer, same as the room itself (see [id]/page.tsx).
// The room is noindex, so this title is only ever read by the person in the room.
export async function generateMetadata(): Promise<Metadata> {
  const locale = pickLocale((await headers()).get('accept-language'));
  const t = getDictionary(locale);
  return {
    robots: { index: false, follow: false, nocache: true },
    title: `${t.room.header.eyebrow} | Doubly`,
  };
}

export default function RoomLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-cream">{children}</div>;
}
