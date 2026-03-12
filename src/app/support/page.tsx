import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Support | Doubly',
  description: 'Get help with Doubly. Contact support, manage subscriptions, and find answers.',
};

const SUPPORT_EMAIL = 'support@doubly.app';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <Link
          href="/"
          className="mb-8 inline-block text-sm font-medium text-muted hover:text-charcoal"
        >
          &larr; Back to Doubly
        </Link>

        <h1 className="mb-2 font-display text-4xl font-bold text-charcoal">
          Doubly Help Center
        </h1>
        <p className="mb-12 text-base text-charcoal-light">
          Need help with Doubly? We&apos;re here for you.
        </p>

        <Section title="Contact Support">
          <p className="mb-4 text-base leading-7 text-charcoal-light">
            For any issues regarding your data, your subscription, or app functionality, please
            contact us at:
          </p>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="inline-block rounded-lg bg-lavender/20 px-4 py-2 font-medium text-lavender-dark transition-colors hover:bg-lavender/30"
          >
            {SUPPORT_EMAIL}
          </a>
        </Section>

        <Section title="Managing Your Data">
          <p className="text-base leading-7 text-charcoal-light">
            If you would like to request a copy of your data or have your account deleted (including
            all photos and audio data), please email us with the subject line
            &quot;Data Request.&quot;
          </p>
        </Section>

        <Section title="Subscription Troubleshooting">
          <div className="space-y-4">
            <div className="rounded-xl border border-warm-dark/30 bg-warm p-6">
              <h3 className="mb-1 font-display text-base font-semibold text-charcoal">
                Can&apos;t see Pro features?
              </h3>
              <p className="text-sm leading-6 text-charcoal-light">
                Tap &quot;Restore Purchases&quot; on the settings screen to reactivate your Pro
                features.
              </p>
            </div>
            <div className="rounded-xl border border-warm-dark/30 bg-warm p-6">
              <h3 className="mb-1 font-display text-base font-semibold text-charcoal">
                Want to cancel?
              </h3>
              <p className="text-sm leading-6 text-charcoal-light">
                Open the Settings app on your iPhone &gt; [Your Name] &gt; Subscriptions &gt;
                Doubly.
              </p>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 font-display text-xl font-semibold text-charcoal">{title}</h2>
      {children}
    </section>
  );
}
