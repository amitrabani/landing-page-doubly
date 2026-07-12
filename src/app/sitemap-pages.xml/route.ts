import { buildPagesSitemap } from '@/lib/sitemap-data';

export const dynamic = 'force-static';

export function GET() {
  return new Response(buildPagesSitemap(), {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
