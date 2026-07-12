import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../_components/Breadcrumbs';
import SoftAppCTA from '../../_components/SoftAppCTA';
import EisenhowerMatrixTool from './EisenhowerMatrixTool';

const SITE_URL = 'https://usedoubly.com';
const PAGE_PATH = '/tools/eisenhower-matrix';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PRIMARY_KEYWORD = 'eisenhower matrix online';

export const metadata: Metadata = {
  title: 'Eisenhower Matrix Online (ADHD Edition) | Doubly',
  description:
    'Free Eisenhower matrix online with ADHD-friendly quadrants like "boring but important" instead of textbook labels. Drag tasks, save locally, no signup.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Eisenhower Matrix Online (ADHD Edition)',
    description:
      'ADHD-friendly Eisenhower matrix with quadrants like "boring but important." Drag, save locally, free.',
    url: PAGE_URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eisenhower Matrix Online (ADHD Edition)',
    description: 'ADHD-friendly quadrants. Drag tasks, save in your browser, no signup.',
  },
  other: {
    'apple-itunes-app': `app-id=6760469944, app-argument=${PAGE_URL}`,
  },
};

const FAQS = [
  {
    q: 'What is the Eisenhower matrix?',
    a: 'The Eisenhower matrix is a prioritization tool that sorts tasks by two questions: is it important, and is it urgent. Four boxes come out of that, from "do it now" to "drop it." It is attributed to President Dwight Eisenhower and was popularized by Stephen Covey in The 7 Habits of Highly Effective People.',
  },
  {
    q: 'Why does this version use different labels?',
    a: 'The textbook quadrant names ("Important + Not Urgent," etc.) describe categories but rarely move ADHD brains. Names like "boring but important" and "noisy but skippable" describe how the task actually feels, which makes them easier to recognize and sort. The underlying matrix is identical.',
  },
  {
    q: 'How do I use the drag and drop?',
    a: 'On desktop, drag a task from the unsorted row into any quadrant, or between quadrants. On mobile, tap a task to select it, then tap the quadrant you want it in. You can also tap the arrow on any sorted task to send it back to unsorted.',
  },
  {
    q: 'Are my tasks saved?',
    a: 'Yes, in your browser only, via localStorage. Nothing is sent to any server, nothing is tied to an account, and clearing the list clears the storage with it.',
  },
  {
    q: 'Which quadrant should I do first if I am ADHD?',
    a: 'Most ADHD productivity advice agrees: the boring-but-important quadrant is the leverage point. The on-fire quadrant pulls attention without being asked. Boring-but-important is what tends to get postponed forever and create the next fire. Doing one boring-but-important task per day is a high-impact rhythm.',
  },
  {
    q: 'How is this different from a regular to-do app?',
    a: 'A to-do app gives you a flat list and assumes you can prioritize. The matrix forces a two-axis sort, which surfaces the items you have been quietly avoiding. It is a thinking tool more than a tracking tool, and works best for a weekly reset rather than a daily checklist.',
  },
];

const HOW_TO_STEPS = [
  {
    name: 'Dump your tasks in',
    text: 'Type tasks one at a time and hit enter, or paste a list separated by line breaks. They land in the unsorted row.',
  },
  {
    name: 'Sort each task into a quadrant',
    text: 'On desktop, drag a task into a quadrant. On mobile, tap the task to select it, then tap the quadrant. Whichever feels right is usually right.',
  },
  {
    name: 'Look at the boring-but-important pile',
    text: 'That is the one that quietly creates next week. If you only act on one quadrant today, this is the one.',
  },
  {
    name: 'Skip, drop, or schedule the rest',
    text: 'On fire goes today. Noisy can wait or be delegated. Drop is allowed to be drop. The list does not have to be done.',
  },
];

