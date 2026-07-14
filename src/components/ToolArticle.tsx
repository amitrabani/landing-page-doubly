import Breadcrumbs from '@/app/(main)/(public-helpers)/_components/Breadcrumbs';
import SoftAppCTA from '@/app/(main)/(public-helpers)/_components/SoftAppCTA';
import { InlineMd, ParagraphsMd } from '@/components/MarkdownLite';
import { localePath } from '@/i18n/alternates';
import { getDictionary } from '@/i18n/dictionaries';
import { localizedHref } from '@/i18n/links';
import { SITE_URL } from '@/lib/sitemap-data';
import type { Locale } from '@/i18n/config';
import type { ToolContent } from '@/lib/toolsContent';

// Server-rendered article body shared by every localized tool page. Mirrors the
// hand-written English tool pages (breadcrumbs, answer capsule, intro, H2
// sections, related tools, soft app CTA) but sources all copy from a localized
// ToolContent pack and emits locale-correct URLs + JSON-LD.

function stripMarkers(md: string): string {
  // JSON-LD text must be plain: drop **/* and unwrap [text](href) -> text.
  return md
    .replace(/\[([^\]]+)\]\([^)\s]+\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1');
}

type Props = {
  content: ToolContent;
  locale: Locale;
  slug: string;
  /** The interactive widget rendered above the fold. */
  widget: React.ReactNode;
};

export default function ToolArticle({ content, locale, slug, widget }: Props) {
  const pageUrl = `${SITE_URL}${localePath(locale, `/tools/${slug}`)}`;
  const homeUrl = `${SITE_URL}${localePath(locale, '/')}`;
  const toolsUrl = `${SITE_URL}${localePath(locale, '/tools')}`;
  // A pack may leave breadcrumbTools null; the UI dictionary already has the
  // word "Tools" in every locale, so fall back to that rather than to English.
  const toolsLabel = content.breadcrumbTools ?? getDictionary(locale).navbar.tools;

  const stepsSection = content.sections.find((s) => s.kind === 'steps');
  const faqSection = content.sections.find((s) => s.kind === 'faq');

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: content.breadcrumbHome, item: homeUrl },
      { '@type': 'ListItem', position: 2, name: toolsLabel, item: toolsUrl },
      { '@type': 'ListItem', position: 3, name: content.breadcrumbLabel, item: pageUrl },
    ],
  };

  const schemas: object[] = [breadcrumbSchema];

  if (content.jsonld.appName) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      '@id': `${pageUrl}#tool`,
      name: content.jsonld.appName,
      url: pageUrl,
      description: content.jsonld.appDescription ?? content.meta.description,
      applicationCategory: 'ProductivityApplication',
      operatingSystem: 'Any',
      isAccessibleForFree: true,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      publisher: { '@type': 'Organization', name: 'Doubly', url: SITE_URL },
      inLanguage: locale,
    });
  }

  if (content.jsonld.howToName && stepsSection && stepsSection.kind === 'steps') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      '@id': `${pageUrl}#howto`,
      name: content.jsonld.howToName,
      step: stepsSection.steps.map((s, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: stripMarkers(s.name),
        text: stripMarkers(s.text),
      })),
    });
  }

  if (faqSection && faqSection.kind === 'faq') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      inLanguage: locale,
      mainEntity: faqSection.faqs.map((f) => ({
        '@type': 'Question',
        name: stripMarkers(f.q),
        acceptedAnswer: { '@type': 'Answer', text: stripMarkers(f.a) },
      })),
    });
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <article className="mx-auto max-w-3xl px-6 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: content.breadcrumbHome, href: localizedHref(locale, '/') },
            // Href falls back to the English hub until this locale's hub is translated.
            { label: toolsLabel, href: localizedHref(locale, '/tools') },
            { label: content.breadcrumbLabel },
          ]}
        />

        <header className="mb-8">
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-charcoal mb-4 leading-tight">
            {content.h1}
          </h1>
        </header>

        {widget}

        {content.answerCapsule && (
          <div className="mt-10 rounded-2xl bg-warm/60 border border-warm-dark/30 p-6">
            <ParagraphsMd
              text={content.answerCapsule}
              locale={locale}
              className="text-base text-charcoal leading-7"
            />
          </div>
        )}

        {content.intro && (
          <ParagraphsMd
            text={content.intro}
            locale={locale}
            className="mt-6 text-base text-charcoal-light leading-7"
          />
        )}

        {content.sections.map((section, si) => (
          <section key={si}>
            <h2
              className={`mt-12 font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-charcoal ${
                section.kind === 'faq' ? 'mb-6' : 'mb-4'
              }`}
            >
              {section.heading}
            </h2>

            {section.kind === 'steps' && (
              <ol className="space-y-4">
                {section.steps.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-charcoal text-cream text-sm font-semibold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">
                        <InlineMd text={step.name} locale={locale} />
                      </h3>
                      <p className="text-base text-charcoal-light leading-7">
                        <InlineMd text={step.text} locale={locale} />
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            )}

            {section.kind === 'paragraphs' && (
              <ParagraphsMd text={section.paragraphs.join('\n\n')} locale={locale} />
            )}

            {section.kind === 'faq' && (
              <div className="space-y-6">
                {section.faqs.map((f, i) => (
                  <div key={i}>
                    <h3 className="font-semibold text-charcoal mb-2">
                      <InlineMd text={f.q} locale={locale} />
                    </h3>
                    <p className="text-base text-charcoal-light leading-7">
                      <InlineMd text={f.a} locale={locale} />
                    </p>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}

        {content.related && (
          <>
            <h2 className="mt-12 font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-charcoal mb-4">
              {content.related.heading}
            </h2>
            <p className="text-base text-charcoal-light leading-7">
              <InlineMd text={content.related.body} locale={locale} />
            </p>
          </>
        )}

        <SoftAppCTA
          headline={content.cta.headline}
          body={content.cta.body}
          ctaLabel={content.cta.label}
        />
      </article>
    </>
  );
}
