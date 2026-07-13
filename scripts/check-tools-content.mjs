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

function linkHrefs(str) {
  const hrefs = [];
  const re = /\[[^\]]*\]\(([^)\s]+)\)/g;
  let m;
  while ((m = re.exec(str)) !== null) hrefs.push(m[1]);
  return hrefs;
}

// Walk two parallel values; collect structural + link + emptiness problems.
function compare(en, loc, trail, problems, locale) {
  const kind = (v) =>
    v === null ? 'null' : Array.isArray(v) ? 'array' : typeof v;
  if (kind(en) !== kind(loc)) {
    problems.push(`${trail}: expected ${kind(en)}, got ${kind(loc)}`);
    return;
  }
  if (en === null) return;
  if (Array.isArray(en)) {
    if (en.length !== loc.length) {
      problems.push(`${trail}: array length ${loc.length} != en's ${en.length}`);
    }
    const n = Math.min(en.length, loc.length);
    for (let i = 0; i < n; i++) compare(en[i], loc[i], `${trail}[${i}]`, problems, locale);
    return;
  }
  if (typeof en === 'object') {
    // Treat a null-valued key as equivalent to an absent one. The section
    // objects are a discriminated union: a `steps` section legitimately carries
    // only `steps`, and whether the unused `paragraphs`/`faqs` are `null` or
    // omitted is cosmetic (the renderer reads only the payload matching `kind`).
    for (const key of Object.keys(en)) {
      if (!(key in loc)) {
        if (en[key] !== null) problems.push(`${trail}.${key}: MISSING`);
        continue;
      }
      if (en[key] === null && loc[key] === null) continue;
      compare(en[key], loc[key], `${trail}.${key}`, problems, locale);
    }
    for (const key of Object.keys(loc)) {
      if (!(key in en) && loc[key] !== null) {
        problems.push(`${trail}.${key}: EXTRA (not in en)`);
      }
    }
    return;
  }
  if (typeof en === 'string') {
    // slug and href-bearing identity fields must stay identical to en.
    if (trail.endsWith('.slug')) {
      if (en !== loc) problems.push(`${trail}: slug changed ("${loc}" != "${en}")`);
      return;
    }
    if (loc.trim() === '' && en.trim() !== '') {
      problems.push(`${trail}: empty string (en is non-empty)`);
    }
    const enHrefs = linkHrefs(en);
    const locHrefs = linkHrefs(loc);
    if (enHrefs.length !== locHrefs.length) {
      problems.push(`${trail}: has ${locHrefs.length} link(s), en has ${enHrefs.length}`);
    } else {
      for (let i = 0; i < enHrefs.length; i++) {
        if (enHrefs[i] !== locHrefs[i]) {
          problems.push(`${trail}: link href changed ("${locHrefs[i]}" != en's "${enHrefs[i]}")`);
        }
      }
    }
    // Bold/em marker balance should survive translation.
    const bold = (s) => (s.match(/\*\*/g) || []).length;
    if (bold(en) !== bold(loc)) {
      problems.push(`${trail}: ${bold(loc)} '**' markers != en's ${bold(en)}`);
    }
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
