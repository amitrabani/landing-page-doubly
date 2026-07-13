// Scans the BUILT HTML for internal links that point at pages the build did not
// generate (npm run check:links, after a build).
//
// The translation rollout is progressive, so a localized page exists only where
// its content pack does. Anything that blindly prefixes "/{locale}" onto an
// English href — a breadcrumb, a "related tools" sentence, a nav item — silently
// ships a 404. This checker is the backstop: every internal href in every
// generated page must resolve to a page the build actually emitted.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const APP = path.join(ROOT, '.next', 'server', 'app');

if (!fs.existsSync(APP)) {
  console.error('No build output at .next/server/app — run `npm run build` first.');
  process.exit(1);
}

// Collect every generated HTML page as a URL path.
const pages = new Set();
const htmlFiles = [];
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) htmlFiles.push(full);
  }
})(APP);

for (const file of htmlFiles) {
  const rel = path.relative(APP, file).replace(/\.html$/, '');
  // Route groups like "(main)" are not part of the URL.
  const url =
    '/' +
    rel
      .split(path.sep)
      .filter((seg) => !(seg.startsWith('(') && seg.endsWith(')')))
      .join('/');
  pages.add(url === '/index' ? '/' : url);
}
// The English homepage is emitted as (main).html / index.html depending on the setup.
pages.add('/');

// Known-good dynamic or non-prerendered routes (never 404 for our link set).
const DYNAMIC_OK = [/^\/r\//, /^\/api\//];

// Paths deliberately not prerendered as HTML but valid at runtime.
const ALWAYS_OK = new Set(['/robots.txt', '/sitemap.xml', '/sitemap-pages.xml', '/sitemap-tools.xml', '/sitemap-learn.xml']);

const problems = [];
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const from = '/' + path.relative(APP, file).replace(/\.html$/, '');
  const hrefs = new Set();
  const re = /href="(\/[^"#?]*)"/g;
  let m;
  while ((m = re.exec(html)) !== null) hrefs.add(m[1]);

  for (const href of hrefs) {
    const clean = href.length > 1 && href.endsWith('/') ? href.slice(0, -1) : href;
    if (ALWAYS_OK.has(clean)) continue;
    if (DYNAMIC_OK.some((re) => re.test(clean))) continue;
    // Static assets (have a file extension) are not pages.
    if (/\.[a-z0-9]{2,5}$/i.test(clean)) continue;
    if (!pages.has(clean)) {
      problems.push(`${from} -> ${href} (no such page was generated)`);
    }
  }
}

if (problems.length) {
  const unique = [...new Set(problems)].sort();
  console.error(`✗ ${unique.length} broken internal link(s) in the build output:\n`);
  for (const p of unique.slice(0, 60)) console.error(`  ${p}`);
  if (unique.length > 60) console.error(`  ... and ${unique.length - 60} more`);
  console.error('\nBuilt-links check FAILED.');
  process.exit(1);
}

console.log(`✓ All internal links across ${htmlFiles.length} generated pages resolve to real pages.`);
