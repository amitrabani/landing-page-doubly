// "Scariest" mode integrity check (run: npm run check:pick-one).
//
// The Scariest mode ranks a user's list by substring-matching each item against
// toolWidgets.pickOne.scaryWords. Before 2026-07, that word list was English in
// EVERY locale, so a German or Hebrew list scored zero hits everywhere and the
// mode silently fell back to ranking by item length. It looked like it worked.
//
// check-translations.mjs guards the DATA (the words are lowercase, non-empty,
// and at least one hits the locale's own placeholder). This script guards the
// BEHAVIOUR, by running the real pickOne() from the real component logic against
// a realistic to-do list in each language and asserting that:
//
//   1. Scariest picks the dread item, and NOT merely the longest one. Each
//      fixture is built so the scary item is SHORTER than the longest item, so a
//      regression to length-ranking fails loudly instead of passing by accident.
//   2. A list with nothing scary in it reports noSignal (the honest random pick)
//      rather than quietly returning the longest item.
//   3. Ordinary, innocent chores never register as dread (no false positives).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const ts = require('typescript');

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TRANSLATIONS = path.join(ROOT, 'src', 'translations');
const LOGIC = path.join(
  ROOT,
  'src/app/(main)/(public-helpers)/tools/pick-one/pickLogic.ts',
);

function loadTs(file, stripImports = false) {
  let source = fs.readFileSync(file, 'utf8');
  // pickLogic.ts imports only a TYPE, which erases to nothing at runtime; drop
  // the import line so we can evaluate the module without a bundler.
  if (stripImports) source = source.replace(/^import[^;]+;$/gm, '');
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  });
  const module = { exports: {} };
  new Function('module', 'exports', 'require', outputText)(module, module.exports, require);
  return module.exports;
}

const { pickOne, dreadHits } = loadTs(LOGIC, true);

// Per locale: a realistic list. `scary` is the item a native speaker would be
// avoiding; `longest` is a longer, entirely innocent item. If the ranking ever
// regresses to length, Scariest returns `longest` and the check fails.
const FIXTURES = {
  en: {
    items: ['water the plants', 'call the dentist back', 'finally reorganise the whole spice shelf'],
    scary: 'call the dentist back',
  },
  de: {
    items: ['Pflanzen gießen', 'Steuererklärung machen', 'endlich das ganze Gewürzregal aufräumen'],
    scary: 'Steuererklärung machen',
  },
  es: {
    items: ['regar las plantas', 'llamar al dentista', 'ordenar por fin todo el estante de especias'],
    scary: 'llamar al dentista',
  },
  fr: {
    items: ['arroser les plantes', 'payer les impôts', 'enfin ranger toute mon étagère à épices'],
    scary: 'payer les impôts',
  },
  it: {
    items: ['annaffiare le piante', 'pagare le tasse', 'riordinare finalmente tutta la mensola delle spezie'],
    scary: 'pagare le tasse',
  },
  nl: {
    items: ['planten water geven', 'tandarts bellen', 'eindelijk het hele kruidenrek opruimen'],
    scary: 'tandarts bellen',
  },
  'pt-BR': {
    items: ['regar as plantas', 'pagar o boleto', 'finalmente organizar toda a prateleira de temperos'],
    scary: 'pagar o boleto',
  },
  ru: {
    items: ['полить цветы', 'записаться к стоматологу', 'наконец разобрать всю полку со специями'],
    scary: 'записаться к стоматологу',
  },
  tr: {
    items: ['çiçekleri sula', 'vergi beyannamesi', 'sonunda bütün baharat rafını düzenle'],
    scary: 'vergi beyannamesi',
  },
  hi: {
    items: ['पौधों को पानी देना', 'डेंटिस्ट को कॉल करना', 'आख़िरकार पूरी मसाले की अलमारी ठीक करना'],
    scary: 'डेंटिस्ट को कॉल करना',
  },
  ja: {
    items: ['植物に水やり', '歯医者を予約', 'ついにスパイス棚を全部片付ける'],
    scary: '歯医者を予約',
  },
  ko: {
    items: ['화분에 물 주기', '치과 예약하기', '드디어 양념 선반 전부 정리하기'],
    scary: '치과 예약하기',
  },
  'zh-Hans': {
    items: ['给植物浇水', '预约牙医', '终于把整个调料架都整理一遍'],
    scary: '预约牙医',
  },
  ar: {
    items: ['اسق النباتات', 'احجز موعد طبيب الأسنان', 'أخيراً رتب رف البهارات كله من جديد'],
    scary: 'احجز موعد طبيب الأسنان',
  },
  he: {
    items: ['להשקות את הצמחים', 'לקבוע תור לרופא שיניים', 'סוף סוף לסדר את כל מדף התבלינים'],
    scary: 'לקבוע תור לרופא שיניים',
  },
};

