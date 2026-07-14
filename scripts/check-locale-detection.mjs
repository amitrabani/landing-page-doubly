// Locks in how a first-time visitor's homepage language is chosen
// (npm run check:locale).
//
// The rule this guards: the locale is decided by the visitor's BROWSER LANGUAGE
// (Accept-Language), never by their country. A region subtag ("en-GB", "de-AT",
// "pt-PT") must never change which language is selected, and there is no IP/geo
// lookup anywhere in the codebase.
//
// src/i18n/pickLocale.ts is pure, so we transpile it (plus its config import)
// and exercise it directly with real-world Accept-Language headers.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const ts = require('typescript');

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function loadModule(relPath, resolve = () => ({})) {
  const source = fs.readFileSync(path.join(ROOT, relPath), 'utf8');
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  });
  const mod = { exports: {} };
  new Function('module', 'exports', 'require', outputText)(mod, mod.exports, resolve);
  return mod.exports;
}

const config = loadModule('src/i18n/config.ts');
const { pickLocale } = loadModule('src/i18n/pickLocale.ts', (id) => {
  if (id === './config') return config;
  throw new Error(`unexpected import: ${id}`);
});

// [Accept-Language header, expected locale, why]
const CASES = [
  // --- Country/region must NEVER decide the language ---
  ['en-GB,en;q=0.9', 'en', 'English browser in the UK stays English'],
  ['en-US,en;q=0.9', 'en', 'English browser in the US stays English'],
  ['en-IL,en;q=0.9', 'en', 'English browser in Israel stays English (not Hebrew)'],
  ['en-DE,en;q=0.9', 'en', 'English browser in Germany stays English (not German)'],
  ['de-AT,de;q=0.9', 'de', 'German browser in Austria gets German'],
  ['de-CH,de;q=0.9', 'de', 'German browser in Switzerland gets German'],
  ['de-DE,de;q=0.9,en;q=0.8', 'de', 'German browser prefers German over English'],
  ['fr-CA,fr;q=0.9', 'fr', 'French browser in Canada gets French'],
  ['es-MX,es;q=0.9', 'es', 'Spanish browser in Mexico gets Spanish'],

  // --- Language-only fallback when the exact region variant is not shipped ---
  ['pt-PT,pt;q=0.9', 'pt-BR', 'European Portuguese falls back to the shipped pt-BR'],
  ['pt-BR,pt;q=0.9', 'pt-BR', 'Brazilian Portuguese matches exactly'],
  ['zh-CN,zh;q=0.9', 'zh-Hans', 'Simplified Chinese matches zh-Hans'],
  ['zh-TW,zh;q=0.9', 'zh-Hans', 'Traditional Chinese falls back to the shipped zh-Hans'],
  ['he-IL,he;q=0.9', 'he', 'Hebrew browser gets Hebrew'],
  ['ar-SA,ar;q=0.9', 'ar', 'Arabic browser gets Arabic'],

  // --- Preference order (q) is honored ---
  ['en;q=0.8,de;q=0.9', 'de', 'higher q wins regardless of header order'],
  ['xx,de;q=0.9', 'de', 'unsupported language falls through to the next preference'],
  ['he;q=0.7,en-US;q=0.9,en;q=0.8', 'en', 'English preferred over Hebrew by q'],

  // --- q=0 means "not acceptable" and must never be selected ---
  ['de;q=0,fr;q=0.5', 'fr', 'q=0 German is rejected, French chosen'],
  ['de;q=0', 'en', 'only a rejected language -> English default'],

  // --- Degenerate input ---
  ['', 'en', 'empty header -> English'],
  [null, 'en', 'missing header -> English'],
  ['*', 'en', 'wildcard -> English'],
  ['xx-YY', 'en', 'unsupported language -> English'],
  ['de;q=abc', 'en', 'malformed q is not treated as top priority'],
  ['  DE-de , EN ; q=0.5 ', 'de', 'whitespace and casing tolerated'],
];

let failed = 0;
for (const [header, expected, why] of CASES) {
  const got = pickLocale(header);
  if (got !== expected) {
    failed++;
    console.error(`✗ ${JSON.stringify(header)} -> ${got} (expected ${expected}) — ${why}`);
  } else {
    console.log(`✓ ${JSON.stringify(header)} -> ${got}`);
  }
}

// Guard: no country/geo signal may creep into locale selection.
const GEO_PATTERN = /x-vercel-ip-country|cf-ipcountry|geoip|geolocation|req\.geo|request\.geo/i;
for (const file of ['src/proxy.ts', 'src/i18n/pickLocale.ts']) {
  const src = fs.readFileSync(path.join(ROOT, file), 'utf8');
  if (GEO_PATTERN.test(src)) {
    failed++;
    console.error(`✗ ${file} references a country/geo signal — locale must come from Accept-Language only`);
  }
}

