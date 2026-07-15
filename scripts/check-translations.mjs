// Translation integrity checker (run: npm run check:i18n).
//
// The non-English dictionaries are cast `as unknown as Translations` in
// src/i18n/dictionaries.ts, so TypeScript does NOT catch missing keys or shape
// drift there. This script is the real gate. It verifies, for every locale:
//
//   1. Structural parity with en.ts (same keys, same value kinds, same array
//      lengths where the UI indexes positionally).
//   2. The demo-consistency invariants the interactive demos depend on:
//      - every taskSplitDemo.presets[].label is a key of presetResults
//        (a missing key silently falls through to the live AI call);
//      - every twoQuestions.options entry is a key of twoQuestions.responses;
//      - every brainDumpDemo.tasks[].phrase appears in dumpText exactly as the
//        typewriter matcher looks it up: dumpText.toLowerCase().includes(phrase)
//        (see computeRanges in BrainDumpDemo.tsx — a miss means the task row
//        never reveals).
//   3. Every *titleHighlight is an exact substring of its section title
//      (WordReveal only accents words when the highlight matches verbatim).
//
// Translation files are plain object literals with no imports, so we transpile
// each one with the TypeScript compiler and evaluate it in-process.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const ts = require('typescript');

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TRANSLATIONS_DIR = path.join(ROOT, 'src', 'translations');

function loadDictionary(file) {
  const source = fs.readFileSync(file, 'utf8');
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  });
  const module = { exports: {} };
  new Function('module', 'exports', outputText)(module, module.exports);
  return module.exports.default;
}

// Sections whose KEYS are localized by design (labels double as lookup keys):
// compare each value's shape against en's first value, but not the key names.
// Their key<->label consistency is enforced per-locale by checkInvariants.
const LOCALIZED_KEY_RECORDS = new Set([
  '.taskSplitDemo.presetResults',
  '.twoQuestions.responses',
]);

// Arrays whose LENGTH is legitimately per-locale (nothing indexes them
// positionally). Every other array must match en's length.
const FREE_LENGTH_ARRAYS = new Set(['.toolWidgets.pickOne.scaryWords']);

// Recursively compare value shapes. Arrays of objects must have the same
// length (demo code zips them against en-derived state); leaf kinds must match.
function compareShape(ref, val, trail, problems) {
  const kind = (v) =>
    v === null ? 'null' : Array.isArray(v) ? 'array' : typeof v === 'function' ? 'function' : typeof v;
  if (kind(ref) !== kind(val)) {
    problems.push(`${trail}: expected ${kind(ref)}, got ${kind(val)}`);
    return;
  }
  if (Array.isArray(ref)) {
    const arrayPath = trail.slice(trail.indexOf('.'));
    if (ref.length !== val.length && !FREE_LENGTH_ARRAYS.has(arrayPath)) {
      problems.push(`${trail}: array length ${val.length} != en's ${ref.length}`);
    }
    const n = Math.min(ref.length, val.length);
    for (let i = 0; i < n; i++) compareShape(ref[i], val[i], `${trail}[${i}]`, problems);
    return;
  }
  if (kind(ref) === 'object' && ref !== null) {
    const recordPath = trail.slice(trail.indexOf('.'));
    if (LOCALIZED_KEY_RECORDS.has(recordPath)) {
      // Entries correspond to en's POSITIONALLY (insertion order): the i-th
      // localized preset mirrors the i-th English one, and entries legitimately
      // differ from each other (subtask counts, urgency null vs string).
      const refEntries = Object.values(ref);
      const valEntries = Object.entries(val);
      if (valEntries.length !== refEntries.length) {
        problems.push(`${trail}: ${valEntries.length} entries != en's ${refEntries.length}`);
      }
      const n = Math.min(refEntries.length, valEntries.length);
      for (let i = 0; i < n; i++) {
        const [key, entry] = valEntries[i];
        compareShape(refEntries[i], entry, `${trail}[${JSON.stringify(key)}]`, problems);
      }
      return;
    }
    for (const key of Object.keys(ref)) {
      if (!(key in val)) {
        problems.push(`${trail}.${key}: MISSING`);
        continue;
      }
      compareShape(ref[key], val[key], `${trail}.${key}`, problems);
    }
    for (const key of Object.keys(val)) {
      if (!(key in ref)) problems.push(`${trail}.${key}: EXTRA (not in en)`);
    }
  }
}

