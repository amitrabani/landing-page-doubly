import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../_components/Breadcrumbs';
import SoftAppCTA from '../../_components/SoftAppCTA';
import PickOneTool from './PickOneTool';

const SITE_URL = 'https://usedoubly.com';
const PAGE_PATH = '/tools/pick-one';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PRIMARY_KEYWORD = 'pick one task tool';

export const metadata: Metadata = {
  title: 'Pick One: Random Task Picker for Overwhelm | Doubly',
  description:
    'Paste a messy to-do list, get one thing to start with. Smallest, scariest, or random. Free, no signup, built for ADHD brains.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Pick One: Random Task Picker for Overwhelm',
    description:
      'Paste a messy to-do list, get one thing to start with. Smallest, scariest, or random.',
    url: PAGE_URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pick One: A Task Picker for Overwhelm',
    description: 'Paste a messy list, get one thing to start with.',
  },
  other: {
    'apple-itunes-app': `app-id=6760469944, app-argument=${PAGE_URL}`,
  },
};

const FAQS = [
  {
    q: 'How does the pick one tool decide which task to choose?',
    a: 'You pick the mode. Smallest grabs the shortest item, the easiest to start. Scariest picks the one most likely to be heavy (long, or mentioning things like taxes, doctors, or replies you owe). Just pick one is plain random. Nothing leaves your browser.',
  },
  {
    q: 'Why would I want a tool to choose for me?',
    a: 'Decision fatigue is real. Choosing what to start when overwhelmed costs more energy than the task itself. Offloading the choice to a tool lets you skip the spin and start moving. You can always override the pick.',
  },
  {
    q: 'Is this useful for ADHD?',
    a: 'Yes. ADHD brains often stall at the choosing step, not the doing step. Removing the choice and being told "start with this one" bypasses a common stuck point. It is the same logic behind the "one next step" pattern.',
  },
  {
    q: 'Does it save my list?',
    a: 'Your list stays in your browser via localStorage. Nothing is sent to any server. Clear the field and the storage clears with it. There is no account.',
  },
  {
    q: 'What is the difference between Smallest and Scariest?',
    a: 'Smallest is about momentum. Knock out a tiny win, then ride the wave. Scariest is about relief. Get the heavy thing off your back so the rest of the list feels lighter. Both are valid, use whichever you need today.',
  },
];

const HOW_TO_STEPS = [
  {
    name: 'Paste your list',
    text: 'One per line, or messy with commas, or copy-pasted from a notes app. The tool figures it out.',
  },
  {
    name: 'Choose a mode',
    text: 'Smallest for momentum, Scariest for relief, Just pick one for full surrender.',
  },
  {
    name: 'Tap Pick one for me',
    text: 'You get one item, big and clear, with a one-line reason. That is the one.',
  },
  {
    name: 'Did it, or not this one',
    text: 'Mark it done and get the next pick, or skip and get a different one. No judgment either way.',
  },
];

