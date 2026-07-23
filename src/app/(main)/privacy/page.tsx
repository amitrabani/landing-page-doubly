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
        <p className="mb-12 text-sm text-muted">Last updated: July 23, 2026</p>

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
            We collect User IDs to provide personalized features and analyze app usage.
          </BulletItem>
          <BulletItem label="Usage Data">
            We track product interactions (how you use the app) to ensure the service functions
            correctly and to improve the AI experience.
          </BulletItem>
          <BulletItem label="Google Calendar Data (optional)">
            If you choose to connect Google Calendar, we read your upcoming events so you can turn
            them into tasks. See section 3 for exactly what we read and how it is handled.
          </BulletItem>
          <BulletItem label="WhatsApp Data (optional)">
            If you choose to connect WhatsApp, we store your WhatsApp phone number and the messages
            you exchange with the Doubly bot. See section 4 for details.
          </BulletItem>
          <BulletItem label="Phone Number for Call Reminders (optional)">
            If you enable AI call reminders, we store the phone number you provide so we can place
            reminder calls. See section 5 for details.
          </BulletItem>
        </Section>

        <Section title="2. Third-Party Services">
          <p className="mb-4 text-base leading-7 text-charcoal-light">
            We do not track you across other companies&apos; apps or websites, and we do not share
            your data with data brokers or advertising networks.
          </p>
          <p className="mb-4 text-base leading-7 text-charcoal-light">
            We use first-party analytics to understand how the app is used and improve the
            experience. This data is not shared with third parties for advertising purposes.
          </p>
          <p className="text-base leading-7 text-charcoal-light">
            We share necessary data (such as User Content) with third-party AI processors (e.g.,
            Google or OpenAI) solely to provide the app&apos;s core AI functionality. We do not allow
            these third parties to use your personal content for their own purposes.
          </p>
        </Section>

        <Section title="3. Google Calendar Data">
          <p className="mb-4 text-base leading-7 text-charcoal-light">
            Connecting Google Calendar is optional and is always started by you, from inside the app.
          </p>
          <BulletItem label="Read-only access">
            We request the <code>calendar.readonly</code> scope only. Doubly cannot create, edit, or
            delete anything in your calendar.
          </BulletItem>
          <BulletItem label="What we read">
            The title, start time, and end time of events on your primary calendar, from today up to
            60 days ahead.
          </BulletItem>
          <BulletItem label="How it is used">
            Those events are shown to you on an import screen so you can choose which ones become
            tasks. Only the events you select are saved to your Doubly account. Events you do not
            import are never stored on our servers.
          </BulletItem>
          <BulletItem label="Not used for AI">
            Calendar data is not sent to our AI processors, is not used to train any model, and is
            never used for advertising or sold to anyone.
          </BulletItem>
          <BulletItem label="Tokens">
            We do not store your Google access token. It is held in memory only for the duration of
            an import.
          </BulletItem>
          <BulletItem label="Disconnecting">
            You can revoke Doubly&apos;s access at any time at{' '}
            <a
              href="https://myaccount.google.com/permissions"
              className="font-medium text-lavender-dark hover:underline"
            >
              myaccount.google.com/permissions
            </a>
            . Tasks you already imported stay in your account until you delete them.
          </BulletItem>
          <p className="text-base leading-7 text-charcoal-light">
            Doubly&apos;s use and transfer of information received from Google APIs adheres to the{' '}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy"
              className="font-medium text-lavender-dark hover:underline"
            >
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements.
          </p>
        </Section>

        <Section title="4. WhatsApp Integration">
          <p className="mb-4 text-base leading-7 text-charcoal-light">
            Connecting WhatsApp is optional and is always started by you, from inside the app, by
            texting a one-time link code to the Doubly bot.
          </p>
          <BulletItem label="What we collect">
            Your WhatsApp phone number (to link it to your Doubly account) and the messages you
            exchange with the Doubly bot, in both directions. We keep this history so the bot works
            reliably and so we can troubleshoot problems you report.
          </BulletItem>
          <BulletItem label="How messages travel">
            Messages to and from the bot are delivered through Meta&apos;s WhatsApp Business
            Platform, which processes them under{' '}
            <a
              href="https://www.whatsapp.com/legal/privacy-policy"
              className="font-medium text-lavender-dark hover:underline"
            >
              WhatsApp&apos;s own terms
            </a>
            . Like any message to a business on WhatsApp, your chats with the bot are not covered by
            WhatsApp&apos;s personal end-to-end encryption once they reach us.
          </BulletItem>
          <BulletItem label="AI processing">
            The text you send to the bot is processed by our AI providers (e.g., OpenAI) solely to
            understand your request and create or update tasks in your account. It is not used to
            train their models and is never used for advertising.
          </BulletItem>
          <BulletItem label="Disconnecting">
            You can disconnect WhatsApp at any time in the app&apos;s settings. After you disconnect,
            the bot stops responding to your number and no new messages are collected.
          </BulletItem>
        </Section>

        <Section title="5. AI Call Reminders">
          <p className="mb-4 text-base leading-7 text-charcoal-light">
            AI call reminders are optional and only work if you enter a phone number for them in the
            app.
          </p>
          <BulletItem label="What we share">
            To place a reminder call we send your phone number, your first name, and the title of
            the task being reminded about to Twilio, our telephony provider, which places the call.
            Twilio processes this data under its own privacy policy and is not allowed to use it for
            its own purposes.
          </BulletItem>
          <BulletItem label="Your controls">
            Calls respect the quiet hours and snooze settings you configure. You can remove your
            phone number at any time in the app&apos;s settings to stop all reminder calls.
          </BulletItem>
        </Section>

        <Section title="6. Subscriptions and Billing">
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

        <Section title="7. Your Rights and Data Deletion">
          <p className="text-base leading-7 text-charcoal-light">
            Because we link data to your identity, you have the right to access or delete your data.
            You may initiate account and data deletion directly within the app settings or by
            contacting our support team at{' '}
            <a
              href="mailto:amit@usedoubly.com"
              className="font-medium text-lavender-dark hover:underline"
            >
              amit@usedoubly.com
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
