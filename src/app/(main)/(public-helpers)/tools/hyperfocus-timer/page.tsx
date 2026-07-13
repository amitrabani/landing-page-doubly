import type { Metadata } from 'next';
import { buildPathAlternates } from '@/i18n/alternates';
import { localesWithPack } from '@/lib/toolsContent';
import { nonDefaultLocales } from '@/i18n/config';
import Link from 'next/link';
import Breadcrumbs from '../../_components/Breadcrumbs';
import SoftAppCTA from '../../_components/SoftAppCTA';
import HyperfocusTimer from './HyperfocusTimer';

const SITE_URL = 'https://usedoubly.com';
const PAGE_PATH = '/tools/hyperfocus-timer';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_SLUG = 'hyperfocus-timer';
const PRIMARY_KEYWORD = 'hyperfocus timer';

export const metadata: Metadata = {
  title: 'Free Hyperfocus Timer + ADHD Check-In Alarm | Doubly',
  description:
    'A free hyperfocus interrupt timer that pings you every X minutes and announces the time out loud so you do not lose six hours. No signup, runs in your browser.',
  alternates: buildPathAlternates('en', PAGE_PATH, localesWithPack(PAGE_SLUG, nonDefaultLocales)),
  openGraph: {
    title: 'Free Hyperfocus Timer + ADHD Check-In Alarm',
    description:
      'Schedule loud, spoken check-ins so a hyperfocus session does not eat your whole afternoon. Free, no signup.',
    url: PAGE_URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Hyperfocus Timer + ADHD Check-In Alarm',
    description: 'Loud, spoken check-ins on a fixed interval. Free, no signup.',
  },
  other: {
    'apple-itunes-app': `app-id=6760469944, app-argument=${PAGE_URL}`,
  },
};

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'What is a hyperfocus timer?',
    a: 'A hyperfocus timer is a recurring alarm that interrupts you on a fixed interval, usually every 20 to 45 minutes, so a deeply focused session has a built-in surface check. Instead of counting down to the end of one block, it keeps re-firing for the whole session, which is what people with ADHD-style hyperfocus actually need. The alert is loud or spoken so it cuts through tunnel vision.',
  },
  {
    q: 'How is this different from a pomodoro timer?',
    a: 'A pomodoro timer cycles between a 25-minute focus block and a 5-minute break and is built for people who struggle to start. A hyperfocus timer is built for the opposite problem: starting is fine, stopping is not. It does not force a break, it just pulls you out of the tunnel long enough to notice the time, the date, your bladder, and whether you should still be doing this.',
  },
  {
    q: 'Why does the time announcement matter?',
    a: 'During a hyperfocus episode the felt sense of time disappears. A spoken time check works where a glance at the clock does not, because the audio reaches you even when your eyes are locked on the screen. Hearing "it is 2:45 PM, you have been at this for two hours" is what breaks the spell. The chime alone is easy to dismiss.',
  },
  {
    q: 'What interval should I pick?',
    a: 'Start with 30 minutes. If you find yourself ignoring the chime or burying it, shorten to 20. If the interval is breaking flow rather than protecting you from it, try 45 or 60. The goal is the longest interval that still reliably pulls you up for air. There is no correct answer, only the one that works for your brain this week.',
  },
  {
    q: 'What is the hard stop for?',
    a: 'A session cap is a louder, different-sounding alert at a maximum total duration, defaulting to 2 hours. It catches the case where you click "still going" on every check-in and would have stayed at the desk until midnight. It is a separate signal, not a check-in, so the lizard brain cannot confuse it with the usual one.',
  },
  {
    q: 'Will the spoken announcement work on my phone?',
    a: 'It uses the browser Web Speech API, which works on modern iOS Safari, Android Chrome, and desktop browsers. On iOS the page must stay open and you may need to tap once on the page so the browser knows you allowed audio. If your phone is on silent, the chime will be muted but the spoken announcement still plays through the speaker.',
  },
  {
    q: 'Does the timer still run when the tab is in the background?',
    a: 'Yes. The interval is anchored to the wall clock, not to a JavaScript counter that browsers throttle in background tabs. The check-in fires on time even if you switched to another window. If you grant permission, a desktop notification is fired when the tab is hidden, the page title flashes, and the chime gets louder and more frequent the longer you ignore it. A screen wake lock is requested on supported devices.',
  },
  {
    q: 'Why does the check-in time vary by a minute or two each round?',
    a: 'Each interval is jittered by about ten percent on purpose. A perfectly predictable alert is the kind a hyperfocused brain learns to anticipate and dismiss before it consciously registers. A small unpredictable shift, sometimes 27 minutes, sometimes 33, defeats that pre-emptive ignore. The average over the session is still the interval you picked.',
  },
];

