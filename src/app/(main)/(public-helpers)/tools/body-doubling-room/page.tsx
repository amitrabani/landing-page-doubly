import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../_components/Breadcrumbs';
import SoftAppCTA from '../../_components/SoftAppCTA';
import StartSessionCTA from './StartSessionCTA';

const SITE_URL = 'https://usedoubly.com';
const PAGE_PATH = '/tools/body-doubling-room';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PRIMARY_KEYWORD = 'body doubling room';

export const metadata: Metadata = {
  title: 'Free Body Doubling Room for ADHD Focus | Doubly',
  description:
    'Free two-person body doubling room with a structured intro, focus block, and wrap-up. Share a link, see each other work over peer-to-peer video. No signup, no install.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Free Body Doubling Room for ADHD Focus',
    description:
      'A free video room for two with a guided intro, silent focus block, and wrap-up. Co-work, send a wave, get unstuck together. No signup.',
    url: PAGE_URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Body Doubling Room for ADHD Focus',
    description: 'A free video room for two: state your goal, focus together, wrap up with a quick reflection.',
  },
  other: {
    'apple-itunes-app': `app-id=6760469944, app-argument=${PAGE_URL}`,
  },
};

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'What is body doubling for ADHD?',
    a: 'Body doubling is the practice of working alongside another person to make starting and staying on task easier. The other person does not have to help with the work itself. Their quiet, focused presence is what lowers the activation cost. Many ADHD adults find it the single most reliable way to start a task they have been avoiding.',
  },
  {
    q: 'How does the body doubling room work?',
    a: 'You click "Start a focus session" and get a private room link. Share that link with one other person. When they join, the room walks you through a three-step ritual: a short intro where you greet each other and say your goal out loud, a silent focus block on a shared timer, and a quick wrap-up where you share what you got done. Nothing is recorded. The room disappears when you both leave.',
  },
  {
    q: 'Why the intro and wrap-up steps?',
    a: 'Saying your goal out loud to another human is what most ADHD adults credit with getting them started. It turns vague intent into a small commitment. The wrap-up does the same trick at the other end. Naming what you finished, even briefly, makes the work feel real and makes the next session easier to start. The structure is borrowed from co-working platforms like Focusmate, where this exact pattern has driven millions of sessions.',
  },
  {
    q: 'Do I need to install anything or sign up?',
    a: 'No. The room runs entirely in your browser. There is no signup, no email, no app to install. You can join from a phone or a laptop. Camera and microphone access are both optional. If you skip them, you still appear in the room with a ghost tile.',
  },
  {
    q: 'Can I send a reaction without unmuting?',
    a: 'Yes. There are four quick-react buttons in every phase: a wave, a thumbs up, a heart, and a party popper. Tap one and a soft emoji floats up on both screens. It is the easiest way to acknowledge your partner mid-focus without breaking either of your concentration.',
  },
  {
    q: 'Can more than two people join?',
    a: 'Not in this room. Body doubling works best with two people because there is one obvious focus partner and no social dynamics to manage. If a third person opens the link, they will see a "room is full" screen and a one-click button to start their own room.',
  },
  {
    q: 'What if my partner cancels or does not show up?',
    a: 'You can still use the room solo until they arrive. The structured session waits for the partner before unlocking, but everything else, the camera preview, the invite link, the goal field, stays available. If they cannot make it, send them a new link next time. Rooms are free to start.',
  },
];

const HOW_TO_STEPS = [
  {
    name: 'Start a session and share the link',
    text: 'Click the button above. A private room link is created instantly. Send it to a friend, sibling, coworker, or anyone you want to co-work with. The link is the only thing they need.',
  },
  {
    name: 'Intro: wave hi and say your goal out loud',
    text: 'When your partner joins, you both land in a 60-second intro. Camera on, one sentence each: "In this block I am going to draft the email," "I am going to clean the kitchen." Saying it out loud is the part that makes it stick.',
  },
  {
    name: 'Focus: heads down on a shared timer',
    text: 'Either of you taps "Start focus" and the shared dial counts down. Work in silence. Mic on or mic off, both fine. Tap a wave or thumbs-up emoji any time you want to acknowledge your partner without breaking the quiet.',
  },
  {
    name: 'Wrap-up: share one win, one snag',
    text: 'When the timer hits zero a soft celebration plays and the room rolls into a short wrap-up. Tell your partner what you finished and what tripped you up. Tap "End session" when you are done.',
  },
];

