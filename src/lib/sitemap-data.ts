export const SITE_URL = 'https://usedoubly.com';

export type SitemapEntry = { path: string; lastmod: string };

// When you add or substantively update a page, update its lastmod date here.
// CLAUDE.md §3.1: /sitemap.xml is a sitemap index. Each content type is a child.

export const pageEntries: SitemapEntry[] = [
  { path: '/', lastmod: '2026-03-24' },
  { path: '/privacy', lastmod: '2026-03-12' },
  { path: '/terms', lastmod: '2026-03-12' },
  { path: '/support', lastmod: '2026-03-12' },
];

export const toolEntries: SitemapEntry[] = [
  { path: '/tools', lastmod: '2026-05-18' },
  { path: '/tools/pomodoro', lastmod: '2026-05-18' },
  { path: '/tools/visual-timer', lastmod: '2026-05-18' },
  { path: '/tools/brown-noise', lastmod: '2026-05-14' },
  { path: '/tools/body-doubling-room', lastmod: '2026-05-17' },
  { path: '/tools/hyperfocus-timer', lastmod: '2026-05-18' },
];

export const learnEntries: SitemapEntry[] = [
  { path: '/learn', lastmod: '2026-05-14' },
];

export function buildUrlset(entries: SitemapEntry[]): string {
  const urls = entries
    .map(
      ({ path, lastmod }) =>
        `  <url>\n    <loc>${SITE_URL}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`,
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function buildSitemapIndex(
  sitemaps: { path: string; lastmod: string }[],
): string {
  const items = sitemaps
    .map(
      ({ path, lastmod }) =>
        `  <sitemap>\n    <loc>${SITE_URL}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </sitemap>`,
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</sitemapindex>\n`;
}

export function maxLastmod(entries: SitemapEntry[]): string {
  return entries.map((e) => e.lastmod).sort().reverse()[0];
}
