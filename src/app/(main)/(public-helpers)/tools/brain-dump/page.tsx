import type { Metadata } from 'next';
import { buildPathAlternates } from '@/i18n/alternates';
import { localesWithPack } from '@/lib/toolsContent';
import { nonDefaultLocales } from '@/i18n/config';
import Link from 'next/link';
import Breadcrumbs from '../../_components/Breadcrumbs';
import SoftAppCTA from '../../_components/SoftAppCTA';
import BrainDumpTool from './BrainDumpTool';

const SITE_URL = 'https://usedoubly.com';
const PAGE_PATH = '/tools/brain-dump';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_SLUG = 'brain-dump';
const PRIMARY_KEYWORD = 'brain dump tool';

export const metadata: Metadata = {
  title: 'Free Brain Dump Tool Online - Clear Your Head | Doubly',
  description:
    'Free brain dump tool online. Dump everything on your mind, AI pulls out the actionable tasks and drops the rest. No signup. Built for ADHD brains.',
  alternates: buildPathAlternates('en', PAGE_PATH, localesWithPack(PAGE_SLUG, nonDefaultLocales)),
  openGraph: {
    title: 'Free Brain Dump Tool Online - Clear Your Head',
    description:
      'Dump everything on your mind, AI pulls out the actionable tasks. Free, no signup.',
    url: PAGE_URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Brain Dump Tool Online',
    description: 'Dump everything on your mind, AI pulls out the actionable tasks.',
  },
  other: {
    'apple-itunes-app': `app-id=6760469944, app-argument=${PAGE_URL}`,
  },
};

const FAQS = [
  {
    q: 'What is a brain dump?',
    a: 'A brain dump is the act of writing out everything in your head onto one page, without sorting or judging it, to clear working memory. The point is not to organize, it is to externalize. Once the thoughts are out, you can decide what to do with them.',
  },
  {
    q: 'How is this different from a regular notes app?',
    a: 'A notes app gives you a blank page. This tool reads what you dumped and pulls out only the concrete, actionable tasks, ignoring emotions, observations, and venting. You get a short to-do list without writing one yourself.',
  },
  {
    q: 'Is my brain dump private?',
    a: 'Yes. Your text is sent to our AI to extract tasks and is then discarded. Nothing is stored against your identity, nothing leaves your browser besides the request itself, and there is no account.',
  },
  {
    q: 'Why is brain dumping useful for ADHD?',
    a: 'ADHD adults often have working memory loaded with half-finished thoughts. That mental clutter is its own kind of overwhelm. Getting the contents out, even messily, frees up cognitive space and makes the actionable items visible enough to act on.',
  },
  {
    q: 'How often should I brain dump?',
    a: 'Whenever your head feels full and your hands feel stuck. Some people do it once a week, some do it every morning, some only when overwhelmed. There is no rule. The signal is internal: if it would help, do it.',
  },
];

const HOW_TO_STEPS = [
  {
    name: 'Type everything in your head',
    text: 'No structure, no editing. Tasks, worries, half-thoughts, complaints, ideas. Get it out of your head and onto the page.',
  },
  {
    name: 'Hit Pull out the tasks',
    text: 'The AI reads the dump, ignores the emotions and venting, and returns only the actionable items as a short list.',
  },
  {
    name: 'Pick one',
    text: 'Just one. The smallest one. Tick it off when it is done.',
  },
  {
    name: 'Come back when you need to',
    text: 'Tomorrow morning, or in an hour, or in a week. The tool is here whenever your head is too full to act.',
  },
];

