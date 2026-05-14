import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../_components/Breadcrumbs';
import SoftAppCTA from '../../_components/SoftAppCTA';
import PomodoroTimer from './PomodoroTimer';

const SITE_URL = 'https://usedoubly.com';
const PAGE_PATH = '/tools/pomodoro';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PRIMARY_KEYWORD = 'ADHD pomodoro timer';

export const metadata: Metadata = {
  title: 'Free ADHD Pomodoro Timer - Focus in Sprints | Doubly',
  description:
    'Free pomodoro timer built for ADHD brains. 25-minute focus sprints, 5-minute breaks, no signup. Saves your progress in your browser.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Free ADHD Pomodoro Timer - Focus in Sprints',
    description:
      'A pomodoro timer that fits how an ADHD brain actually works. Free, no signup, runs in your browser.',
    url: PAGE_URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free ADHD Pomodoro Timer',
    description:
      'A pomodoro timer that fits how an ADHD brain actually works. Free, no signup.',
  },
  other: {
    'apple-itunes-app': `app-id=6760469944, app-argument=${PAGE_URL}`,
  },
};

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'Why is the pomodoro technique helpful for ADHD?',
    a: 'It externalizes time. ADHD brains often struggle with time-blindness - the felt sense that a task will take forever, or no time at all. A visible 25-minute sprint turns that abstract dread into a finite, walkable distance. The break is built in, so you stop spiraling on whether you can take one.',
  },
  {
    q: 'Is 25 minutes the right length for ADHD?',
    a: 'For some yes, for others no. Many ADHD adults do better with shorter sprints (10–15 minutes) when initiation is hard, and longer ones (35–50 minutes) once they hit flow. Use the customize button below the timer to set your own. The official Pomodoro Technique uses 25/5, but the principle - work, then break - is what matters.',
  },
  {
    q: 'Do I need to install anything or sign up?',
    a: 'No. The timer runs entirely in your browser. Your progress (completed sessions and custom durations) is saved locally on your device. Nothing leaves your computer or phone. No account, no email.',
  },
  {
    q: 'Will the timer keep running if I switch tabs?',
    a: 'Yes. The timer is based on the actual time of day, not on a script that pauses when the tab is in the background. The browser tab title also updates with the remaining time so you can glance at it while working in another window.',
  },
  {
    q: 'What happens after four pomodoros?',
    a: 'You earn a long break - 15 minutes by default instead of 5. This longer rest is part of the standard Pomodoro Technique and gives your brain a real recovery window before the next focus block.',
  },
];

const HOW_TO_STEPS = [
  {
    name: 'Pick one task',
    text: 'Just one. If you have a list, look at it, pick the smallest thing you can start now, and put the list away.',
  },
  {
    name: 'Hit Start',
    text: 'A 25-minute focus sprint begins. Don’t worry about finishing the whole task - just work until the timer rings.',
  },
  {
    name: 'Take the 5-minute break',
    text: 'Stand up. Drink water. Don’t open social media. The break is part of the technique, not a reward you can skip.',
  },
  {
    name: 'After 4 sprints, take a long break',
    text: 'A 15-minute rest. This is when most ADHD brains actually consolidate what they just worked on.',
  },
];

