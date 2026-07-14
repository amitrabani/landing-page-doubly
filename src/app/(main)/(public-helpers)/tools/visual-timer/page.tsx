import type { Metadata } from 'next';
import { buildPathAlternates } from '@/i18n/alternates';
import { localesWithPack } from '@/lib/toolsContent';
import { nonDefaultLocales } from '@/i18n/config';
import Link from 'next/link';
import Breadcrumbs from '../../_components/Breadcrumbs';
import SoftAppCTA from '../../_components/SoftAppCTA';
import VisualTimer from '../../_components/VisualTimer';

const SITE_URL = 'https://usedoubly.com';
const PAGE_PATH = '/tools/visual-timer';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_SLUG = 'visual-timer';
const PRIMARY_KEYWORD = 'visual timer online';

const PRESETS = [1, 3, 5, 10, 15, 25, 60];
const DEFAULT_MINUTES = 10;

export const metadata: Metadata = {
  title: 'Free Visual Timer + Time Blindness Clock | Doubly',
  description:
    'A free visual timer with a shrinking pie wedge so you can see time passing. Doubles as a time blindness clock for ADHD adults. No signup, works on phone or desktop.',
  alternates: buildPathAlternates('en', PAGE_PATH, localesWithPack(PAGE_SLUG, nonDefaultLocales)),
  openGraph: {
    title: 'Free Visual Timer + Time Blindness Clock',
    description:
      'A shrinking-wedge visual timer that turns abstract minutes into something you can see. Built to work as a time blindness clock for ADHD.',
    url: PAGE_URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Visual Timer + Time Blindness Clock',
    description: 'A shrinking-wedge timer that makes time visible. Free, no signup.',
  },
  other: {
    'apple-itunes-app': `app-id=6760469944, app-argument=${PAGE_URL}`,
  },
};

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'What is a visual timer?',
    a: 'A visual timer is a countdown clock that shows time as a shrinking colored shape, usually a pie wedge, instead of only as digits. You can see the remaining time at a glance, without doing the mental math of subtracting the current clock reading from the target. That makes it easier for kids, neurodivergent adults, and anyone in a hurry to feel how much time is left.',
  },
  {
    q: 'What is time blindness, and how does a visual timer help?',
    a: 'Time blindness is the difficulty of feeling how much time has passed or how much is left. It is a recognized feature of ADHD, tied to differences in executive function and working memory. A visual timer helps by externalizing time. Instead of asking your brain to track duration internally, the shrinking wedge does it for you, and your eyes read off how much is left.',
  },
  {
    q: 'Who is a visual timer good for?',
    a: 'Anyone who finds raw digital clocks hard to read at a glance. That includes pre-readers, students working on homework, adults with ADHD or autism, people in meetings that need a soft time-box, and teachers who want their class to self-pace. The shrinking wedge speaks the same way to a five-year-old and a forty-five-year-old.',
  },
  {
    q: 'How long should I set it for if I am avoiding a task?',
    a: 'Start absurdly small. Two or five minutes is often enough to break the wall of avoidance, because your brain stops protesting against finishing a task it never has to finish. Tell yourself you will stop when the wedge is gone. About half the time you will keep going, and the other half you will at least have done five minutes, which is more than zero.',
  },
  {
    q: 'How is this different from a pomodoro timer?',
    a: 'A pomodoro timer is a structured 25-and-5 routine designed for sustained work. A visual timer is a general-purpose countdown for any duration. Use the pomodoro when you want a focus method with built-in breaks. Use this one when you need to feel how long something takes, whether that is two minutes of dishes or a forty-five-minute meeting.',
  },
  {
    q: 'Is the timer accurate if I switch tabs?',
    a: 'Yes. Browsers throttle background JavaScript, so a naive timer can drift in a hidden tab. This one stores an absolute end time and re-reads the wall clock every tick, so the remaining time stays correct even after the tab has been backgrounded for hours. The tab title also updates with the countdown.',
  },
  {
    q: 'Do I need to sign up or install anything?',
    a: 'No. The whole tool runs locally in your browser. There is no account, no email gate, no popup. Your last-used duration and sound preference are saved in localStorage on your device, and nothing is sent to a server.',
  },
];

const HOW_TO_STEPS = [
  {
    name: 'Pick a duration',
    text: 'Tap a preset or enter a custom number of minutes. If a task feels huge, pick something small like two or five minutes. Your last setting is remembered for next time.',
  },
  {
    name: 'Hit Start',
    text: 'The colored wedge fills the dial and starts shrinking. You can glance at it without reading numbers.',
  },
  {
    name: 'Work, watch, or wait',
    text: 'Use it for focus sprints, kids transitions, speaking timers, meetings, or anything that needs a soft deadline. A quick glance tells you how much is left without pulling you out of the task.',
  },
  {
    name: 'Reset and reuse',
    text: 'When the wedge is gone, hit Reset to run the same duration again, or tap a different preset.',
  },
];

