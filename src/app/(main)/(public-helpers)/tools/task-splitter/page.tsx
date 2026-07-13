import type { Metadata } from 'next';
import { buildPathAlternates } from '@/i18n/alternates';
import { localesWithPack } from '@/lib/toolsContent';
import { nonDefaultLocales } from '@/i18n/config';
import Link from 'next/link';
import Breadcrumbs from '../../_components/Breadcrumbs';
import SoftAppCTA from '../../_components/SoftAppCTA';
import TaskSplitterTool from './TaskSplitterTool';

const SITE_URL = 'https://usedoubly.com';
const PAGE_PATH = '/tools/task-splitter';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_SLUG = 'task-splitter';
const PRIMARY_KEYWORD = 'task breakdown tool';

export const metadata: Metadata = {
  title: 'Free Task Breakdown Tool - Break Down Any Task | Doubly',
  description:
    'Type a task you cannot start. Free AI tool breaks it into small, doable steps with time estimates. No signup, built for ADHD brains.',
  alternates: buildPathAlternates('en', PAGE_PATH, localesWithPack(PAGE_SLUG, nonDefaultLocales)),
  openGraph: {
    title: 'Free Task Breakdown Tool - Break Down Any Task',
    description:
      'Type a task you cannot start. Free AI tool breaks it into small, doable steps with time estimates. No signup.',
    url: PAGE_URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Task Breakdown Tool',
    description:
      'Type a task you cannot start. AI splits it into small, doable steps with time estimates.',
  },
  other: {
    'apple-itunes-app': `app-id=6760469944, app-argument=${PAGE_URL}`,
  },
};

const FAQS = [
  {
    q: 'How do I break down a task that feels too big?',
    a: 'Type the task as one short sentence ("clean the garage", "write the report") and let the tool split it. Each step is short enough to start without thinking. Pick the first one and do it. Don\'t plan past that.',
  },
  {
    q: 'Why is breaking a task into steps so helpful for ADHD?',
    a: 'ADHD brains under-produce dopamine for tasks the brain reads as "too big to finish." A small, finite step is the brain\'s preferred unit of work. Research from Russell Barkley and others links this to executive-function differences in task initiation, not laziness.',
  },
  {
    q: 'Does the tool save my tasks?',
    a: 'No. Nothing leaves your browser except the task you type, which is sent to our AI to break it down and then discarded. No account, no email, no history. Refresh the page and it is gone.',
  },
  {
    q: 'How long should each sub-step be?',
    a: 'The tool aims for steps that take a few minutes each. If a step still feels too big, paste that step back in as a fresh task and split it again. There is no rule against splitting a split.',
  },
  {
    q: 'What if the steps are not quite right?',
    a: 'They are a starting point, not a contract. Ignore steps that do not apply, reorder them in your head, and stop when the task is done. The point is to get unstuck, not to follow a perfect plan.',
  },
];

const HOW_TO_STEPS = [
  {
    name: 'Type the task',
    text: 'One sentence. "Clean the kitchen." "Reply to inbox." "Write the report." Don\'t add context or excuses, just the verb and the thing.',
  },
  {
    name: 'Hit Break it down',
    text: 'The AI returns a short list of steps with time estimates. Each step is a few minutes - small enough to start without thinking.',
  },
  {
    name: 'Do step one',
    text: 'Just step one. Don\'t read ahead. Tick it off. Then step two. Momentum will do the rest.',
  },
  {
    name: 'Stop when stuck',
    text: 'If a step still feels too big, paste it back into the tool and split it again. You can split a split.',
  },
];