export default function PomodoroPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${PAGE_URL}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Tools', item: `${SITE_URL}/tools` },
      { '@type': 'ListItem', position: 3, name: 'ADHD Pomodoro Timer', item: PAGE_URL },
    ],
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${PAGE_URL}#tool`,
    name: 'Doubly ADHD Pomodoro Timer',
    url: PAGE_URL,
    description:
      'A free pomodoro timer built for ADHD brains. Customizable focus and break durations, browser-based, no signup.',
    applicationCategory: 'ProductivityApplication',
    operatingSystem: 'Any',
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    publisher: { '@type': 'Organization', name: 'Doubly', url: SITE_URL },
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${PAGE_URL}#howto`,
    name: `How to use the ${PRIMARY_KEYWORD}`,
    totalTime: 'PT2H',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="mx-auto max-w-3xl px-6 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Tools', href: '/tools' },
            { label: 'ADHD Pomodoro Timer' },
          ]}
        />

        <header className="mb-8">
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-charcoal mb-4 leading-tight">
            Free ADHD Pomodoro Timer
          </h1>
        </header>

        {/* The tool - above the fold */}
        <PomodoroTimer />

        {/* Answer capsule */}
        <div className="mt-10 rounded-2xl bg-warm/60 border border-warm-dark/30 p-6">
          <p className="text-base text-charcoal leading-7">
            <strong>An ADHD pomodoro timer breaks work into short, finite sprints - 25 minutes of focus,
            then a 5-minute break - so a stuck or overwhelmed brain has a clear, doable place to start.</strong>{' '}
            This free timer runs in your browser, saves progress locally, and lets you customize the sprint
            length so it fits your brain. Pick one task, hit Start, and stop when it rings.
          </p>
        </div>

        {/* Short intro */}
        <p className="mt-6 text-base text-charcoal-light leading-7">
          The Pomodoro Technique is a focus method built around timed work intervals. For ADHD adults, it
          works because it makes time visible: a 25-minute sprint turns “I have to do this huge thing”
          into “I just have to work until the timer rings.” The break is part of the deal, not
          something you have to earn.
        </p>

        <h2 className="mt-12 font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-charcoal mb-4">
          How to use the timer
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
          ADHD adults experience <strong>time-blindness</strong>: the gap between “now” and
          “not now” is felt more sharply than the analog distance between, say, “in 25 minutes”
          and “in 4 hours.” Researchers Russell Barkley and others have documented this as a
          core feature of executive-function differences in ADHD, not a moral failing.
        </p>
        <p className="text-base text-charcoal-light leading-7 mb-4">
          A pomodoro timer fixes that gap by making time concrete. You can <em>see</em> the 25 minutes
          shrinking. The task isn’t infinite anymore - it’s the length of one sprint. That
          shift, from abstract to finite, is what makes starting feel possible.
        </p>
        <p className="text-base text-charcoal-light leading-7">
          The forced breaks matter too. Many ADHD adults push through until burnout because they don’t
          trust their own ability to come back. A timer with a built-in break gives you permission to stop
          before you crash.{' '}
          <a
            href="https://chadd.org/about-adhd/overview/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lavender-dark underline hover:no-underline"
          >
            CHADD
          </a>{' '}
          (Children and Adults with Attention-Deficit/Hyperactivity Disorder) and similar bodies recommend
          structured intervals as a practical tool for managing ADHD-related focus difficulties.
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
          If a 25-minute sprint feels long, try the{' '}
          <Link
            href="/tools/visual-timer"
            className="text-lavender-dark underline hover:no-underline"
          >
            visual timer
          </Link>
          . Same shrinking-wedge dial, any duration you want, and it doubles as a time blindness
          clock if losing track of time is the deeper issue. Pair the timer with the{' '}
          <Link
            href="/tools/brown-noise"
            className="text-lavender-dark underline hover:no-underline"
          >
            brown noise generator
          </Link>{' '}
          if office noise or a busy mind keeps pulling you out of the sprint. Browse the{' '}
          <Link href="/tools" className="text-lavender-dark underline hover:no-underline">
            full tools library
          </Link>{' '}
          or read the{' '}
          <Link href="/learn" className="text-lavender-dark underline hover:no-underline">
            Doubly learn library
          </Link>{' '}
          for guides on focus, brain dumping, and getting unstuck.
        </p>

        <SoftAppCTA body="The web timer keeps you focused for one sprint. The Doubly iOS app helps you decide what to focus on in the first place - brain dump, one clear next step, and accountability check-ins from real people." />
      </article>
    </>
  );
}