export default function BodyDoublingRoomPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${PAGE_URL}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Tools', item: `${SITE_URL}/tools` },
      { '@type': 'ListItem', position: 3, name: 'Body Doubling Room', item: PAGE_URL },
    ],
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${PAGE_URL}#tool`,
    name: 'Doubly Body Doubling Room',
    url: PAGE_URL,
    description:
      'A free two-person body doubling room. Peer-to-peer video, shared timer, and shared focus goal. Built for ADHD adults.',
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
    totalTime: 'PT25M',
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
            { label: 'Body Doubling Room' },
          ]}
        />

        <header className="mb-8">
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-charcoal mb-4 leading-tight">
            Free Body Doubling Room for ADHD Adults
          </h1>
        </header>

        {/* The tool - above the fold */}
        <div className="rounded-3xl bg-warm border border-warm-dark/40 px-6 py-10 sm:px-10 sm:py-12 flex flex-col items-center gap-5 text-center">
          <p className="text-base text-charcoal-light max-w-md">
            A guided 3-step session for two. Greet your partner, focus together in silence, share a quick wrap-up. Free, in your browser.
          </p>
          <StartSessionCTA />
          <ol className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-charcoal-light">
            <li className="inline-flex items-center gap-1.5">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-lavender/30 text-charcoal font-semibold">1</span>
              Intro · say your goal
            </li>
            <li aria-hidden="true" className="text-charcoal/30">·</li>
            <li className="inline-flex items-center gap-1.5">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sage/30 text-charcoal font-semibold">2</span>
              Focus · shared timer
            </li>
            <li aria-hidden="true" className="text-charcoal/30">·</li>
            <li className="inline-flex items-center gap-1.5">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-coral/30 text-charcoal font-semibold">3</span>
              Wrap-up · share a win
            </li>
          </ol>
          <p className="text-xs text-charcoal/60">No signup. No install. Free.</p>
        </div>

        {/* Answer capsule */}
        <div className="mt-10 rounded-2xl bg-cream-dark/40 border border-warm-dark/30 p-6">
          <p className="text-base text-charcoal leading-7">
            <strong>
              A body doubling room is a small video space where two people run a short structured ritual
              together: greet, state your goal, focus in silence on a shared timer, then share a quick
              wrap-up.
            </strong>{' '}
            This free room runs in your browser, connects you peer-to-peer with one other person, walks
            you through all three steps, and disappears when you leave. Built for ADHD adults who find it
            easier to start when someone else is there.
          </p>
        </div>

        {/* Short intro */}
        <p className="mt-6 text-base text-charcoal-light leading-7">
          Body doubling is a long-standing ADHD coping strategy. The other person does not need to help.
          They do not even need to talk during the focus block. What makes it work is the small ritual
          around the silence: a partner who hears your goal, sits with you while you do it, and hears how
          it went. This room reproduces that pattern at any distance.
        </p>

        <h2 className="mt-12 font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-charcoal mb-4">
          How to use the room
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
          Starting a task is often the hardest moment for an ADHD brain. The gap between intent and
          motion can feel enormous, even for tasks the person wants to do. This activation problem is a
          documented feature of ADHD-related executive dysfunction, not a willpower issue.
        </p>
        <p className="text-base text-charcoal-light leading-7 mb-4">
          Body doubling helps because another focused person in the same space acts as an external
          regulator. The brain borrows their structure. You are accountable in a soft, low-pressure way,
          no one is judging your output, but stopping or scrolling feels socially visible. That tiny bit
          of social weight is enough to keep you on the page.
        </p>
        <p className="text-base text-charcoal-light leading-7 mb-4">
          Researchers at the ADHD-focused work of Dr. Russell Barkley and Dr. Edward Hallowell describe
          this kind of external scaffolding as one of the most reliable interventions for adults with
          ADHD. The{' '}
          <a
            href="https://chadd.org/about-adhd/overview/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lavender-dark underline hover:no-underline"
          >
            CHADD
          </a>{' '}
          knowledge base (Children and Adults with Attention-Deficit/Hyperactivity Disorder) lists
          parallel-work strategies among recommended supports for adults managing focus difficulties.
        </p>
        <p className="text-base text-charcoal-light leading-7">
          The video format matters, and so do the bookends. Audio-only co-working calls help some people,
          but the visible silent presence of another working human is what most ADHD adults respond to.
          The short intro and wrap-up at either end are a deliberate borrow from Focusmate, the
          co-working platform that has logged tens of millions of these sessions. Saying the goal out
          loud, then naming what you got done, is what turns a passive co-working window into something
          your brain actually remembers.
        </p>
        {/* Companion article link - leave commented until /learn/what-is-body-doubling exists
        <p className="mt-4 text-base text-charcoal-light leading-7">
          Want the full picture? Read the deep-dive:{' '}
          <Link href="/learn/what-is-body-doubling" className="text-lavender-dark underline hover:no-underline">
            what body doubling is and why it works for ADHD
          </Link>.
        </p>
        */}

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
          Once your session is started, pair the room with the{' '}
          <Link
            href="/tools/pomodoro"
            className="text-lavender-dark underline hover:no-underline"
          >
            ADHD pomodoro timer
          </Link>{' '}
          if you want to chain multiple focus sprints back to back. If a 25-minute block feels too long,
          drop a{' '}
          <Link
            href="/tools/visual-timer"
            className="text-lavender-dark underline hover:no-underline"
          >
            visual timer
          </Link>{' '}
          on a second screen so the wedge keeps shrinking in your peripheral vision. And if a loud room
          is making it hard to settle in, layer the{' '}
          <Link
            href="/tools/brown-noise"
            className="text-lavender-dark underline hover:no-underline"
          >
            brown noise generator
          </Link>{' '}
          underneath. The{' '}
          <Link href="/tools" className="text-lavender-dark underline hover:no-underline">
            full tools library
          </Link>{' '}
          collects everything in one place.
        </p>

        <SoftAppCTA body="The body doubling room helps you start one session. The Doubly iOS app helps you figure out what to start in the first place - brain dump, one clear next step, and accountability check-ins from real people." />
      </article>
    </>
  );
}
