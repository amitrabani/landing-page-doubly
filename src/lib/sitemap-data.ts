import { locales, defaultLocale, htmlLang, type Locale } from '@/i18n/config';

export const SITE_URL = 'https://usedoubly.com';

export type SitemapEntry = { path: string; lastmod: string };

// When you add or substantively update a page, update its lastmod date here.
// CLAUDE.md §3.1: /sitemap.xml is a sitemap index. Each content type is a child.

export const pageEntries: SitemapEntry[] = [
  { path: '/', lastmod: '2026-07-12' },
  { path: '/privacy', lastmod: '2026-03-12' },
  { path: '/terms', lastmod: '2026-03-12' },
  { path: '/support', lastmod: '2026-03-12' },
];

export const toolEntries: SitemapEntry[] = [
  { path: '/tools', lastmod: '2026-05-30' },
  { path: '/tools/task-splitter', lastmod: '2026-05-30' },
  { path: '/tools/brain-dump', lastmod: '2026-05-30' },
  { path: '/tools/pick-one', lastmod: '2026-05-30' },
  { path: '/tools/eisenhower-matrix', lastmod: '2026-05-30' },
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

// The homepage is the only surface translated into every locale, so every
// localized homepage URL carries the full hreflang cluster (mirrors
// buildHomeAlternates in @/i18n/alternates). Default locale lives at "/",
// every other locale at "/{locale}".
function homePath(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}`;
}

function homeAlternateLinks(): string {
  const links = locales.map(
    (l) =>
      `    <xhtml:link rel="alternate" hreflang="${htmlLang[l]}" href="${SITE_URL}${homePath(l)}"/>`,
  );
  // x-default points at the English homepage for unmatched languages.
  links.push(
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/"/>`,
  );
  return links.join('\n');
}

// Renders the "pages" child sitemap: all 15 localized homepages (each annotated
// with the shared hreflang cluster) plus the English-only static pages.
export function buildPagesSitemap(): string {
  const homeLastmod =
    pageEntries.find((e) => e.path === '/')?.lastmod ?? maxLastmod(pageEntries);
  const alternates = homeAlternateLinks();
  const homeUrls = locales
    .map(
      (l) =>
        `  <url>\n    <loc>${SITE_URL}${homePath(l)}</loc>\n    <lastmod>${homeLastmod}</lastmod>\n${alternates}\n  </url>`,
    )
    .join('\n');
  const staticUrls = pageEntries
    .filter((e) => e.path !== '/')
    .map(
      ({ path, lastmod }) =>
        `  <url>\n    <loc>${SITE_URL}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`,
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${homeUrls}\n${staticUrls}\n</urlset>\n`;
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
