import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/app/(main)/(public-helpers)/_components/Breadcrumbs';
import SoftAppCTA from '@/app/(main)/(public-helpers)/_components/SoftAppCTA';
import { ParagraphsMd } from '@/components/MarkdownLite';
import { getToolsContent, localizedToolSlugs, localesWithPack } from '@/lib/toolsContent';
import { buildPathAlternates, localePath } from '@/i18n/alternates';
import { notFound } from 'next/navigation';
import { isLocale, nonDefaultLocales, type Locale } from '@/i18n/config';
import { SITE_URL } from '@/lib/sitemap-data';

// Localized tools hub. Prerendered for every locale the parent [locale] segment
// enumerates; a locale without the _index pack 404s rather than rendering empty.

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const content = getToolsContent(locale, '_index');
  if (!content) return {};

  const available = localesWithPack('_index', nonDefaultLocales);
  return {
    title: content.meta.title,
    description: content.meta.description,
    openGraph: {
      title: content.meta.ogTitle,
      description: content.meta.ogDescription,
      url: `${SITE_URL}${localePath(locale as Locale, '/tools')}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: content.meta.twitterTitle,
      description: content.meta.twitterDescription,
    },
    alternates: buildPathAlternates(locale as Locale, '/tools', available),
  };
}

export default async function LocalizedToolsHub({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getToolsContent(locale, '_index');
  if (!content || !content.cards) notFound();

  const pageUrl = `${SITE_URL}${localePath(locale, '/tools')}`;
  // Only surface tools that have a localized detail page in this locale.
  const localized = new Set(localizedToolSlugs(locale));
  const cards = content.cards.filter((c) => localized.has(c.slug));

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: content.breadcrumbHome, item: `${SITE_URL}${localePath(locale, '/')}` },
      { '@type': 'ListItem', position: 2, name: content.breadcrumbLabel, item: pageUrl },
    ],
  };
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${pageUrl}#page`,
    url: pageUrl,
    name: content.jsonld.collectionName ?? content.h1,
    description: content.jsonld.collectionDescription ?? content.meta.description,
    inLanguage: locale,
    isPartOf: { '@id': `${SITE_URL}#website` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <Breadcrumbs
          items={[
            { label: content.breadcrumbHome, href: localePath(locale, '/') },
            { label: content.breadcrumbLabel },
          ]}
        />

        <header className="mb-12">
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-charcoal mb-4 leading-tight">
            {content.h1}
          </h1>
          {content.intro && (
            <ParagraphsMd
              text={content.intro}
              locale={locale}
              className="text-lg text-charcoal-light leading-8 max-w-2xl"
            />
          )}
        </header>

        <section aria-label={content.h1} className="mb-12">
          <ul className="grid gap-4 sm:grid-cols-2">
            {cards.map((card) => (
              <li key={card.slug}>
                <Link
                  href={localePath(locale, `/tools/${card.slug}`)}
                  className="block h-full rounded-2xl bg-white border border-warm-dark/30 p-6 hover:border-lavender hover:shadow-[0_4px_20px_rgba(184,169,212,0.15)] transition-all"
                >
                  <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-charcoal mb-2">
                    {card.title}
                  </h2>
                  <p className="text-sm text-charcoal-light leading-6">{card.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-lavender-dark">
                    {content.openTool ?? 'Open tool'} <span aria-hidden="true">&rarr;</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <SoftAppCTA
          headline={content.cta.headline}
          body={content.cta.body}
          ctaLabel={content.cta.label}
        />
      </div>
    </>
  );
}