export default function VisualTimerPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${PAGE_URL}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Tools', item: `${SITE_URL}/tools` },
      { '@type': 'ListItem', position: 3, name: 'Visual Timer', item: PAGE_URL },
    ],
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${PAGE_URL}#tool`,
    name: 'Doubly Visual Timer',
    alternateName: 'Doubly Time Blindness Clock',
    url: PAGE_URL,
    description:
      'A free online visual timer with a shrinking pie wedge. Works as a time blindness clock for ADHD adults. Browser-based, no signup, mobile-friendly, accurate across background tabs.',
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
    totalTime: 'PT1H',
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
            { label: 'Visual Timer' },
          ]}
        />

        <header className="mb-8">
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-charcoal mb-4 leading-tight">
            Free visual timer online
          </h1>
        </header>

        <VisualTimer
          presets={PRESETS}
          defaultMinutes={DEFAULT_MINUTES}
          storageKey="doubly:visual-timer:v1"
        />

        <div className="mt-10 rounded-2xl bg-warm/60 border border-warm-dark/30 p-6">
          <p className="text-base text-charcoal leading-7">
            <strong>
              A visual timer is a countdown that shows time as a shrinking pie wedge, so you can see
              how much is left without reading digits.
            </strong>{' '}
            This free online version works in any browser, runs accurately in background tabs, and
            doubles as a time blindness clock for ADHD adults whose internal sense of time is
            unreliable. Pick a duration, hit Start, and watch the wedge disappear.
          </p>
        </div>

        <p className="mt-6 text-base text-charcoal-light leading-7">
          Digital clocks ask you to read numbers and do mental math to feel how much time is left. A
          visual timer turns that into something your eyes do automatically. Use it for focus
          sprints, study sessions, kids transitions, meetings with soft deadlines, or any moment
          where the felt sense of time matters more than the exact second count.
        </p>

        <h2 className="mt-12 font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-charcoal mb-4">
          How to use the visual timer
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
          Why a visual timer works
        </h2>
        <p className="text-base text-charcoal-light leading-7 mb-4">
          Reading a digital clock is a two-step task. First you read the digits, then you subtract
          from the target time to figure out how much is left. That subtraction lives in working
          memory, which is exactly the resource you are trying to protect when you set a timer in
          the first place. A shrinking wedge skips the subtraction. Your visual system perceives the
          change the same way it perceives a glass emptying.
        </p>
        <p className="text-base text-charcoal-light leading-7">
          This matters especially for people whose sense of time is less precise. Children, adults
          with ADHD or autism, people learning a second language, and anyone in a high-stress
          moment all benefit from an analog representation. The classroom version of this device,
          the physical Time Timer, has been used in special education for decades and is recommended
          by occupational therapists for transition support.
        </p>

        <h2 className="mt-12 font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-charcoal mb-4">
          A time blindness clock for ADHD
        </h2>
        <p className="text-base text-charcoal-light leading-7 mb-4">
          People search for this tool by two different names, and they want the same thing. A
          visual timer for general use. A time blindness clock for ADHD. The dial is identical, the
          reason it helps is the same.
        </p>
        <p className="text-base text-charcoal-light leading-7 mb-4">
          Dr Russell Barkley, one of the most cited researchers on ADHD, describes the disorder as
          fundamentally a difference in the brain systems that handle delay, self-regulation, and
          the felt sense of future time. He argues that ADHD is less a problem of attention than a
          problem of time, motivation, and self-monitoring being processed differently than they
          are in non-ADHD brains. What that means in daily life is that the future feels less real,
          deadlines arrive suddenly, and the gap between "I have plenty of time" and "I am out of
          time" is shorter than it should be.
        </p>
        <p className="text-base text-charcoal-light leading-7">
          The standard accommodation, recommended across clinical guidance, is to externalize time.
          Turn the abstract into the concrete. A shrinking wedge does this without asking anything
          of working memory. The clock is not a cure for time blindness, it is a prosthetic for
          it.{' '}
          <a
            href="https://chadd.org/about-adhd/overview/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lavender-dark underline hover:no-underline"
          >
            CHADD
          </a>
          , the national resource for ADHD, lists time-management supports and visual cues among the
          practical strategies recommended for adults.
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
          For structured 25-and-5 focus sprints with built-in breaks, try the{' '}
          <Link href="/tools/pomodoro" className="text-lavender-dark underline hover:no-underline">
            ADHD pomodoro timer
          </Link>
          . If background noise or a busy mind keeps pulling you out of the work, layer the{' '}
          <Link href="/tools/brown-noise" className="text-lavender-dark underline hover:no-underline">
            brown noise generator
          </Link>{' '}
          underneath the timer. If the problem is losing track of an entire afternoon to one task,
          the{' '}
          <Link
            href="/tools/hyperfocus-timer"
            className="text-lavender-dark underline hover:no-underline"
          >
            hyperfocus timer
          </Link>{' '}
          schedules spoken check-ins on a recurring interval. Browse the{' '}
          <Link href="/tools" className="text-lavender-dark underline hover:no-underline">
            full tools library
          </Link>{' '}
          or read the{' '}
          <Link href="/learn" className="text-lavender-dark underline hover:no-underline">
            Doubly learn library
          </Link>{' '}
          for more.
        </p>

        <SoftAppCTA body="A clock makes time visible. The Doubly iOS app makes the rest of the system visible. Brain dump the chaos, surface one clear next step, and stay accountable to real people who know what time blindness actually feels like." />
      </article>
    </>
  );
}