export default function PickOnePage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${PAGE_URL}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Tools', item: `${SITE_URL}/tools` },
      { '@type': 'ListItem', position: 3, name: 'Pick One Task Tool', item: PAGE_URL },
    ],
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${PAGE_URL}#tool`,
    name: 'Doubly Pick One Task Tool',
    url: PAGE_URL,
    description:
      'A free online task picker. Paste a messy to-do list, the tool picks one thing to start with based on smallest, scariest, or random. Built for ADHD brains.',
    applicationCategory: 'ProductivityApplication',
    operatingSystem: 'Any',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    publisher: { '@type': 'Organization', name: 'Doubly', url: SITE_URL },
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${PAGE_URL}#howto`,
    name: `How to use the ${PRIMARY_KEYWORD}`,
    totalTime: 'PT1M',
    step: HOW_TO_STEPS.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${PAGE_URL}#faq`,
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="mx-auto max-w-3xl px-6 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Tools', href: '/tools' },
            { label: 'Pick One Task Tool' },
          ]}
        />

        <header className="mb-8">
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-charcoal mb-4 leading-tight">
            Pick one. Just one.
          </h1>
        </header>

        <PickOneTool />

        <div className="mt-10 rounded-2xl bg-warm/60 border border-warm-dark/30 p-6">
          <p className="text-base text-charcoal leading-7">
            <strong>
              A pick one task tool removes the choosing step. Paste your list, choose a mode
              (smallest, scariest, random), and get one thing to start with.
            </strong>{' '}
            It is built for the moment a list of ten tasks reads as one giant unstartable thing.
            Nothing is saved on our server.
          </p>
        </div>

        <p className="mt-6 text-base text-charcoal-light leading-7">
          When the whole list feels impossible, the bottleneck is rarely the doing. It is the
          deciding. Pick one strips the decision out and hands you a starting point. You can
          always pick again.
        </p>

        <h2 className="mt-12 font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-charcoal mb-4">
          How to use the pick one tool
        </h2>
        <ol className="space-y-4">
          {HOW_TO_STEPS.map((step, i) => (
            <li key={step.name} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-charcoal text-cream text-sm font-semibold flex items-center justify-center">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold text-charcoal mb-1">{step.name}</h3>
                <p className="text-base text-charcoal-light leading-7">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="mt-12 font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-charcoal mb-4">
          Why this works for ADHD brains
        </h2>
        <p className="text-base text-charcoal-light leading-7 mb-4">
          ADHD adults frequently describe being stuck not because a task is hard, but because every
          option looks equally available and none demands attention. Researchers call this an
          executive-function bottleneck around prioritization and initiation, not a motivation
          failure.
        </p>
        <p className="text-base text-charcoal-light leading-7 mb-4">
          The barrier is the choice itself. Behavioral economists describe this as choice overload:
          more options, slower decisions, more avoidance. For an ADHD brain that already pays an
          initiation tax on every task, the cost compounds. Offloading the pick lets you skip the
          decision and start moving.
        </p>
        <p className="text-base text-charcoal-light leading-7">
          Organizations like{' '}
          <a
            href="https://chadd.org/about-adhd/overview/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lavender-dark underline hover:no-underline"
          >
            CHADD
          </a>{' '}
          recommend reducing choice points as a core ADHD-friendly strategy. The smallest mode
          leans on momentum (a tiny win sparks the next one). The scariest mode leans on relief
          (the heavy thing gone makes the rest feel lighter). The random mode leans on surrender
          (any choice beats no choice).
        </p>

        <h2 className="mt-12 font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-charcoal mb-6">
          Frequently asked questions
        </h2>
        <div className="space-y-6">
          {FAQS.map((f) => (
            <div key={f.q}>
              <h3 className="font-semibold text-charcoal mb-2">{f.q}</h3>
              <p className="text-base text-charcoal-light leading-7">{f.a}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-charcoal mb-4">
          Related tools
        </h2>
        <p className="text-base text-charcoal-light leading-7">
          If the list still feels too long after picking one, run a{' '}
          <Link href="/tools/brain-dump" className="text-lavender-dark underline hover:no-underline">
            brain dump
          </Link>{' '}
          first to clear the mental clutter. To sort the list by importance and urgency instead of
          picking blindly, open the{' '}
          <Link href="/tools/eisenhower-matrix" className="text-lavender-dark underline hover:no-underline">
            ADHD Eisenhower matrix
          </Link>
          . Got the pick? Split it into doable steps with the{' '}
          <Link href="/tools/task-splitter" className="text-lavender-dark underline hover:no-underline">
            task breakdown tool
          </Link>
          , then time-box the first step with the{' '}
          <Link href="/tools/pomodoro" className="text-lavender-dark underline hover:no-underline">
            ADHD pomodoro timer
          </Link>
          . Browse the{' '}
          <Link href="/tools" className="text-lavender-dark underline hover:no-underline">
            full tools library
          </Link>
          .
        </p>

        <SoftAppCTA body="The web tool picks one task from a pasted list. The Doubly iOS app remembers every list you ever dumped, surfaces the one task you should do next based on context and history, and uses real-people accountability check-ins so the chosen task actually happens." />
      </article>
    </>
  );
}
