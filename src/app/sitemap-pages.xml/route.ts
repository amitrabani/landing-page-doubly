import { buildUrlset, pageEntries } from '@/lib/sitemap-data';

export const dynamic = 'force-static';

export function GET() {
  return new Response(buildUrlset(pageEntries), {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
