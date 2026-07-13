import { toolEntries } from '@/lib/sitemap-data';
import { buildLocalizedUrlset } from '@/lib/sitemap-localized';

export const dynamic = 'force-static';

export function GET() {
  // Each tool page (and the /tools hub) is localized: one <url> per locale that
  // has a pack, every entry annotated with the shared hreflang cluster.
  return new Response(buildLocalizedUrlset(toolEntries), {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
