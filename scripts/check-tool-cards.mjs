// Tool-card sync checker (run: npm run check:tool-cards).
//
// Tool card copy (title + description) is authored once, in the translator-facing
// content packs (content/tools-i18n/{locale}/_index.json cards[]), and mirrored
// into the translation dictionaries (src/translations/{locale}.ts toolCards) so
// the CLIENT-side footer and the server-side homepage grid can both render it in
// the visitor's language without shipping the content packs to the browser.
//
// Two copies means they can drift. This script is the gate. It verifies:
//
//   1. Every tool in src/lib/tools.ts has a card in every locale's dictionary
//      (and no dictionary invents a card for a tool that does not exist).
//   2. Dictionary copy is byte-identical to the pack copy it mirrors, so a
//      translator editing a pack can never leave the footer/homepage stale.
//   3. No title or description is blank.
//
// tools.ts, the dictionaries, and the packs are all plain literals with no
// runtime imports, so we transpile and evaluate them in-process.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const ts = require('typescript');

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TRANSLATIONS_DIR = path.join(ROOT, 'src', 'translations');
const CONTENT_DIR = path.join(ROOT, 'content', 'tools-i18n');

function evaluateModule(file) {
  const source = fs.readFileSync(file, 'utf8');
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  });
  const module = { exports: {} };
  new Function('module', 'exports', outputText)(module, module.exports);
  return module.exports;
}

const { tools } = evaluateModule(path.join(ROOT, 'src', 'lib', 'tools.ts'));
const expectedSlugs = tools.map((tool) => tool.slug);

const locales = fs
  .readdirSync(CONTENT_DIR)
  .filter((entry) => fs.statSync(path.join(CONTENT_DIR, entry)).isDirectory())
  .sort();

let failed = 0;
const fail = (message) => {
  failed++;
  console.error(`✗ ${message}`);
};

for (const locale of locales) {
  const before = failed;
  const dictFile = path.join(TRANSLATIONS_DIR, `${locale}.ts`);
  if (!fs.existsSync(dictFile)) {
    fail(`${locale}: no dictionary at src/translations/${locale}.ts`);
    continue;
  }

  const cards = evaluateModule(dictFile).default?.toolCards;
  if (!cards) {
    fail(`${locale}: dictionary has no toolCards block`);
    continue;
  }

  const pack = JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, locale, '_index.json'), 'utf8'));
  const packBySlug = Object.fromEntries((pack.cards ?? []).map((card) => [card.slug, card]));

  for (const slug of expectedSlugs) {
    const card = cards[slug];
    if (!card) {
      fail(`${locale}: toolCards is missing '${slug}' (it is in src/lib/tools.ts)`);
      continue;
    }
    if (!card.title?.trim() || !card.description?.trim()) {
      fail(`${locale}: toolCards['${slug}'] has a blank title or description`);
      continue;
    }

    const packCard = packBySlug[slug];
    if (!packCard) {
      fail(`${locale}: content pack _index.json has no card for '${slug}'`);
      continue;
    }
    for (const field of ['title', 'description']) {
      if (card[field] !== packCard[field]) {
        fail(
          `${locale}: toolCards['${slug}'].${field} has drifted from the content pack.\n` +
            `    dictionary: ${JSON.stringify(card[field])}\n` +
            `    pack:       ${JSON.stringify(packCard[field])}`,
        );
      }
    }
  }

  for (const slug of Object.keys(cards)) {
    if (!expectedSlugs.includes(slug)) {
      fail(`${locale}: toolCards has '${slug}', which is not a tool in src/lib/tools.ts`);
    }
  }

  if (failed === before) {
    console.log(`✓ ${locale} (${expectedSlugs.length}/${expectedSlugs.length} cards)`);
  }
}

if (failed) {
  console.error(`\nTool-card check FAILED (${failed} problem(s)).`);
  process.exit(1);
}
console.log(
  `\nAll ${locales.length} locales carry all ${expectedSlugs.length} tool cards, ` +
    `in sync with their content packs.`,
);
