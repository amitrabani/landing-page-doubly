'use client';

import { usePathname } from 'next/navigation';
import CookieBanner from '@/components/CookieBanner';

// The English banner for the (main) tree. A room follows each viewer's own
// language, so r/[id]/page.tsx renders its own banner and this one skips /r/.
export default function MainCookieBanner() {
  const pathname = usePathname();
  if (pathname.startsWith('/r/')) return null;
  return <CookieBanner />;
}
