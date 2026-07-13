// GENERATED FILE - do not edit by hand.
// Regenerated from content/tools-i18n/ by scripts/gen-tools-manifest.mjs,
// which runs on "npm run build" (prebuild). It tells client components which
// localized /tools and /learn pages actually exist, so they never link at a
// page that has not been translated yet.

import type { Locale } from './config';

/** Tool slugs that have a translated page, per locale. */
export const localizedToolSlugs: Partial<Record<Locale, readonly string[]>> = {
  "ar": [
    "brain-dump",
    "eisenhower-matrix",
    "pick-one",
    "task-splitter"
  ],
  "de": [
    "brain-dump",
    "eisenhower-matrix",
    "pick-one",
    "pomodoro",
    "task-splitter"
  ],
  "es": [
    "brain-dump",
    "eisenhower-matrix",
    "pick-one",
    "pomodoro",
    "task-splitter"
  ],
  "fr": [
    "brain-dump",
    "eisenhower-matrix",
    "pick-one",
    "pomodoro",
    "task-splitter"
  ],
  "he": [
    "brain-dump",
    "eisenhower-matrix",
    "pick-one",
    "task-splitter"
  ],
  "hi": [
    "brain-dump",
    "eisenhower-matrix",
    "pick-one",
    "task-splitter"
  ],
  "it": [
    "brain-dump",
    "eisenhower-matrix",
    "pick-one",
    "pomodoro",
    "task-splitter"
  ],
  "ja": [
    "brain-dump",
    "eisenhower-matrix",
    "pick-one",
    "task-splitter"
  ],
  "ko": [
    "brain-dump",
    "eisenhower-matrix",
    "pick-one",
    "task-splitter"
  ],
  "nl": [
    "brain-dump",
    "eisenhower-matrix",
    "pick-one",
    "pomodoro",
    "task-splitter"
  ],
  "pt-BR": [
    "brain-dump",
    "eisenhower-matrix",
    "pick-one",
    "task-splitter"
  ],
  "ru": [
    "brain-dump",
    "eisenhower-matrix",
    "pick-one",
    "task-splitter"
  ],
  "tr": [
    "brain-dump",
    "eisenhower-matrix",
    "pick-one",
    "task-splitter"
  ],
  "zh-Hans": [
    "brain-dump",
    "eisenhower-matrix",
    "pick-one",
    "task-splitter"
  ]
};

/** Locales whose /tools hub is translated. */
export const hubLocales: readonly string[] = [];

/** Locales whose /learn page is translated. */
export const learnLocales: readonly string[] = [];

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
