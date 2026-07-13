import type { Metadata } from 'next';
import Breadcrumbs from '@/app/(main)/(public-helpers)/_components/Breadcrumbs';
import SoftAppCTA from '@/app/(main)/(public-helpers)/_components/SoftAppCTA';
import { InlineMd, ParagraphsMd } from '@/components/MarkdownLite';
import { notFound } from 'next/navigation';
import { getToolsContent, localesWithPack } from '@/lib/toolsContent';
import { buildPathAlternates, localePath } from '@/i18n/alternates';
import { isLocale, nonDefaultLocales, type Locale } from '@/i18n/config';
import { SITE_URL } from '@/lib/sitemap-data';

// Localized /learn. Prerendered for every locale [locale] enumerates; a locale
// without the _learn pack 404s rather than rendering empty.

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const content = getToolsContent(locale, '_learn');
  if (!content) return {};

  const available = localesWithPack('_learn', nonDefaultLocales);
  return {
    title: content.meta.title,
    description: content.meta.description,
    openGraph: {
      title: content.meta.ogTitle,
      description: content.meta.ogDescription,
      url: `${SITE_URL}${localePath(locale as Locale, '/learn')}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: content.meta.twitterTitle,
      description: content.meta.twitterDescription,
    },
    alternates: buildPathAlternates(locale as Locale, '/learn', available),
  };
}

export default async function LocalizedLearnHub({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getToolsContent(locale, '_learn');
  if (!content) notFound();

  const section = content.sections[0];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: content.breadcrumbHome, item: `${SITE_URL}${localePath(locale, '/')}` },
      { '@type': 'ListItem', position: 2, name: content.breadcrumbLabel, item: `${SITE_URL}${localePath(locale, '/learn')}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        <Breadcrumbs
          items={[
            { label: content.breadcrumbHome, href: localePath(locale, '/') },
            { label: content.breadcrumbLabel },
          ]}
        />

        <header className="mb-10">
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

        {section && section.kind === 'paragraphs' && (
          <section className="rounded-2xl border border-warm-dark/30 bg-warm/40 p-8 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-charcoal mb-2">
              {section.heading}
            </h2>
            {section.paragraphs.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? 'text-base text-charcoal-light leading-7 max-w-xl mx-auto'
                    : 'mt-6 text-sm text-muted max-w-xl mx-auto'
                }
              >
                <InlineMd text={p} locale={locale} />
              </p>
            ))}
          </section>
        )}

        <SoftAppCTA
          headline={content.cta.headline}
          body={content.cta.body}
          ctaLabel={content.cta.label}
        />
      </div>
    </>
  );
}
