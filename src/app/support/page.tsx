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

        <h1 className="mb-2 font-display text-4xl font-bold text-charcoal">Support</h1>
        <p className="mb-12 text-base text-charcoal-light">
          Need help with Doubly? We&apos;re here for you.
        </p>

        <Section title="Contact Us">
          <p className="mb-4 text-base leading-7 text-charcoal-light">
            For technical issues, billing questions, or feedback, please email us at:
          </p>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="inline-block rounded-lg bg-lavender/20 px-4 py-2 font-medium text-lavender-dark transition-colors hover:bg-lavender/30"
          >
            {SUPPORT_EMAIL}
          </a>
        </Section>

        <Section title="Subscription Help">
          <div className="rounded-xl border border-warm-dark/30 bg-warm p-6">
            <div className="mb-4">
              <h3 className="mb-1 font-display text-base font-semibold text-charcoal">
                Restore Purchases
              </h3>
              <p className="text-sm leading-6 text-charcoal-light">
                If you reinstalled the app or changed devices, tap the &quot;Restore
                Purchases&quot; button on the subscription screen to reactivate your Pro features.
              </p>
            </div>
            <div>
              <h3 className="mb-1 font-display text-base font-semibold text-charcoal">
                Cancel Subscription
              </h3>
              <p className="text-sm leading-6 text-charcoal-light">
                You can manage or cancel your subscription at any time in your iOS Settings &gt;
                Apple ID &gt; Subscriptions.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Frequently Asked Questions">
          <div className="space-y-4">
            <FAQItem question="Is my data safe?">
              Yes, we use industry-standard encryption for data in transit and at rest.
            </FAQItem>
            <FAQItem question="How do I delete my account?">
              You can do this in the app under Settings &gt; Delete Account, or by emailing us at{' '}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="font-medium text-lavender-dark hover:underline">
                {SUPPORT_EMAIL}
              </a>
              .
            </FAQItem>
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

function FAQItem({ question, children }: { question: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-warm-dark/30 bg-warm p-5">
      <h3 className="mb-1 font-display text-base font-semibold text-charcoal">{question}</h3>
      <p className="text-sm leading-6 text-charcoal-light">{children}</p>
    </div>
  );
}