// Innocent chores that must NOT read as dread in any locale. These are the
// false-positive traps the translators flagged (Korean 사과 = apology AND apple,
// Japanese 金 is inside 金曜日 "Friday", Dutch bank = couch, Italian "rate" is
// inside "preparate", Hebrew בוס is inside אוטובוס "bus", ...).
const INNOCENT = {
  en: ['buy apples', 'water the plants'],
  de: ['Äpfel kaufen', 'Wäsche waschen'],
  es: ['comprar manzanas', 'regar las plantas'],
  fr: ['acheter du café', 'arroser les plantes'],
  it: ['preparate le slide', 'annaffiare le piante'],
  nl: ['de bank schoonmaken', 'duolingo oefenen'],
  'pt-BR': ['terminar a apresentação', 'regar as plantas'],
  ru: ['помыть посуду', 'долгая прогулка'],
  tr: ['kiraz al', 'çiçekleri sula'],
  hi: ['बिल्ली को खाना देना', 'parents से बात करना'],
  ja: ['金曜日の予定を確認', '感謝を伝える'],
  ko: ['사과 사기', '경비 정산하기'],
  'zh-Hans': ['拖地', '给植物浇水'],
  ar: ['اشتري 500 غرام طحين', 'خطة محكمة للأسبوع'],
  he: ['לקנות כרטיס לאוטובוס', 'לקחת בחשבון את הזמן'],
};

let failed = false;
const fail = (locale, msg) => {
  failed = true;
  console.error(`✗ ${locale}: ${msg}`);
};

for (const file of fs.readdirSync(TRANSLATIONS).filter((f) => f.endsWith('.ts')).sort()) {
  const locale = file.replace(/\.ts$/, '');
  const dict = loadTs(path.join(TRANSLATIONS, file)).default;
  const words = dict.toolWidgets.pickOne.scaryWords;
  const fx = FIXTURES[locale];
  if (!fx) {
    fail(locale, 'no fixture in this script — add one so the locale is actually exercised');
    continue;
  }

  const longest = [...fx.items].sort((a, b) => b.length - a.length)[0];
  if (fx.scary === longest) {
    fail(locale, 'BAD FIXTURE: the scary item is also the longest, so this cannot catch a length regression');
    continue;
  }

  // 1. Scariest must pick the dread item, not the longest one.
  const picked = pickOne(fx.items, 'scariest', new Set(), words, locale);
  const pickedText = fx.items[picked.idx];
  if (picked.noSignal) {
    fail(locale, `Scariest found NO dread at all in ${JSON.stringify(fx.items)} — scaryWords never match real ${locale} input`);
  } else if (pickedText !== fx.scary) {
    // Say WHY it lost, or the failure reads as a length regression when it is
    // really a false-positive keyword tying with the real one.
    const why = words.filter((w) => pickedText.toLocaleLowerCase(locale).includes(w));
    const expectedHits = dreadHits(fx.scary, words, locale);
    fail(
      locale,
      `Scariest picked ${JSON.stringify(pickedText)} (matched ${JSON.stringify(why)}), expected ${JSON.stringify(fx.scary)} (${expectedHits} hit(s))` +
        (why.length === 0
          ? ' — it matched NOTHING, so this is the length-ranking bug'
          : ' — those words are false positives on an innocent chore'),
    );
  }

  // 2. A list with nothing scary must admit it instead of returning the longest.
  const calm = ['water the plants', 'a much much longer but perfectly pleasant errand'];
  const calmPick = pickOne(calm, 'scariest', new Set(), words, locale);
  if (!calmPick.noSignal) {
    fail(locale, 'a list with no dread did not report noSignal (it is silently ranking by length again)');
  }

  // 3. Innocent chores must not trip a dread word.
  for (const chore of INNOCENT[locale] ?? []) {
    const hits = dreadHits(chore, words, locale);
    if (hits > 0) {
      const culprits = words.filter((w) => chore.toLocaleLowerCase(locale).includes(w));
      fail(locale, `false positive: ${JSON.stringify(chore)} reads as scary (matched ${JSON.stringify(culprits)})`);
    }
  }

  if (!failed) console.log(`✓ ${locale.padEnd(7)} scariest → ${JSON.stringify(pickedText)}`);
}

if (failed) {
  console.error('\nPick-one check FAILED.');
  process.exit(1);
}
console.log('\nScariest ranks by real dread in all 15 locales, admits when it cannot, and no innocent chore reads as scary.');
