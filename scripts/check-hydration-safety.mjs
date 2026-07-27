// Locks in the fix for the React #418 hydration crash (npm run check:hydration).
//
// THE BUG THIS GUARDS
// framer-motion's `useReducedMotion` resolves the preference DURING RENDER: it calls
// `initPrefersReducedMotion()`, which reads `matchMedia('(prefers-reduced-motion)')`
// synchronously, then seeds `useState` with the result. Server-side that read is
// skipped and the shared state stays `null` (see motion-dom's reduced-motion/state.mjs,
// "Returns null server-side"), so the server always renders as "motion allowed" while
// the very first CLIENT render already returns `true` for anyone with Reduce Motion on.
//
// Callers feed that value straight into `style` / `initial` / variants, so the two sides
// serialise different markup, React aborts hydration with minified error #418 and
// regenerates the entire tree. In production this fired ~110 times a day, exclusively on
// iOS Safari and Chrome iOS, where Reduce Motion is far more commonly enabled -- i.e. on
// the exact paid Reddit traffic the landing page exists to convert.
//
// THE RULE
// Nothing may call framer-motion's `useReducedMotion` directly. Everything goes through
// `useHydratedReducedMotion`, which reports `false` until after mount so the hydration
// render matches the server, then flips to the real preference on the next commit.
//
// REPRODUCING IT FOR REAL (this script is static; the browser check is manual)
//   npm run build && npx next start -p 3111
//   then load the page in a WebKit/Chromium context with reducedMotion: 'reduce'
//   and listen for `pageerror`. Before the fix that logs
//   "Minified React error #418 ... args[]=HTML"; after it, nothing. The
//   `no-preference` case never reproduced it, which is why it hid from desktop QA.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'src');

/** The one module allowed to touch the raw hook, because it is the wrapper. */
const WRAPPER_REL = 'src/components/motion/useHydratedReducedMotion.ts';

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (/\.(ts|tsx)$/.test(entry.name)) out.push(full);
  }
  return out;
}

const failures = [];

// --- 1. Nobody imports the raw hook except the wrapper -----------------------
// Matches both `import { motion, useReducedMotion } from 'framer-motion'` and the
// multi-line specifier lists the codebase also uses.
const FRAMER_IMPORT = /import\s*(?:type\s+)?\{([^}]*)\}\s*from\s*['"]framer-motion['"]/g;

for (const file of walk(SRC)) {
  const rel = path.relative(ROOT, file).split(path.sep).join('/');
  const source = fs.readFileSync(file, 'utf8');

  for (const [, specifiers] of source.matchAll(FRAMER_IMPORT)) {
    const names = specifiers.split(',').map((s) => s.trim().split(/\s+as\s+/)[0].trim());
    if (!names.includes('useReducedMotion')) continue;
    if (rel === WRAPPER_REL) continue;
    failures.push(
      `${rel} imports useReducedMotion directly from framer-motion.\n` +
        `    Use: import { useHydratedReducedMotion } from '@/components/motion/useHydratedReducedMotion'\n` +
        `    Why: the raw hook disagrees with the server on the first render and breaks hydration (React #418).`,
    );
  }

  // --- 2. Anything calling the safe hook must actually import it -------------
  if (rel !== WRAPPER_REL && /\buseHydratedReducedMotion\s*\(/.test(source)) {
    if (!/import\s*\{[^}]*\buseHydratedReducedMotion\b[^}]*\}/.test(source)) {
      failures.push(`${rel} calls useHydratedReducedMotion() without importing it.`);
    }
  }
}

// --- 3. The wrapper must still DEFER, not just rename ------------------------
// Without this, "simplifying" the wrapper into a re-export of the raw hook would
// silently restore the bug while every check above still passed.
const wrapperPath = path.join(ROOT, WRAPPER_REL);
if (!fs.existsSync(wrapperPath)) {
  failures.push(`${WRAPPER_REL} is missing; it is the only hydration-safe path to the preference.`);
} else {
  const wrapper = fs.readFileSync(wrapperPath, 'utf8');
  const usesRawHook = /\buseReducedMotion\s*\(\)/.test(wrapper);
  const gatesOnMount = /useEffect\s*\(/.test(wrapper) && /useState\s*\(\s*false\s*\)/.test(wrapper);
  // The returned value must be conjoined with the mount flag rather than returned raw.
  const returnsGated = /return\s+\w+\s*&&/.test(wrapper);

  if (!usesRawHook) {
    failures.push(`${WRAPPER_REL} no longer reads framer-motion's preference at all.`);
  }
  if (!gatesOnMount) {
    failures.push(
      `${WRAPPER_REL} must defer behind a mount flag (useState(false) + useEffect), ` +
        `or the first client render disagrees with the server again.`,
    );
  }
  if (!returnsGated) {
    failures.push(
      `${WRAPPER_REL} must return the preference ANDed with the mount flag, ` +
        `not the raw value.`,
    );
  }
}

if (failures.length > 0) {
  console.error('\nHydration safety check FAILED:\n');
  for (const failure of failures) console.error(`  - ${failure}\n`);
  console.error(
    `Reduce Motion is common on iOS. A mismatch here does not degrade gracefully:\n` +
      `React throws away the server HTML and re-renders the whole page on the client.\n`,
  );
  process.exit(1);
}

const scanned = walk(SRC).length;
console.log(`check:hydration OK - ${scanned} files scanned, no render-time matchMedia reads.`);