export default function EisenhowerMatrixPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${PAGE_URL}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Tools', item: `${SITE_URL}/tools` },
      { '@type': 'ListItem', position: 3, name: 'Eisenhower Matrix Online', item: PAGE_URL },
    ],
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${PAGE_URL}#tool`,
    name: 'Doubly Eisenhower Matrix (ADHD Edition)',
    url: PAGE_URL,
    description:
      'A free online Eisenhower matrix with ADHD-friendly quadrant names. Drag tasks into "on fire," "boring but important," "noisy but skippable," or "drop these." Saves locally.',
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
    name: `How to use the ${PRIMARY_KEYWORD} tool`,
    totalTime: 'PT5M',
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

      <article className="mx-auto max-w-4xl px-6 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Tools', href: '/tools' },
            { label: 'Eisenhower Matrix Online' },
          ]}
        />

        <header className="mb-8">
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-charcoal mb-4 leading-tight">
            Eisenhower matrix online, ADHD edition
          </h1>
        </header>

        <EisenhowerMatrixTool />

        <div className="mt-10 rounded-2xl bg-warm/60 border border-warm-dark/30 p-6">
          <p className="text-base text-charcoal leading-7">
            <strong>
              An Eisenhower matrix sorts tasks by importance and urgency into four quadrants so you
              can see what to do, what to schedule, what to ignore, and what to drop.
            </strong>{' '}
            This version swaps the textbook labels for ADHD-friendly ones, like &ldquo;boring but
            important.&rdquo; Drag or tap to sort. Saves in your browser.
          </p>
        </div>

        <p className="mt-6 text-base text-charcoal-light leading-7">
          The classic matrix asks two questions about each task: is it important, and is it urgent.
          ADHD brains often know the answer but freeze on the sorting. Naming the quadrants by how
          they feel, not by their categories, makes the sort instant.
        </p>

        <h2 className="mt-12 font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-charcoal mb-4">
          How to use the matrix
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
          Why ADHD framing changes the matrix
        </h2>
        <p className="text-base text-charcoal-light leading-7 mb-4">
          The Eisenhower matrix is excellent at surfacing the tasks people quietly avoid, which is
          often the most important thing a prioritization tool can do. The standard four labels
          (&ldquo;Important + Not Urgent&rdquo; and so on) are technically accurate, but they read
          like a quiz. For an ADHD brain already navigating an executive-function load, that quiz
          is one more decision before the task even starts.
        </p>
        <p className="text-base text-charcoal-light leading-7 mb-4">
          Renaming the quadrants by their emotional signature changes the activation cost. &ldquo;On
          fire&rdquo; is obvious. &ldquo;Boring but important&rdquo; is the one most people skip and
          most regret skipping (tax forms, follow-ups, the dentist appointment they have been
          rescheduling). &ldquo;Noisy but skippable&rdquo; names the things that demand attention
          without earning it. &ldquo;Drop these&rdquo; gives permission to delete, which classic
          productivity advice rarely does out loud.
        </p>
        <p className="text-base text-charcoal-light leading-7">
          Reducing the cognitive load at the prioritization step is exactly the kind of
          environmental scaffolding bodies like{' '}
          <a
            href="https://chadd.org/about-adhd/overview/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lavender-dark underline hover:no-underline"
          >
            CHADD
          </a>{' '}
          recommend for adult ADHD. The matrix is a thinking aid first, a tracking app second. Use
          it for a weekly reset, not as a permanent to-do replacement.
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
          If your head is too full to even sort, start with a{' '}
          <Link href="/tools/brain-dump" className="text-lavender-dark underline hover:no-underline">
            brain dump
          </Link>{' '}
          to externalize the chaos. If even four quadrants is too much, use{' '}
          <Link href="/tools/pick-one" className="text-lavender-dark underline hover:no-underline">
            pick one
          </Link>{' '}
          to surface a single task to start with. Once a quadrant item is chosen, split it into
          doable steps with the{' '}
          <Link href="/tools/task-splitter" className="text-lavender-dark underline hover:no-underline">
            task breakdown tool
          </Link>{' '}
          and time-box the first step with the{' '}
          <Link href="/tools/pomodoro" className="text-lavender-dark underline hover:no-underline">
            ADHD pomodoro timer
          </Link>
          . Browse the{' '}
          <Link href="/tools" className="text-lavender-dark underline hover:no-underline">
            full tools library
          </Link>
          .
        </p>

        <SoftAppCTA body="The web matrix is a weekly thinking tool. The Doubly iOS app does the next step: once you have sorted what matters, the app surfaces the one boring-but-important task to do today and uses real-people accountability check-ins so it actually happens." />
      </article>
    </>
  );
}
