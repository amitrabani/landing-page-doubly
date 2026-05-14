import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../_components/Breadcrumbs';
import SoftAppCTA from '../../_components/SoftAppCTA';
import BrownNoisePlayer from './BrownNoisePlayer';

const SITE_URL = 'https://usedoubly.com';
const PAGE_PATH = '/tools/brown-noise';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PRIMARY_KEYWORD = 'brown noise';

export const metadata: Metadata = {
  title: 'Free Brown Noise Generator for ADHD Focus | Doubly',
  description:
    'Free brown noise generator that runs in your browser. Brown, pink, and white. No signup, no ads, sleep timer included. Built for ADHD focus.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Free Brown Noise Generator for ADHD Focus',
    description:
      'A free brown noise player with a sleep timer. Brown, pink, and white. Runs offline in your browser.',
    url: PAGE_URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Brown Noise Generator',
    description: 'Brown, pink, and white. Free, no signup, runs in your browser.',
  },
  other: {
    'apple-itunes-app': `app-id=6760469944, app-argument=${PAGE_URL}`,
  },
};

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'What is brown noise?',
    a: 'Brown noise is a deep, rumbly sound with more energy in the low frequencies, named after the random "Brownian motion" math that generates it. It sounds like a steady waterfall or heavy rain on a roof. Compared with white noise, it is darker and warmer, which most people find less harsh for long sessions.',
  },
  {
    q: 'Is this an ambient sound generator?',
    a: 'Yes. Brown noise is the most popular setting, but the same player also generates pink and white. Three ambient sounds in total, all created live in your browser with no audio files downloaded. Pick whichever one fades into the background for your brain.',
  },
  {
    q: 'Brown noise vs pink noise vs white noise, which one should I pick?',
    a: 'White noise is even across all frequencies and sounds like a TV hiss. Pink noise drops the high frequencies a little so it feels softer, like steady rainfall. Brown noise drops them even more, so it feels deep and grounding. If white noise feels harsh, try pink. If pink still feels bright, try brown. Pick what you can comfortably ignore.',
  },
  {
    q: 'Is brown noise good for ADHD focus?',
    a: 'Some ADHD adults focus better with steady background sound, and a 2007 study from Söderlund and colleagues found that moderate auditory noise actually improved cognitive performance in children with attention difficulties. The likely mechanism is masking. A steady sound covers unpredictable noises (talking, traffic, a humming fridge) so your brain stops orienting toward every new sound.',
  },
  {
    q: 'Is it safe to listen to brown noise all day?',
    a: 'Yes, at a reasonable volume. The same hearing-safety rules apply as for music. Keep the volume low enough that you can comfortably hear someone speaking at a normal voice in the same room. The CDC recommends limiting prolonged exposure above 70 dB. If your ears feel tired or ring after a session, the volume is too high.',
  },
  {
    q: 'Why is brown noise trending on TikTok?',
    a: 'ADHD adults on TikTok started posting that brown noise quieted the constant inner mental chatter, often described as "the noise in my head went away." That single observation went viral in 2022 and 2023, and a wave of people tried it. The science is preliminary, but the lived-experience reports are strong enough that it is worth trying for yourself.',
  },
  {
    q: 'Does this work offline?',
    a: 'Yes. The sound is generated in your browser using the Web Audio API, not streamed from a server. Once the page loads, no internet connection is required. Nothing is recorded, nothing is uploaded, and there are no ads or trackers in the player.',
  },
];

const HOW_TO_STEPS = [
  {
    name: 'Pick a sound',
    text: 'Brown is the deep one most people search for. If brown feels too heavy, try pink. White is the brightest and the hardest to ignore.',
  },
  {
    name: 'Hit play',
    text: 'The first tap creates the audio engine in your browser. Give it a half second on slower phones. After that, switching sounds is instant.',
  },
  {
    name: 'Find your volume',
    text: 'Low enough that you can still hear someone talking to you at a normal voice. If you have to raise your voice to be heard over it, it is too loud.',
  },
  {
    name: 'Set a sleep timer if needed',
    text: 'Pick 15, 30, 60, or 90 minutes. The sound fades out gently at the end so it does not jolt you. Leave it off if you want it running all day.',
  },
];

