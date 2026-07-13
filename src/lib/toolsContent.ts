import fs from 'node:fs';
import path from 'node:path';
import type { Locale } from '@/i18n/config';

// Loader for the localized /tools + /learn SEO content packs generated into
// content/tools-i18n/{locale}/{slug}.json. Server-only (fs): the packs are
// read at build time while the localized pages statically render.
//
// English is the source of truth: content/tools-i18n/en/{slug}.json is
// extracted from the hand-written English pages, and every other locale
// mirrors its structure key-for-key (enforced by scripts/check-tools-content.mjs).

export type ToolContentSection =
  | { kind: 'steps'; heading: string; steps: { name: string; text: string }[] }
  | { kind: 'paragraphs'; heading: string; paragraphs: string[] }
  | { kind: 'faq'; heading: string; faqs: { q: string; a: string }[] };

export type ToolContent = {
  slug: string;
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    twitterTitle: string;
    twitterDescription: string;
  };
  h1: string;
  breadcrumbLabel: string;
  breadcrumbHome: string;
  breadcrumbTools: string | null;
  answerCapsule: string | null;
  intro: string | null;
  sections: ToolContentSection[];
  related: { heading: string; body: string } | null;
  cards: { slug: string; title: string; description: string }[] | null;
  openTool: string | null;
  comingSoon: string | null;
  cta: { headline: string; body: string; label: string };
  jsonld: {
    appName?: string | null;
    appDescription?: string | null;
    howToName?: string | null;
    collectionName?: string | null;
    collectionDescription?: string | null;
  };
};

const CONTENT_DIR = path.join(process.cwd(), 'content', 'tools-i18n');

export function getToolsContent(locale: Locale, slug: string): ToolContent | null {
  const file = path.join(CONTENT_DIR, locale, `${slug}.json`);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, 'utf8')) as ToolContent;
}

/** Slugs that have a localized content pack for the given locale. */
export function localizedToolSlugs(locale: Locale): string[] {
  const dir = path.join(CONTENT_DIR, locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.json') && !f.startsWith('_'))
    .map((f) => f.replace(/\.json$/, ''))
    .sort();
}

/** Non-default locales that have a pack for the given slug (for hreflang). */
export function localesWithPack(slug: string, candidates: readonly Locale[]): Locale[] {
  return candidates.filter((l) => fs.existsSync(path.join(CONTENT_DIR, l, `${slug}.json`)));
}

/** True if the given locale has a pack for the given slug. */
export function hasPack(locale: Locale, slug: string): boolean {
  return fs.existsSync(path.join(CONTENT_DIR, locale, `${slug}.json`));
}
