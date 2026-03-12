import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — Doubly',
  description: 'Privacy Policy for Doubly, the ADHD task management app.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <Link
          href="/"
          className="mb-8 inline-block text-sm font-medium text-muted hover:text-charcoal"
        >
          &larr; Back to Doubly
        </Link>

        <h1 className="mb-2 font-display text-4xl font-bold text-charcoal">Privacy Policy</h1>
        <p className="mb-12 text-sm text-muted">Last updated: March 12, 2026</p>

        <Section title="1. Information We Collect">
          <BulletItem label="Account Data">
            When you create an account or subscribe, we collect your email and Apple ID identifier.
          </BulletItem>
          <BulletItem label="User Content">
            We process the text and images you upload (&quot;Content&quot;) to provide AI
            personalization.
          </BulletItem>
          <BulletItem label="Subscription Data">
            All financial transactions are handled by Apple. We only receive a receipt to verify your
            subscription status.
          </BulletItem>
        </Section>

        <Section title="2. How We Use Your Data">
          <BulletItem label="AI Personalization">
            We use your Content specifically to generate the outputs you request within the app.
          </BulletItem>
          <BulletItem label="Model Training">
            We do NOT use your personal content to train our AI models.
          </BulletItem>
          <BulletItem label="Third-Party AI">
            We may share your content with third-party AI processors solely for the purpose of
            generating your requested content.
          </BulletItem>
        </Section>

        <Section title="3. Subscription Management">
          <p className="text-base leading-7 text-charcoal-light">
            Doubly offers auto-renewable subscriptions. Payments are charged to your Apple ID account
            at confirmation of purchase. Subscriptions automatically renew unless canceled at least
            24 hours before the end of the current period.
          </p>
        </Section>

        <Section title="4. Data Deletion &amp; Your Rights">
          <p className="text-base leading-7 text-charcoal-light">
            You may request the deletion of your account and all associated data at any time via the
            &quot;Delete Account&quot; button in the app settings or by contacting us at{' '}
            <a href="mailto:support@doubly.app" className="font-medium text-lavender-dark hover:underline">
              support@doubly.app
            </a>
            .
          </p>
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

function BulletItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <p className="mb-3 text-base leading-7 text-charcoal-light">
      <span className="font-semibold text-charcoal">{label}:</span> {children}
    </p>
  );
}
