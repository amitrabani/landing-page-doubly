import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../_components/Breadcrumbs';
import SoftAppCTA from '../_components/SoftAppCTA';

const SITE_URL = 'https://usedoubly.com';
const PAGE_URL = `${SITE_URL}/learn`;

export const metadata: Metadata = {
  title: 'Learn — ADHD Focus, Tools & Strategies | Doubly',
  description:
    'Plain-language guides on ADHD focus, time-blindness, brain dumping, and getting unstuck. Honest, evidence-based, no shame.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Learn — ADHD Focus, Tools & Strategies',
    description: 'Plain-language guides on ADHD focus, time-blindness, and getting unstuck.',
    url: PAGE_URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learn — ADHD Focus, Tools & Strategies',
    description: 'Plain-language guides on ADHD focus, time-blindness, and getting unstuck.',
  },
  other: {
    'apple-itunes-app': `app-id=6760469944, app-argument=${PAGE_URL}`,
  },
};

export default function LearnHubPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Learn', item: PAGE_URL },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Learn' }]} />

        <header className="mb-10">
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-charcoal mb-4 leading-tight">
            Learn
          </h1>
          <p className="text-lg text-charcoal-light leading-8 max-w-2xl">
            Plain-language guides on how an ADHD brain handles focus, time, and follow-through. Written
            with real people in mind, not algorithms. Evidence-based, no shame, no clinical claims.
          </p>
        </header>

        <section
          aria-labelledby="coming-soon"
          className="rounded-2xl border border-warm-dark/30 bg-warm/40 p-8 text-center"
        >
          <h2
            id="coming-soon"
            className="font-[family-name:var(--font-display)] text-2xl font-semibold text-charcoal mb-2"
          >
            First articles ship next week
          </h2>
          <p className="text-base text-charcoal-light leading-7 max-w-xl mx-auto">
            We&rsquo;re writing the first batch now — covering time-blindness, the science of brain dumping,
            and why traditional productivity advice keeps failing ADHD adults.
          </p>
          <p className="mt-6 text-sm text-muted">
            In the meantime, try the{' '}
            <Link href="/tools/pomodoro" className="text-lavender-dark underline hover:no-underline">
              free ADHD pomodoro timer
            </Link>{' '}
            or browse the{' '}
            <Link href="/tools" className="text-lavender-dark underline hover:no-underline">
              full tools library
            </Link>
            .
          </p>
        </section>

        <SoftAppCTA body="The Doubly iOS app helps you start, not just plan. Brain dump the chaos, get one clear next step, and stay accountable to real people who care about your progress." />
      </div>
    </>
  );
}