export default function BrownNoisePage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${PAGE_URL}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Tools', item: `${SITE_URL}/tools` },
      { '@type': 'ListItem', position: 3, name: 'Brown Noise Generator', item: PAGE_URL },
    ],
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${PAGE_URL}#tool`,
    name: 'Doubly Brown Noise Generator',
    url: PAGE_URL,
    description:
      'A free in-browser brown noise generator with pink and white. No signup, sleep timer included, works offline.',
    applicationCategory: 'LifestyleApplication',
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
    name: `How to use the ${PRIMARY_KEYWORD} generator`,
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
            { label: 'Brown Noise Generator' },
          ]}
        />

        <header className="mb-8">
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-charcoal mb-4 leading-tight">
            Free Brown Noise Generator
          </h1>
        </header>

        <BrownNoisePlayer />

        <div className="mt-10 rounded-2xl bg-warm/60 border border-warm-dark/30 p-6">
          <p className="text-base text-charcoal leading-7">
            <strong>
              Brown noise is a deep, low-frequency sound that masks distractions and gives a busy
              ADHD brain something steady to settle on.
            </strong>{' '}
            This free ambient sound generator plays brown, pink, and white right in your browser.
            No signup, no ads, no audio files to download. Pick a sound, set the volume, add a
            sleep timer if you want, and get back to work.
          </p>
        </div>

        <p className="mt-6 text-base text-charcoal-light leading-7">
          The generator above runs on the Web Audio API, so the sound is created on your device in
          real time. That means no streaming, no buffering, and it keeps working if your wifi
          drops. Try brown first. If it feels too heavy, switch to pink. Most ADHD adults land on
          brown.
        </p>

        <h2 className="mt-12 font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-charcoal mb-4">
          How to use the brown noise generator
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
          Why brown noise works for ADHD brains
        </h2>
        <p className="text-base text-charcoal-light leading-7 mb-4">
          ADHD brains tend to orient toward novel sounds. A door slamming, a phone buzz, two people
          starting a conversation behind you. Each one pulls a thread of attention away from what
          you were doing, and pulling it back costs real time and effort.
        </p>
        <p className="text-base text-charcoal-light leading-7 mb-4">
          Brown noise does not make you focus. It removes the things that keep yanking your focus
          away. A steady, predictable sound covers the unpredictable ones, so your brain stops
          firing the orienting response every few seconds.
        </p>
        <p className="text-base text-charcoal-light leading-7 mb-4">
          There is also a small but interesting research finding here. In a 2007 study,{' '}
          <a
            href="https://onlinelibrary.wiley.com/doi/10.1111/j.1469-7610.2007.01749.x"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lavender-dark underline hover:no-underline"
          >
            Söderlund, Sikström, and Smart
          </a>{' '}
          found that moderate white noise improved cognitive performance in children with attention
          difficulties, while it slightly hurt performance in neurotypical children. The proposed
          mechanism is stochastic resonance, the idea that a noisy brain may need a bit of external
          noise to land in its working range.
        </p>
        <p className="text-base text-charcoal-light leading-7">
          The science is still early, but the lived-experience reports are loud and consistent.{' '}
          <a
            href="https://chadd.org/about-adhd/overview/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lavender-dark underline hover:no-underline"
          >
            CHADD
          </a>{' '}
          and similar bodies treat sensory tools like background sound as a reasonable thing to
          try. If it helps you, that is enough.
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
          Brown noise pairs naturally with a focus timer. Try the{' '}
          <Link
            href="/tools/pomodoro"
            className="text-lavender-dark underline hover:no-underline"
          >
            ADHD pomodoro timer
          </Link>{' '}
          for structured 25-minute sprints, or the{' '}
          <Link
            href="/tools/visual-timer"
            className="text-lavender-dark underline hover:no-underline"
          >
            visual timer
          </Link>{' '}
          if you want a shrinking pie wedge that doubles as a time blindness clock. Browse the{' '}
          <Link href="/tools" className="text-lavender-dark underline hover:no-underline">
            full tools library
          </Link>{' '}
          or read the{' '}
          <Link href="/learn" className="text-lavender-dark underline hover:no-underline">
            Doubly learn library
          </Link>{' '}
          for guides on focus, brain dumping, and getting unstuck.
        </p>

        <SoftAppCTA body="Brown noise helps you settle into a task. The Doubly iOS app helps you pick the task in the first place. Brain dump, one clear next step, and accountability check-ins from real people." />
      </article>
    </>
  );
}