// --- Where a matched request is sent -------------------------------------
//
// The proxy redirects the page the visitor actually landed on, not just "/".
// It delegates "does this page exist in this locale?" to localizedHref, which
// reads the generated tools manifest. Two failure modes matter, and both are
// checked here:
//   1. a redirect into a locale that has NO pack for that page would 404;
//   2. an English-only page (/privacy, /terms, /support, /r/{id}) must never be
//      rewritten into a locale prefix.

const manifest = loadModule('src/i18n/toolsManifest.ts', () => ({}));
const { localizedHref } = loadModule('src/i18n/links.ts', (id) => {
  if (id === './config') return config;
  if (id === './toolsManifest') return manifest;
  throw new Error(`unexpected import: ${id}`);
});

const { defaultLocale, locales } = config;
const nonDefault = locales.filter((l) => l !== defaultLocale);

// The matcher must cover the localized surfaces and nothing else.
const proxySrc = fs.readFileSync(path.join(ROOT, 'src/proxy.ts'), 'utf8');
const matcherBlock = proxySrc.match(/matcher:\s*\[([^\]]*)\]/)?.[1] ?? '';
const matcher = [...matcherBlock.matchAll(/'([^']+)'/g)].map((m) => m[1]);
for (const expected of ['/', '/tools', '/tools/:slug', '/learn']) {
  if (!matcher.includes(expected)) {
    failed++;
    console.error(`✗ proxy matcher is missing ${JSON.stringify(expected)} — that page never gets localized`);
  }
}
for (const forbidden of ['/privacy', '/terms', '/support']) {
  if (matcher.some((m) => m.startsWith(forbidden))) {
    failed++;
    console.error(`✗ proxy matcher includes ${JSON.stringify(forbidden)} — that page is English-only`);
  }
}

// English never redirects, whatever the path.
for (const p of ['/', '/tools', '/tools/pomodoro', '/learn', '/privacy']) {
  const got = localizedHref(defaultLocale, p);
  if (got !== p) {
    failed++;
    console.error(`✗ localizedHref('${defaultLocale}', '${p}') -> '${got}' (English must never be rewritten)`);
  }
}

// The homepage is translated everywhere, so it always redirects.
for (const locale of nonDefault) {
  const got = localizedHref(locale, '/');
  if (got !== `/${locale}`) {
    failed++;
    console.error(`✗ localizedHref('${locale}', '/') -> '${got}' (expected '/${locale}')`);
  }
}

// English-only pages are never rewritten into a locale prefix (they would 404).
for (const locale of nonDefault) {
  for (const p of ['/privacy', '/terms', '/support']) {
    const got = localizedHref(locale, p);
    if (got !== p) {
      failed++;
      console.error(`✗ localizedHref('${locale}', '${p}') -> '${got}' (English-only page must not be localized)`);
    }
  }
}

// A tool/hub/learn path is sent into the locale ONLY when that locale has the
// pack; otherwise it must stay on the English page rather than 404.
let redirected = 0;
let keptEnglish = 0;
const allSlugs = [
  ...new Set(Object.values(manifest.localizedToolSlugs ?? {}).flat()),
  'a-slug-that-does-not-exist',
];
for (const locale of nonDefault) {
  const have = manifest.localizedToolSlugs?.[locale] ?? [];
  for (const slug of allSlugs) {
    const got = localizedHref(locale, `/tools/${slug}`);
    const expected = have.includes(slug) ? `/${locale}/tools/${slug}` : `/tools/${slug}`;
    if (got !== expected) {
      failed++;
      console.error(`✗ localizedHref('${locale}', '/tools/${slug}') -> '${got}' (expected '${expected}')`);
    } else if (have.includes(slug)) redirected++;
    else keptEnglish++;
  }

  for (const [p, list] of [
    ['/tools', manifest.hubLocales ?? []],
    ['/learn', manifest.learnLocales ?? []],
  ]) {
    const got = localizedHref(locale, p);
    const expected = list.includes(locale) ? `/${locale}${p}` : p;
    if (got !== expected) {
      failed++;
      console.error(`✗ localizedHref('${locale}', '${p}') -> '${got}' (expected '${expected}')`);
    } else if (list.includes(locale)) redirected++;
    else keptEnglish++;
  }
}

if (failed) {
  console.error(`\nLocale-detection check FAILED (${failed} problem(s)).`);
  process.exit(1);
}
console.log(`\nAll ${CASES.length} cases pass: locale follows the browser language, never the country.`);
console.log(
  `Redirect targets: ${redirected} localized page(s) redirect into their locale, ` +
    `${keptEnglish} untranslated page(s) correctly stay on English (no 404).`,
);
