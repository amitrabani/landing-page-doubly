import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Doubly',
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

        <Section title="1. Data We Collect and How It Is Used">
          <p className="mb-4 text-base leading-7 text-charcoal-light">
            To provide the personalized AI experience in Doubly, we collect the following data types:
          </p>
          <BulletItem label="Contact Information">
            We collect your Name, Email Address, and other contact info. This is used for app
            functionality (account management) and product personalization.
          </BulletItem>
          <BulletItem label="User Content">
            We process your Photos, Videos, Audio Data, and other user content (such as text prompts)
            to generate AI outputs. This is linked to your identity to ensure your creations stay in
            your account.
          </BulletItem>
          <BulletItem label="Identifiers">
            We collect User IDs and Device IDs to monitor app performance, provide personalized
            features, and analyze app usage.
          </BulletItem>
          <BulletItem label="Usage Data">
            We track product interactions (how you use the app) to ensure the service functions
            correctly and to improve the AI experience.
          </BulletItem>
        </Section>

        <Section title="2. Tracking and Third-Party Sharing">
          <p className="mb-4 text-base leading-7 text-charcoal-light">
            In accordance with Apple&apos;s Transparency frameworks, we disclose that certain
            identifiers (User ID, Device ID), Contact Info (Email), and Usage Data may be used to
            track your activity across other companies&apos; apps and websites for the purposes of
            optimizing our ad campaigns or providing tailored offers.
          </p>
          <p className="text-base leading-7 text-charcoal-light">
            We share necessary data (such as User Content) with third-party AI processors (e.g.,
            Google or OpenAI) solely to provide the app&apos;s core AI functionality. We do not allow
            these third parties to use your personal content for their own purposes.
          </p>
        </Section>

        <Section title="3. Subscriptions and Billing">
          <p className="mb-4 text-base leading-7 text-charcoal-light">
            Doubly offers auto-renewable subscriptions.
          </p>
          <BulletItem label="Payment">
            Charged to your Apple ID account at confirmation of purchase.
          </BulletItem>
          <BulletItem label="Renewal">
            Subscriptions automatically renew unless canceled at least 24 hours before the end of the
            current period.
          </BulletItem>
          <BulletItem label="Management">
            You can manage or cancel your subscription in your App Store Account Settings.
          </BulletItem>
        </Section>

        <Section title="4. Your Rights and Data Deletion">
          <p className="text-base leading-7 text-charcoal-light">
            Because we link data to your identity, you have the right to access or delete your data.
            You may initiate account and data deletion directly within the app settings or by
            contacting our support team at{' '}
            <a
              href="mailto:support@doubly.app"
              className="font-medium text-lavender-dark hover:underline"
            >
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
