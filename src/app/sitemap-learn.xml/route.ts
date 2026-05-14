import { buildUrlset, learnEntries } from '@/lib/sitemap-data';

export const dynamic = 'force-static';

export function GET() {
  return new Response(buildUrlset(learnEntries), {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
