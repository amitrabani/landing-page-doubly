import { learnEntries } from '@/lib/sitemap-data';
import { buildLocalizedUrlset } from '@/lib/sitemap-localized';

export const dynamic = 'force-static';

export function GET() {
  // /learn is localized: each locale with a pack gets its own <url> plus the
  // shared hreflang cluster.
  return new Response(buildLocalizedUrlset(learnEntries), {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
