// Server-only sitemap helpers for the localized /tools + /learn surfaces.
// Kept separate from sitemap-data.ts because that module is in the client
// import graph (via i18n/alternates), and this one reads the filesystem
// (localesWithPack) which must never reach a client bundle.

import { htmlLang, nonDefaultLocales, type Locale } from '@/i18n/config';
import { localePath } from '@/i18n/alternates';
import { SITE_URL, type SitemapEntry } from './sitemap-data';
import { localesWithPack } from './toolsContent';

// Map a sitemap path to its content-pack slug.
function slugForPath(path: string): string {
  if (path === '/tools') return '_index';
  if (path === '/learn') return '_learn';
  return path.replace(/^\/tools\//, '');
}

// hreflang cluster for one path, limited to locales that actually have the page.
function alternateLinks(path: string, available: Locale[]): string {
  const links = (['en', ...available] as Locale[]).map(
    (l) =>
      `    <xhtml:link rel="alternate" hreflang="${htmlLang[l]}" href="${SITE_URL}${localePath(l, path)}"/>`,
  );
  links.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${path}"/>`);
  return links.join('\n');
}

// Renders a urlset where each entry gets one <url> per available locale (English
// plus every locale with a pack), and every <url> carries the shared cluster.
export function buildLocalizedUrlset(entries: SitemapEntry[]): string {
  const blocks: string[] = [];
  for (const { path, lastmod } of entries) {
    const available = localesWithPack(slugForPath(path), nonDefaultLocales);
    const cluster = alternateLinks(path, available);
    for (const locale of ['en', ...available] as Locale[]) {
      const loc = `${SITE_URL}${localePath(locale, path)}`;
      blocks.push(`  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n${cluster}\n  </url>`);
    }
  }
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${blocks.join('\n')}\n</urlset>\n`;
}