const HOW_TO_STEPS = [
  {
    name: 'Name the task you sat down for',
    text: 'Type one short line: "tax forms," "the script," "design review." It is optional but recommended. The spoken check-in will read it back to you, which is the single best defense against a tab-switch that turns into three hours of unrelated work.',
  },
  {
    name: 'Pick a check-in interval',
    text: '30 minutes is a sensible default. Use 20 if you tend to ignore the alert, 45 to 60 if shorter intervals shred your flow.',
  },
  {
    name: 'Set a hard stop (optional but recommended)',
    text: 'Pick a maximum total session length. The cap is a separate, louder alert that fires once, no matter how many "still going" buttons you have pressed.',
  },
  {
    name: 'Hit Start and work',
    text: 'When the check-in fires, the page chimes, optionally speaks the time and your task, and asks if you are still on it. Pick Still going, Take a break, or Stop.',
  },
];

export default function HyperfocusTimerPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${PAGE_URL}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Tools', item: `${SITE_URL}/tools` },
      { '@type': 'ListItem', position: 3, name: 'Hyperfocus Timer', item: PAGE_URL },
    ],
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${PAGE_URL}#tool`,
    name: 'Doubly Hyperfocus Interrupt Timer',
    alternateName: 'ADHD Check-In Alarm',
    url: PAGE_URL,
    description:
      'A free online hyperfocus timer with recurring spoken check-ins and an optional hard-stop cap. Built for ADHD adults who lose hours to tunnel vision.',
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
            { label: 'Hyperfocus Timer' },
          ]}
        />

        <header className="mb-8">
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-charcoal mb-4 leading-tight">
            Free hyperfocus timer
          </h1>
        </header>

        <HyperfocusTimer />

        <div className="mt-10 rounded-2xl bg-warm/60 border border-warm-dark/30 p-6">
          <p className="text-base text-charcoal leading-7">
            <strong>
              A hyperfocus timer schedules recurring check-ins, every 20 to 45 minutes by default,
              so an ADHD-style focus tunnel cannot quietly swallow six hours of your day.
            </strong>{' '}
            This free browser version chimes, optionally speaks the time and the task you wrote
            down, and asks if you are still on it. A separate hard-stop cap fires once at the
            maximum session length you set. No signup, no install, your settings stay on your
            device.
          </p>
        </div>

        <p className="mt-6 text-base text-charcoal-light leading-7">
          Hyperfocus is the under-reported half of ADHD. The half that looks productive from the
          outside, while inside the tunnel you forget to drink water, miss meetings, and resurface
          at 7pm wondering where the afternoon went. The fix is not more focus. It is a reliable
          interruption that breaks the spell long enough to choose what happens next.
        </p>

        <h2 className="mt-12 font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-charcoal mb-4">
          How to use the hyperfocus timer
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
          ADHD is often described as a deficit of attention, but researchers like Dr Russell Barkley
          frame it more accurately as a difference in self-regulation, including the regulation of
          attention itself. That means ADHD brains do not just under-attend, they also
          over-attend. Hyperfocus is what happens when a topic is novel, interesting, or stimulating
          enough that the usual switch-of-attention machinery stops firing. The tunnel narrows and
          the world outside it fades.
        </p>
        <p className="text-base text-charcoal-light leading-7 mb-4">
          From the inside, a hyperfocus session feels like flow. From the outside, missed lunches,
          unanswered messages, and a stiff back. The cost is real even when the work is good. A
          recurring, audible check-in is a low-effort way to externalize the self-monitoring that an
          ADHD brain in the tunnel cannot do for itself. It is the same principle behind a visual
          countdown for time blindness, applied to the opposite failure mode.
        </p>
        <p className="text-base text-charcoal-light leading-7">
          The reason the spoken time matters: visual signals get absorbed into the work. You can
          watch a clock and not see it. Audio lands differently, especially the sound of a sentence,
          which the language part of your brain has to parse before it can ignore.{' '}
          <a
            href="https://chadd.org/about-adhd/overview/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lavender-dark underline hover:no-underline"
          >
            CHADD
          </a>
          , the US national resource for ADHD, lists external cues and structured time supports
          among the practical strategies recommended for adults with ADHD.
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
          If the trouble is starting rather than stopping, try the{' '}
          <Link href="/tools/pomodoro" className="text-lavender-dark underline hover:no-underline">
            ADHD pomodoro timer
          </Link>{' '}
          for short, finite sprints with built-in breaks. For a single-session countdown you can
          glance at instead of read, the{' '}
          <Link href="/tools/visual-timer" className="text-lavender-dark underline hover:no-underline">
            visual timer
          </Link>{' '}
          doubles as a time blindness clock. If the background noise of the office or the inside of
          your head keeps pulling you back into the tunnel, layer the{' '}
          <Link href="/tools/brown-noise" className="text-lavender-dark underline hover:no-underline">
            brown noise generator
          </Link>{' '}
          underneath. Browse the{' '}
          <Link href="/tools" className="text-lavender-dark underline hover:no-underline">
            full tools library
          </Link>
          .
        </p>

        <SoftAppCTA body="A timer can pull you out of the tunnel. The Doubly iOS app helps you choose what to do with the next hour, brain dump the chaos, surface one clear next step, and stay accountable to real people who know what losing an afternoon feels like." />
      </article>
    </>
  );
}
