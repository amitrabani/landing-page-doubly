// GENERATED FILE - do not edit by hand.
// Regenerated from content/tools-i18n/ by scripts/gen-tools-manifest.mjs,
// which runs on "npm run build" (prebuild). It tells client components which
// localized /tools and /learn pages actually exist, so they never link at a
// page that has not been translated yet.

import type { Locale } from './config';

/** Tool slugs that have a translated page, per locale. */
export const localizedToolSlugs: Partial<Record<Locale, readonly string[]>> = {
  "ar": [
    "body-doubling-room",
    "brain-dump",
    "brown-noise",
    "eisenhower-matrix",
    "hyperfocus-timer",
    "pick-one",
    "pomodoro",
    "task-splitter",
    "visual-timer"
  ],
  "de": [
    "body-doubling-room",
    "brain-dump",
    "brown-noise",
    "eisenhower-matrix",
    "hyperfocus-timer",
    "pick-one",
    "pomodoro",
    "task-splitter",
    "visual-timer"
  ],
  "es": [
    "body-doubling-room",
    "brain-dump",
    "brown-noise",
    "eisenhower-matrix",
    "hyperfocus-timer",
    "pick-one",
    "pomodoro",
    "task-splitter",
    "visual-timer"
  ],
  "fr": [
    "body-doubling-room",
    "brain-dump",
    "brown-noise",
    "eisenhower-matrix",
    "hyperfocus-timer",
    "pick-one",
    "pomodoro",
    "task-splitter",
    "visual-timer"
  ],
  "he": [
    "body-doubling-room",
    "brain-dump",
    "brown-noise",
    "eisenhower-matrix",
    "hyperfocus-timer",
    "pick-one",
    "pomodoro",
    "task-splitter",
    "visual-timer"
  ],
  "hi": [
    "body-doubling-room",
    "brain-dump",
    "brown-noise",
    "eisenhower-matrix",
    "hyperfocus-timer",
    "pick-one",
    "pomodoro",
    "task-splitter",
    "visual-timer"
  ],
  "it": [
    "body-doubling-room",
    "brain-dump",
    "brown-noise",
    "eisenhower-matrix",
    "hyperfocus-timer",
    "pick-one",
    "pomodoro",
    "task-splitter",
    "visual-timer"
  ],
  "ja": [
    "body-doubling-room",
    "brain-dump",
    "brown-noise",
    "eisenhower-matrix",
    "hyperfocus-timer",
    "pick-one",
    "pomodoro",
    "task-splitter",
    "visual-timer"
  ],
  "ko": [
    "body-doubling-room",
    "brain-dump",
    "brown-noise",
    "eisenhower-matrix",
    "hyperfocus-timer",
    "pick-one",
    "pomodoro",
    "task-splitter",
    "visual-timer"
  ],
  "nl": [
    "body-doubling-room",
    "brain-dump",
    "brown-noise",
    "eisenhower-matrix",
    "hyperfocus-timer",
    "pick-one",
    "pomodoro",
    "task-splitter",
    "visual-timer"
  ],
  "pt-BR": [
    "body-doubling-room",
    "brain-dump",
    "brown-noise",
    "eisenhower-matrix",
    "hyperfocus-timer",
    "pick-one",
    "pomodoro",
    "task-splitter",
    "visual-timer"
  ],
  "ru": [
    "body-doubling-room",
    "brain-dump",
    "brown-noise",
    "eisenhower-matrix",
    "hyperfocus-timer",
    "pick-one",
    "pomodoro",
    "task-splitter",
    "visual-timer"
  ],
  "tr": [
    "body-doubling-room",
    "brain-dump",
    "brown-noise",
    "eisenhower-matrix",
    "hyperfocus-timer",
    "pick-one",
    "pomodoro",
    "task-splitter",
    "visual-timer"
  ],
  "zh-Hans": [
    "body-doubling-room",
    "brain-dump",
    "brown-noise",
    "eisenhower-matrix",
    "hyperfocus-timer",
    "pick-one",
    "pomodoro",
    "task-splitter",
    "visual-timer"
  ]
};

/** Locales whose /tools hub is translated. */
export const hubLocales: readonly string[] = ["ar","de","es","fr","he","hi","it","ja","ko","nl","pt-BR","ru","tr","zh-Hans"];

/** Locales whose /learn page is translated. */
export const learnLocales: readonly string[] = ["ar","de","es","fr","he","hi","it","ja","ko","nl","pt-BR","ru","tr","zh-Hans"];

/** Href for a tool, in the visitor's locale when translated, else English. */
export function toolHref(locale: Locale, slug: string): string {
  const slugs = localizedToolSlugs[locale];
  return slugs?.includes(slug) ? `/${locale}/tools/${slug}` : `/tools/${slug}`;
}

/** Href for the /tools hub, in the visitor's locale when translated, else English. */
export function toolsHubHref(locale: Locale): string {
  return hubLocales.includes(locale) ? `/${locale}/tools` : '/tools';
}

/** Href for /learn, in the visitor's locale when translated, else English. */
export function learnHref(locale: Locale): string {
  return learnLocales.includes(locale) ? `/${locale}/learn` : '/learn';
}
