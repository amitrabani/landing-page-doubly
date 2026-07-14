// Integrity checker for the localized /tools + /learn content packs
// (content/tools-i18n/{locale}/{slug}.json). Run: npm run check:tools-content.
//
// English (content/tools-i18n/en/*.json) is the source of truth. Every other
// locale that has a pack for a given slug must mirror en's structure exactly,
// and — critically for SEO — must keep every link href byte-for-byte identical
// (translators localize link TEXT, never the target). This catches the failure
// modes the routes can't: a dropped FAQ, a renamed section kind, a mistranslated
// href, or an empty string that would render a blank heading.
//
// Locales are allowed to be INCOMPLETE (progressive rollout): a locale simply
// won't get a localized page for a slug it hasn't translated yet. The checker
// only validates the packs that exist; it does not require every locale to be
// complete. Pass --require-complete to fail on any locale missing a slug.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { compare } from './lib/pack-rules.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIR = path.join(ROOT, 'content', 'tools-i18n');
const requireComplete = process.argv.includes('--require-complete');

function readPack(locale, slug) {
  const file = path.join(DIR, locale, `${slug}.json`);
  if (!fs.existsSync(file)) return null;
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    return { __parseError: e.message };
  }
}

if (!fs.existsSync(path.join(DIR, 'en'))) {
  console.error(`No English packs at ${path.join(DIR, 'en')} — nothing to check.`);
  process.exit(1);
}

const enSlugs = fs
  .readdirSync(path.join(DIR, 'en'))
  .filter((f) => f.endsWith('.json'))
  .map((f) => f.replace(/\.json$/, ''))
  .sort();

const locales = fs
  .readdirSync(DIR)
  .filter((d) => fs.statSync(path.join(DIR, d)).isDirectory() && d !== 'en')
  .sort();

let failed = false;

// 1. English self-consistency: slug field matches filename, cards only on _index.
for (const slug of enSlugs) {
  const en = readPack('en', slug);
  const problems = [];
  if (en.__parseError) problems.push(`parse error: ${en.__parseError}`);
  else {
    if (en.slug !== slug) problems.push(`slug field "${en.slug}" != filename "${slug}"`);
    if (slug === '_index' && !Array.isArray(en.cards)) problems.push(`_index must have cards[]`);
    if (slug !== '_index' && en.cards != null) problems.push(`cards should be null for non-index page`);
  }
  if (problems.length) {
    failed = true;
    console.error(`✗ en/${slug}:`);
    for (const p of problems) console.error(`  - ${p}`);
  }
}

// 2. Each locale pack vs en.
let localeCount = 0;
for (const locale of locales) {
  const present = enSlugs.filter((slug) => readPack(locale, slug) != null);
  const missing = enSlugs.filter((slug) => readPack(locale, slug) == null);
  const problems = [];
  for (const slug of present) {
    const en = readPack('en', slug);
    const loc = readPack(locale, slug);
    if (loc.__parseError) {
      problems.push(`${slug}: parse error: ${loc.__parseError}`);
      continue;
    }
    compare(en, loc, slug, problems, locale);
  }
  if (requireComplete && missing.length) {
    for (const slug of missing) problems.push(`${slug}: MISSING pack`);
  }
  if (problems.length) {
    failed = true;
    console.error(`\n✗ ${locale} (${present.length}/${enSlugs.length} packs):`);
    for (const p of problems) console.error(`  - ${p}`);
  } else if (present.length) {
    localeCount++;
    console.log(`✓ ${locale} (${present.length}/${enSlugs.length} packs)`);
  }
}

console.log(
  `\nEnglish packs: ${enSlugs.length}. Locales with valid packs: ${localeCount}/${locales.length}.`,
);
if (failed) {
  console.error('Tools-content check FAILED.');
  process.exit(1);
}
console.log('All present tool-content packs pass parity, link-integrity, and marker checks.');
