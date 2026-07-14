// Validates ONE localized content pack against its English source.
//   npm run check:pack -- <locale> <slug>
//   node scripts/check-pack.mjs de pomodoro
//
// Same fatal rules as the repo-wide gate (npm run check:tools-content) — they
// share scripts/lib/pack-rules.mjs, so they cannot drift apart. A translator
// working on a single file can verify just that file instead of running (and
// racing on) the whole repo.
//
// Two advisory reports are printed but never fail the run:
//   - "possibly untranslated": fields byte-identical to English. Brand names and
//     proper nouns legitimately match, so this is a prompt to look, not a bug.
//   - meta length: search engines truncate long titles/descriptions.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { compare } from './lib/pack-rules.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIR = path.join(ROOT, 'content', 'tools-i18n');

const [locale, slug] = process.argv.slice(2);
if (!locale || !slug) {
  console.error('usage: node scripts/check-pack.mjs <locale> <slug>');
  process.exit(2);
}

const enFile = path.join(DIR, 'en', `${slug}.json`);
const locFile = path.join(DIR, locale, `${slug}.json`);

if (!fs.existsSync(enFile)) {
  console.error(`✗ no English source at content/tools-i18n/en/${slug}.json`);
  process.exit(2);
}
if (!fs.existsSync(locFile)) {
  console.error(`✗ pack not found: content/tools-i18n/${locale}/${slug}.json`);
  process.exit(1);
}

function readJson(file) {
  try {
    return { value: JSON.parse(fs.readFileSync(file, 'utf8')) };
  } catch (e) {
    return { error: e.message };
  }
}

const en = readJson(enFile);
const loc = readJson(locFile);
if (en.error) {
  console.error(`✗ en/${slug}.json is not valid JSON: ${en.error}`);
  process.exit(2);
}
if (loc.error) {
  console.error(`✗ ${locale}/${slug}.json is not valid JSON: ${loc.error}`);
  process.exit(1);
}

const problems = [];
compare(en.value, loc.value, slug, problems);

// Advisory: strings left byte-identical to English.
const identical = [];
function walkIdentical(a, b, trail) {
  if (a === null || b === null) return;
  if (Array.isArray(a) && Array.isArray(b)) {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      walkIdentical(a[i], b[i], `${trail}[${i}]`);
    }
    return;
  }
  if (typeof a === 'object' && typeof b === 'object') {
    for (const key of Object.keys(a)) {
      if (key in b) walkIdentical(a[key], b[key], `${trail}.${key}`);
    }
    return;
  }
  if (typeof a === 'string' && typeof b === 'string') {
    // .slug is REQUIRED to be identical; short strings and bare brand names
    // legitimately are.
    if (trail.endsWith('.slug')) return;
    if (a.trim().length < 8) return;
    if (a === b) identical.push(trail);
  }
}
walkIdentical(en.value, loc.value, slug);

// Advisory: meta lengths.
const lengthWarnings = [];
const meta = loc.value?.meta ?? {};
if (typeof meta.title === 'string' && meta.title.length > 60) {
  lengthWarnings.push(`meta.title is ${meta.title.length} chars (>60 is truncated in SERPs)`);
}
if (typeof meta.description === 'string' && meta.description.length > 160) {
  lengthWarnings.push(
    `meta.description is ${meta.description.length} chars (>160 is truncated in SERPs)`,
  );
}

if (problems.length) {
  console.error(`✗ ${locale}/${slug} — ${problems.length} problem(s):`);
  for (const p of problems) console.error(`  - ${p}`);
  console.error('\nFix these: the pack must mirror en exactly (structure, hrefs, slugs, ** markers).');
  process.exit(1);
}

console.log(`✓ ${locale}/${slug} — structure, links, slugs and markers all match en.`);

if (identical.length) {
  console.log(`\n⚠ ${identical.length} field(s) identical to English (check if untranslated):`);
  for (const t of identical) console.log(`  - ${t}`);
}
if (lengthWarnings.length) {
  console.log(`\n⚠ meta length:`);
  for (const w of lengthWarnings) console.log(`  - ${w}`);
}
