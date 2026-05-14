import {
  buildSitemapIndex,
  learnEntries,
  maxLastmod,
  pageEntries,
  toolEntries,
} from '@/lib/sitemap-data';

export const dynamic = 'force-static';

export function GET() {
  const body = buildSitemapIndex([
    { path: '/sitemap-pages.xml', lastmod: maxLastmod(pageEntries) },
    { path: '/sitemap-tools.xml', lastmod: maxLastmod(toolEntries) },
    { path: '/sitemap-learn.xml', lastmod: maxLastmod(learnEntries) },
  ]);
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
