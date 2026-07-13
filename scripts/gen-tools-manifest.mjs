// Generates src/i18n/toolsManifest.ts from the content packs on disk.
// Runs automatically before every build (see the "prebuild" npm script).
//
// Why this exists: Navbar and Footer are CLIENT components, so they cannot read
// the filesystem to find out whether a given tool/hub/learn page exists in the
// visitor's locale. Without that knowledge they would link at /{locale}/tools
// pages that have not been translated yet and 404. This manifest hands them the
// same truth the server routes derive from disk, as plain serializable data, so
// a partially-translated rollout is always safe: a link points into the
// visitor's locale only when that page actually exists, else it falls back to
// the English page.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIR = path.join(ROOT, 'content', 'tools-i18n');
const OUT = path.join(ROOT, 'src', 'i18n', 'toolsManifest.ts');

const locales = fs.existsSync(DIR)
  ? fs
      .readdirSync(DIR)
      .filter((d) => fs.statSync(path.join(DIR, d)).isDirectory() && d !== 'en')
      .sort()
  : [];

const toolSlugs = {};
const hubLocales = [];
const learnLocales = [];

for (const locale of locales) {
  const files = fs
    .readdirSync(path.join(DIR, locale))
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.replace(/\.json$/, ''));

  const slugs = files.filter((s) => !s.startsWith('_')).sort();
  if (slugs.length) toolSlugs[locale] = slugs;
  if (files.includes('_index')) hubLocales.push(locale);
  if (files.includes('_learn')) learnLocales.push(locale);
}

const body = `// GENERATED FILE - do not edit by hand.
// Regenerated from content/tools-i18n/ by scripts/gen-tools-manifest.mjs,
// which runs on "npm run build" (prebuild). It tells client components which
// localized /tools and /learn pages actually exist, so they never link at a
// page that has not been translated yet.

import type { Locale } from './config';

/** Tool slugs that have a translated page, per locale. */
export const localizedToolSlugs: Partial<Record<Locale, readonly string[]>> = ${JSON.stringify(toolSlugs, null, 2)};

/** Locales whose /tools hub is translated. */
export const hubLocales: readonly string[] = ${JSON.stringify(hubLocales)};

/** Locales whose /learn page is translated. */
export const learnLocales: readonly string[] = ${JSON.stringify(learnLocales)};

/** Href for a tool, in the visitor's locale when translated, else English. */
export function toolHref(locale: Locale, slug: string): string {
  const slugs = localizedToolSlugs[locale];
  return slugs?.includes(slug) ? \`/\${locale}/tools/\${slug}\` : \`/tools/\${slug}\`;
}

/** Href for the /tools hub, in the visitor's locale when translated, else English. */
export function toolsHubHref(locale: Locale): string {
  return hubLocales.includes(locale) ? \`/\${locale}/tools\` : '/tools';
}

/** Href for /learn, in the visitor's locale when translated, else English. */
export function learnHref(locale: Locale): string {
  return learnLocales.includes(locale) ? \`/\${locale}/learn\` : '/learn';
}
`;

fs.writeFileSync(OUT, body, 'utf8');
const total = Object.values(toolSlugs).reduce((n, s) => n + s.length, 0);
console.log(
  `tools manifest: ${total} localized tool page(s) across ${Object.keys(toolSlugs).length} locale(s); ` +
    `hub in ${hubLocales.length}, learn in ${learnLocales.length}.`,
);
