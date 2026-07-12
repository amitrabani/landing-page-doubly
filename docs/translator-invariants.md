# Translator guide: invariants every locale file must keep

Audience: native-speaker reviewers and anyone editing `src/translations/{locale}.ts`.

The landing page's interactive demos read the translation files as **data**, not
just display copy. A translation that reads perfectly can still silently break a
demo if it violates one of the rules below. After ANY edit to a translation
file, run:

```bash
npm run check:i18n
```

It enforces every rule on this page (plus structural parity with `en.ts`) and
tells you exactly what broke. `npm run build` must also pass — it statically
renders all 15 homepages.

## The invariants

### 1. Task-splitter presets: the label IS the lookup key

In `taskSplitDemo`, each entry of `presets[].label` doubles as a key of
`presetResults`. When a visitor taps the "Clean the kitchen" chip, the code
looks up `presetResults["<that exact label>"]`.

- Translate the label and its `presetResults` key **identically, character for
  character** (including punctuation and emoji-free text — the emoji lives in
  the separate `icon` field for `presets`, but `presetResults` object keys and
  their `title` values keep the emoji prefix as in `en.ts`).
- A mismatched pair doesn't error — the demo silently falls through to a live
  AI call, which is slower and non-deterministic. That's a bug, not a fallback.
- Keep the entries of `presetResults` in the **same order** as in `en.ts` (the
  checker compares the i-th localized entry to the i-th English one).

### 2. Two-questions options: the option IS the lookup key

In `twoQuestions`, every string in `options` doubles as a key of `responses`.
Same rule: translate each option and its `responses` key identically. A
mismatch means tapping that answer shows nothing.

### 3. Brain-dump phrases must appear inside the dump text

In `brainDumpDemo`, each `tasks[].phrase` must occur **verbatim inside
`dumpText`** (case-insensitive — accents, punctuation and spacing must match
exactly). The typewriter animation searches the dump text for each phrase and
reveals the matching task row when it finishes typing it.

- A phrase that doesn't appear means that task row **never reveals** — the demo
  looks broken. (This actually shipped once: the German phrases capitalized
  nouns differently from a lowercase-only matcher. The matcher is
  case-insensitive now, but the phrase must still be a real substring.)
- Best practice: write `dumpText` first, then copy each phrase out of it.
- The visible chip text (`tasks[].text`) is free-form and does NOT need to
  match the phrase — only `phrase` is a lookup key.

### 4. Title highlights must be substrings of their titles

Sections `hero`, `problem`, `brainDumpDemo`, `plan`, `taskSplitDemo`, and
`twoQuestions` each carry a `titleHighlight` — the fragment of the title that
renders in the accent color.

- `titleHighlight` must be an **exact substring** of that section's `title`
  (for `hero`, of `titlePrefix + titleHighlight`, which is true by
  construction).
- If it isn't, nothing crashes — the accent color just silently disappears.
- Pick the phrase carrying the emotional weight of the sentence, mirroring
  what the English highlight emphasizes (e.g. en `plan` highlights "unstuck").
- Word-boundary note: the highlighter colors **whole space-separated words**
  that overlap the fragment. In languages without spaces (ja, zh-Hans) the
  entire title is treated as one word and will be fully accent-colored —
  that's the accepted behavior (the hero already works this way), not a bug.

### 5. Functions must keep their signatures

Some values are functions, not strings (`common.socialProof`,
`brainDumpDemo.tasksFound`, `taskSplitDemo.stepsDone`, `taskSplitDemo.minTotal`,
`footer.copyright`). Translate only the text inside the template literal; keep
the parameters and the `toLocaleString(...)` locale tag appropriate for your
language.

### 6. Structure mirrors `en.ts` exactly

Same keys, same nesting, same array lengths. `en.ts` is the type source of
truth, but the non-English files are cast in a way that TypeScript does NOT
verify — only `npm run check:i18n` catches drift.

## What deliberately stays English

- `/tools/*` and `/learn` pages (SEO long-tail; their titles/descriptions in
  `src/lib/tools.ts` stay English even when linked from localized pages).
- Testimonial `quote` and `name` fields — real App Store reviews; only their
  `label` is translated.
- The brand name "Doubly" and the terms "ADHD" (except fr/pt-BR "TDAH" and
  ru "СДВГ", which follow each locale's established convention — keep whichever
  the file already uses).
