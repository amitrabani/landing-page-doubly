import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use | Doubly',
  description: 'Terms of Use for Doubly, the ADHD task management app.',
};

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <Link
          href="/"
          className="mb-8 inline-block text-sm font-medium text-muted hover:text-charcoal"
        >
          &larr; Back to Doubly
        </Link>

        <h1 className="mb-2 font-display text-4xl font-bold text-charcoal">Terms of Use</h1>
        <p className="mb-12 text-sm text-muted">Last updated: March 12, 2026</p>

        <Section title="1. Acceptance of Terms">
          <p className="text-base leading-7 text-charcoal-light">
            By downloading, installing, or using Doubly (&quot;the App&quot;), you agree to these
            Terms of Use. If you do not agree, please do not use the App.
          </p>
        </Section>

        <Section title="2. Description of Service">
          <p className="text-base leading-7 text-charcoal-light">
            Doubly is a task management app designed for ADHD brains. It helps you organize tasks,
            collaborate with household members, track focus sessions, and build productive habits.
            Some features use AI to assist with task creation and suggestions.
          </p>
        </Section>

        <Section title="3. Account and Eligibility">
          <p className="text-base leading-7 text-charcoal-light">
            You must be at least 13 years old to use Doubly. You are responsible for maintaining the
            security of your account credentials and for all activity under your account.
          </p>
        </Section>

        <Section title="4. User Content">
          <p className="mb-4 text-base leading-7 text-charcoal-light">
            You retain ownership of all content you create in the App, including tasks, notes, photos,
            and audio recordings. By using the App, you grant us a limited license to process your
            content solely to provide and improve the service.
          </p>
          <p className="text-base leading-7 text-charcoal-light">
            We do not use your personal content to train AI models. Content shared with third-party AI
            processors is used only to generate outputs you request.
          </p>
        </Section>

        <Section title="5. Subscriptions and Payments">
          <BulletItem label="Free Tier">
            Doubly offers core features at no cost.
          </BulletItem>
          <BulletItem label="Pro Subscription">
            Additional features are available through an auto-renewable subscription, billed via your
            Apple ID account.
          </BulletItem>
          <BulletItem label="Cancellation">
            You may cancel at any time through your App Store Account Settings. Cancellation takes
            effect at the end of the current billing period.
          </BulletItem>
          <BulletItem label="Refunds">
            Refund requests are handled by Apple in accordance with their refund policies.
          </BulletItem>
        </Section>

        <Section title="6. Acceptable Use">
          <p className="text-base leading-7 text-charcoal-light">
            You agree not to misuse the App, including attempting to access it through unauthorized
            means, interfering with other users, or using it for any unlawful purpose. We reserve the
            right to suspend accounts that violate these terms.
          </p>
        </Section>

        <Section title="7. Disclaimers">
          <p className="text-base leading-7 text-charcoal-light">
            Doubly is provided &quot;as is&quot; without warranties of any kind. We do not guarantee
            uninterrupted or error-free service. AI-generated suggestions are for informational
            purposes and should not replace professional advice.
          </p>
        </Section>

        <Section title="8. Limitation of Liability">
          <p className="text-base leading-7 text-charcoal-light">
            To the maximum extent permitted by law, Doubly and its creators shall not be liable for
            any indirect, incidental, or consequential damages arising from your use of the App.
          </p>
        </Section>

        <Section title="9. Changes to These Terms">
          <p className="text-base leading-7 text-charcoal-light">
            We may update these terms from time to time. Continued use of the App after changes are
            posted constitutes acceptance of the updated terms.
          </p>
        </Section>

        <Section title="10. Contact">
          <p className="text-base leading-7 text-charcoal-light">
            Questions about these terms? Reach us at{' '}
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