function checkInvariants(locale, dict, problems) {
  // 1. Preset labels must resolve in presetResults.
  const { presets, presetResults } = dict.taskSplitDemo;
  for (const p of presets) {
    if (!(p.label in presetResults)) {
      problems.push(
        `taskSplitDemo: preset label ${JSON.stringify(p.label)} has no presetResults entry (would hit the live AI)`,
      );
    }
  }
  for (const key of Object.keys(presetResults)) {
    if (!presets.some((p) => p.label === key)) {
      problems.push(`taskSplitDemo: presetResults key ${JSON.stringify(key)} matches no preset label (dead entry)`);
    }
  }

  // 2. twoQuestions options must resolve in responses.
  const { options, responses } = dict.twoQuestions;
  for (const opt of options) {
    if (!(opt in responses)) {
      problems.push(`twoQuestions: option ${JSON.stringify(opt)} has no responses entry`);
    }
  }

  // 3. Brain-dump phrases must match the typewriter's lookup: computeRanges in
  //    BrainDumpDemo.tsx lowercases both sides before searching.
  const lowerDump = dict.brainDumpDemo.dumpText.toLowerCase();
  for (const task of dict.brainDumpDemo.tasks) {
    if (!lowerDump.includes(task.phrase.toLowerCase())) {
      problems.push(
        `brainDumpDemo: phrase ${JSON.stringify(task.phrase)} not found in dumpText (case-insensitive; task row would never reveal)`,
      );
    }
  }

  // 4. The "Scariest" pick-one mode ranks items by substring-matching them
  //    against scaryWords. The words must therefore be in the SAME language as
  //    the items the user will type, and lowercase, or nothing ever matches and
  //    the mode degrades to a random pick with an apologetic reason line. That
  //    degradation is silent by design (it is the honest fallback), which is
  //    exactly why it needs a build-time guard: an English list copy-pasted into
  //    de.ts would look fine and rank nothing.
  const { scaryWords, modes } = dict.toolWidgets.pickOne;
  if (!Array.isArray(scaryWords) || scaryWords.length < 12) {
    problems.push(
      `toolWidgets.pickOne.scaryWords: only ${scaryWords?.length ?? 0} words (need >= 12, or "Scariest" ranks almost nothing)`,
    );
  }
  const seen = new Set();
  for (const w of scaryWords ?? []) {
    if (typeof w !== 'string' || !w.trim()) {
      problems.push(`toolWidgets.pickOne.scaryWords: empty entry`);
      continue;
    }
    if (w !== w.toLowerCase()) {
      problems.push(
        `toolWidgets.pickOne.scaryWords: ${JSON.stringify(w)} is not lowercase (matched against a lowercased item, so it can never hit)`,
      );
    }
    if (seen.has(w)) {
      problems.push(`toolWidgets.pickOne.scaryWords: duplicate entry ${JSON.stringify(w)}`);
    }
    seen.add(w);
  }
  if (!modes.scariest.noSignalReason) {
    problems.push('toolWidgets.pickOne.modes.scariest.noSignalReason: missing');
  }
  // The words must bite on this locale's OWN placeholder list — the sample text
  // we literally show the user. If they do not, they are almost certainly still
  // English (or translated too literally to match real input).
  if (locale !== 'en' && Array.isArray(scaryWords)) {
    const sample = dict.toolWidgets.pickOne.inputPlaceholder.toLowerCase();
    const hits = scaryWords.filter((w) => typeof w === 'string' && sample.includes(w));
    if (hits.length === 0) {
      problems.push(
        `toolWidgets.pickOne.scaryWords: no word matches this locale's own inputPlaceholder (${JSON.stringify(dict.toolWidgets.pickOne.inputPlaceholder)}) — the list is probably still English, and "Scariest" would rank nothing`,
      );
    }
  }

  // 5. Highlights must be verbatim substrings of their titles.
  const highlightPairs = [
    ['problem', dict.problem.title, dict.problem.titleHighlight],
    ['brainDumpDemo', dict.brainDumpDemo.title, dict.brainDumpDemo.titleHighlight],
    ['plan', dict.plan.title, dict.plan.titleHighlight],
    ['taskSplitDemo', dict.taskSplitDemo.title, dict.taskSplitDemo.titleHighlight],
    ['twoQuestions', dict.twoQuestions.title, dict.twoQuestions.titleHighlight],
    // Hero composes its heading as titlePrefix + titleHighlight, so the
    // highlight is a substring by construction — checked for completeness.
    ['hero', dict.hero.titlePrefix + dict.hero.titleHighlight, dict.hero.titleHighlight],
  ];
  for (const [section, title, highlight] of highlightPairs) {
    if (typeof highlight !== 'string' || !highlight) {
      problems.push(`${section}.titleHighlight: missing or empty`);
    } else if (!title.includes(highlight)) {
      problems.push(
        `${section}.titleHighlight ${JSON.stringify(highlight)} is not a substring of title ${JSON.stringify(title)} (accent color would silently disappear)`,
      );
    }
  }
}

const files = fs
  .readdirSync(TRANSLATIONS_DIR)
  .filter((f) => f.endsWith('.ts'))
  .sort();

const en = loadDictionary(path.join(TRANSLATIONS_DIR, 'en.ts'));
let failed = false;

for (const file of files) {
  const locale = file.replace(/\.ts$/, '');
  const dict = locale === 'en' ? en : loadDictionary(path.join(TRANSLATIONS_DIR, file));
  const problems = [];
  if (locale !== 'en') compareShape(en, dict, locale, problems);
  checkInvariants(locale, dict, problems);
  if (problems.length) {
    failed = true;
    console.error(`\n✗ ${locale} — ${problems.length} problem(s):`);
    for (const p of problems) console.error(`  - ${p}`);
  } else {
    console.log(`✓ ${locale}`);
  }
}

if (failed) {
  console.error('\nTranslation check FAILED.');
  process.exit(1);
}
console.log('\nAll locales pass structural parity, demo invariants, and highlight checks.');