export default function TaskSplitterPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${PAGE_URL}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Tools', item: `${SITE_URL}/tools` },
      { '@type': 'ListItem', position: 3, name: 'Task Breakdown Tool', item: PAGE_URL },
    ],
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${PAGE_URL}#tool`,
    name: 'Doubly Task Breakdown Tool',
    url: PAGE_URL,
    description:
      'A free AI-powered task breakdown tool. Type any task you cannot start, get back small, doable steps with time estimates. Built for ADHD brains.',
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
    totalTime: 'PT2M',
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
            { label: 'Task Breakdown Tool' },
          ]}
        />

        <header className="mb-8">
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-charcoal mb-4 leading-tight">
            Free task breakdown tool
          </h1>
        </header>

        <TaskSplitterTool />

        <div className="mt-10 rounded-2xl bg-warm/60 border border-warm-dark/30 p-6">
          <p className="text-base text-charcoal leading-7">
            <strong>
              A task breakdown tool turns one task that feels too big into a short list of small,
              doable steps so an overwhelmed brain has a clear place to start.
            </strong>{' '}
            Type a task above. The tool returns ordered sub-steps with time estimates. Built for
            ADHD brains, free, no signup. Refresh the page and your input is gone.
          </p>
        </div>

        <p className="mt-6 text-base text-charcoal-light leading-7">
          Most productivity tools assume you can plan. This one assumes you cannot start. Type
          the task that has been sitting on your list for a week and let the AI cut it into the
          smallest version of itself. Then do one step.
        </p>

        <h2 className="mt-12 font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-charcoal mb-4">
          How to break down a task
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
          Task initiation, the act of starting something, is one of the executive functions most
          affected by ADHD. The brain reads a vague, multi-step task as a single overwhelming
          unit and freezes. Researchers like Russell Barkley describe this as a deficit in the
          internal representation of time and effort, not a willpower problem.
        </p>
        <p className="text-base text-charcoal-light leading-7 mb-4">
          A small, concrete step does the opposite. &ldquo;Walk to the kitchen&rdquo; or
          &ldquo;open the file&rdquo; takes the activation energy from impossible to manageable.
          The smaller the first step, the higher the chance the brain will accept it. That is the
          whole game.
        </p>
        <p className="text-base text-charcoal-light leading-7">
          Bodies like{' '}
          <a
            href="https://chadd.org/about-adhd/overview/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lavender-dark underline hover:no-underline"
          >
            CHADD
          </a>{' '}
          recommend breaking large tasks into small steps as a core ADHD-friendly strategy.
          Doubly does that mechanically, in two seconds, so you don&rsquo;t have to plan it
          before you can start.
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
          If your head is full of more than one task, start with the{' '}
          <Link href="/tools/brain-dump" className="text-lavender-dark underline hover:no-underline">
            brain dump tool
          </Link>{' '}
          and let the AI pull the actionable items out first, or sort the whole list with the{' '}
          <Link href="/tools/eisenhower-matrix" className="text-lavender-dark underline hover:no-underline">
            ADHD Eisenhower matrix
          </Link>{' '}
          and run{' '}
          <Link href="/tools/pick-one" className="text-lavender-dark underline hover:no-underline">
            pick one
          </Link>{' '}
          to surface a starting task. Once you have a step list here,
          time-box the first one with the{' '}
          <Link href="/tools/pomodoro" className="text-lavender-dark underline hover:no-underline">
            ADHD pomodoro timer
          </Link>{' '}
          or the{' '}
          <Link href="/tools/visual-timer" className="text-lavender-dark underline hover:no-underline">
            visual timer
          </Link>{' '}
          so you can see the work shrinking. If starting alone is the hard part, open a{' '}
          <Link href="/tools/body-doubling-room" className="text-lavender-dark underline hover:no-underline">
            body doubling room
          </Link>{' '}
          with a friend. Browse the{' '}
          <Link href="/tools" className="text-lavender-dark underline hover:no-underline">
            full tools library
          </Link>
          .
        </p>

        <SoftAppCTA body="The web tool breaks down one task at a time. The Doubly iOS app stores your breakdowns, surfaces the next step automatically, and uses accountability check-ins from real people to keep you moving." />
      </article>
    </>
  );
}