export default function BrainDumpPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${PAGE_URL}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Tools', item: `${SITE_URL}/tools` },
      { '@type': 'ListItem', position: 3, name: 'Brain Dump Tool', item: PAGE_URL },
    ],
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${PAGE_URL}#tool`,
    name: 'Doubly Brain Dump Tool',
    url: PAGE_URL,
    description:
      'A free online brain dump tool. Type everything in your head, AI extracts the actionable tasks. Built for ADHD brains.',
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

      <article className="mx-auto max-w-3xl px-6 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Tools', href: '/tools' },
            { label: 'Brain Dump Tool' },
          ]}
        />

        <header className="mb-8">
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-charcoal mb-4 leading-tight">
            Free brain dump tool
          </h1>
        </header>

        <BrainDumpTool />

        <div className="mt-10 rounded-2xl bg-warm/60 border border-warm-dark/30 p-6">
          <p className="text-base text-charcoal leading-7">
            <strong>
              A brain dump tool lets you offload everything in your head in one place, then
              pulls out only the actionable tasks so you can do something instead of just
              spinning.
            </strong>{' '}
            Type freely above. The tool reads the dump, ignores emotions and venting, and returns
            a short to-do list. Free, no signup, nothing stored.
          </p>
        </div>

        <p className="mt-6 text-base text-charcoal-light leading-7">
          The mental loop of &ldquo;there is too much, I cannot start, but there is too much&rdquo;
          is the brain dump&rsquo;s job to break. You write to empty the head, not to plan. The
          plan falls out the other side as a list you can act on.
        </p>

        <h2 className="mt-12 font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-charcoal mb-4">
          How to brain dump online
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
          Why brain dumps work for ADHD brains
        </h2>
        <p className="text-base text-charcoal-light leading-7 mb-4">
          ADHD adults tend to carry more in working memory than the brain is built to hold. Open
          loops, half-thought tasks, things they meant to say, things they almost forgot.
          Researchers describe this as a working-memory load problem, not a focus failure. The
          brain is busy, just not with what you want it to be busy with.
        </p>
        <p className="text-base text-charcoal-light leading-7 mb-4">
          Externalizing those thoughts onto a page reduces the load. David Allen&rsquo;s
          &ldquo;Getting Things Done&rdquo; calls this an open-loop capture. Once an item is on
          paper, the brain stops re-running it. For ADHD specifically, this can be the difference
          between paralyzed and able to start.
        </p>
        <p className="text-base text-charcoal-light leading-7">
          What the tool adds is the second step: pulling only the actionable items back out so
          you don&rsquo;t have to re-read the dump and decide what counted. Bodies like{' '}
          <a
            href="https://chadd.org/about-adhd/overview/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lavender-dark underline hover:no-underline"
          >
            CHADD
          </a>{' '}
          recommend externalizing thoughts as a core ADHD-friendly strategy.
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
          Once you have a task list, use{' '}
          <Link href="/tools/pick-one" className="text-lavender-dark underline hover:no-underline">
            pick one
          </Link>{' '}
          to surface a single starting task, or sort the whole list with the{' '}
          <Link href="/tools/eisenhower-matrix" className="text-lavender-dark underline hover:no-underline">
            ADHD Eisenhower matrix
          </Link>
          . Send the scariest one through the{' '}
          <Link href="/tools/task-splitter" className="text-lavender-dark underline hover:no-underline">
            task breakdown tool
          </Link>{' '}
          to split it into small steps. Time-box the first step with the{' '}
          <Link href="/tools/pomodoro" className="text-lavender-dark underline hover:no-underline">
            ADHD pomodoro timer
          </Link>{' '}
          or the{' '}
          <Link href="/tools/visual-timer" className="text-lavender-dark underline hover:no-underline">
            visual timer
          </Link>
          . If starting alone is the hard part, open a{' '}
          <Link href="/tools/body-doubling-room" className="text-lavender-dark underline hover:no-underline">
            body doubling room
          </Link>{' '}
          and work next to someone. Browse the{' '}
          <Link href="/tools" className="text-lavender-dark underline hover:no-underline">
            full tools library
          </Link>
          .
        </p>

        <SoftAppCTA body="The web tool clears your head once. The Doubly iOS app remembers your dumps, surfaces the one task you should do next, and uses accountability check-ins from real people so the list does not turn back into clutter." />
      </article>
    </>
  );
}
