import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../_components/Breadcrumbs';
import SoftAppCTA from '../_components/SoftAppCTA';

const SITE_URL = 'https://usedoubly.com';
const PAGE_URL = `${SITE_URL}/tools`;

export const metadata: Metadata = {
  title: 'Free ADHD Tools That Help You Start | Doubly',
  description:
    'Free, no-signup tools designed for ADHD brains. Pomodoro timers, brain dumps, and more - built for the moment you need to start, not just plan.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Free ADHD Tools That Help You Start',
    description:
      'No signup. No popups. Free tools built for ADHD brains, from the team behind the Doubly app.',
    url: PAGE_URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free ADHD Tools That Help You Start',
    description: 'No signup. No popups. Free tools built for ADHD brains.',
  },
  other: {
    'apple-itunes-app': `app-id=6760469944, app-argument=${PAGE_URL}`,
  },
};

type Tool = {
  slug: string;
  title: string;
  description: string;
  status: 'live' | 'coming-soon';
};

const tools: Tool[] = [
  {
    slug: 'pomodoro',
    title: 'ADHD Pomodoro Timer',
    description:
      '25-minute work, 5-minute break - the focus method that finally fits an ADHD brain. Free, no signup, works offline.',
    status: 'live',
  },
  {
    slug: 'visual-timer',
    title: 'Visual Timer / Time Blindness Clock',
    description:
      'A shrinking pie wedge so you can see time passing instead of reading digits. Doubles as a time blindness clock for ADHD adults.',
    status: 'live',
  },
  {
    slug: 'brown-noise',
    title: 'Ambient Sound Generator',
    description:
      'Free in-browser ambient sound generator. Brown noise plus pink and white. Steady background sound to quiet a busy ADHD brain. Sleep timer included, works offline.',
    status: 'live',
  },
  {
    slug: 'body-doubling-room',
    title: 'Body Doubling Room',
    description:
      'Free two-person focus room. Share a link, work side by side over peer-to-peer video, run a shared timer. No signup, no install.',
    status: 'live',
  },
];

export default function ToolsHubPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Tools', item: PAGE_URL },
    ],
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${PAGE_URL}#page`,
    url: PAGE_URL,
    name: 'Free ADHD Tools That Help You Start',
    description:
      'A growing set of free, no-signup tools built for ADHD brains by the team behind the Doubly app.',
    isPartOf: { '@id': `${SITE_URL}#website` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Tools' }]} />

        <header className="mb-12">
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-charcoal mb-4 leading-tight">
            Free ADHD tools that help you start
          </h1>
          <p className="text-lg text-charcoal-light leading-8 max-w-2xl">
            Free, no-signup tools designed for ADHD brains. Built for the moment you’re overwhelmed,
            not for the moment you’re ready to plan. Use them in your browser. Save your progress.
            Walk away whenever.
          </p>
        </header>

        <section aria-labelledby="tools-list" className="mb-12">
          <h2 id="tools-list" className="sr-only">
            Available tools
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {tools.map((tool) => (
              <li key={tool.slug}>
                {tool.status === 'live' ? (
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="block h-full rounded-2xl bg-white border border-warm-dark/30 p-6 hover:border-lavender hover:shadow-[0_4px_20px_rgba(184,169,212,0.15)] transition-all"
                  >
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-charcoal mb-2">
                      {tool.title}
                    </h3>
                    <p className="text-sm text-charcoal-light leading-6">{tool.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-lavender-dark">
                      Open tool <span aria-hidden="true">&rarr;</span>
                    </span>
                  </Link>
                ) : (
                  <div className="h-full rounded-2xl bg-warm/50 border border-warm-dark/20 p-6 opacity-70">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-charcoal mb-2">
                      {tool.title}
                    </h3>
                    <p className="text-sm text-charcoal-light leading-6">{tool.description}</p>
                    <span className="mt-4 inline-block text-xs uppercase tracking-wider text-muted">
                      Coming soon
                    </span>
                  </div>
                )}
              </li>
            ))}
          </ul>
          {/* Hidden for now
          <p className="mt-6 text-sm text-muted">
            More tools shipping soon. In the meantime, read the{' '}
            <Link href="/learn" className="text-lavender-dark underline hover:no-underline">
              Doubly learn library
            </Link>
            .
          </p>
          */}
        </section>

        <SoftAppCTA body="The web tools help you start one task. The Doubly iOS app helps you keep going - brain dump, one clear next step, and accountability check-ins from real people." />
      </div>
    </>
  );
}
