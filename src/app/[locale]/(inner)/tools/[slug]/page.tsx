import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ToolArticle from '@/components/ToolArticle';
import { toolWidgets } from './toolWidgets';
import { getToolsContent, localizedToolSlugs, localesWithPack } from '@/lib/toolsContent';
import { buildPathAlternates } from '@/i18n/alternates';
import { isLocale, defaultLocale, nonDefaultLocales, type Locale } from '@/i18n/config';

// Localized tool page. Renders only for (locale, slug) pairs that have both a
// translated content pack and a known widget; anything else 404s.
export const dynamicParams = false;

// Runs once per locale the parent [locale] segment generates; returns the slugs
// that have both a pack and a widget for that locale.
export function generateStaticParams({ params }: { params: { locale: string } }) {
  const { locale } = params;
  if (!isLocale(locale)) return [];
  return localizedToolSlugs(locale)
    .filter((slug) => slug in toolWidgets)
    .map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const content = getToolsContent(locale, slug);
  if (!content) return {};

  const available = localesWithPack(slug, nonDefaultLocales);
  return {
    title: content.meta.title,
    description: content.meta.description,
    openGraph: {
      title: content.meta.ogTitle,
      description: content.meta.ogDescription,
      url: `https://usedoubly.com${locale === defaultLocale ? '' : `/${locale}`}/tools/${slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: content.meta.twitterTitle,
      description: content.meta.twitterDescription,
    },
    alternates: buildPathAlternates(locale as Locale, `/tools/${slug}`, available),
  };
}

export default async function LocalizedToolPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const widget = toolWidgets[slug];
  const content = isLocale(locale) ? getToolsContent(locale, slug) : null;
  if (!content || !widget) notFound();

  return <ToolArticle content={content} locale={locale as Locale} slug={slug} widget={widget} />;
}
