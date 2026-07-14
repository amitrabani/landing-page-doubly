import Link from 'next/link';
import { tools } from '@/lib/tools';
import { getDictionary } from '@/i18n/dictionaries';
import { defaultLocale, type Locale } from '@/i18n/config';
import { toolHref, toolsHubHref } from '@/i18n/toolsManifest';

// Server-rendered so every tool link is present in the initial HTML for crawlers.
// The homepage is the most-crawled page on the site; linking each tool directly
// from here raises their crawl priority and passes link equity (helps indexation).
// Because this stays a server component it can't use the client-side useT()
// provider; the locale is passed in as a prop and the dictionary read directly.
export default function ToolsSection({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDictionary(locale);
  const live = tools.filter((tool) => tool.status === 'live');

  return (
    <section aria-labelledby="tools-heading" className="py-12 sm:py-16 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto">
          <h2
            id="tools-heading"
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-charcoal leading-tight"
          >
            {t.toolsSection.title}
          </h2>
          <p className="mt-4 text-muted text-lg leading-relaxed">{t.toolsSection.subtitle}</p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {live.map((tool) => (
            <li key={tool.slug}>
              <Link
                href={toolHref(locale, tool.slug)}
                className="group block h-full rounded-2xl bg-white/70 border border-warm-dark/30 p-5 hover:border-lavender hover:shadow-[0_4px_20px_rgba(184,169,212,0.15)] transition-all"
              >
                <div className="flex items-center gap-2">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-charcoal">
                    {t.toolCards[tool.slug].title}
                  </h3>
                  {tool.hot && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-lavender/20 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-lavender-dark">
                      <span aria-hidden="true">🔥</span> {t.toolsSection.hot}
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-sm text-charcoal-light leading-6 line-clamp-2">
                  {t.toolCards[tool.slug].description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-lavender-dark">
                  {t.toolsSection.openTool}{' '}
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center">
          <Link
            href={toolsHubHref(locale)}
            className="inline-flex items-center gap-1 text-sm font-medium text-lavender-dark hover:text-charcoal transition-colors"
          >
            {t.toolsSection.browseAll} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
