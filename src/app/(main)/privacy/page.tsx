import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Doubly',
  description: 'Privacy Policy for Doubly, the ADHD task management app.',
};

const CONTACT_EMAIL = 'amit@usedoubly.com';

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
        <p className="mb-12 text-sm text-muted">Last updated: September 15, 2026</p>

        <Paragraph>
          This policy explains what data Doubly collects, why we collect it, who else gets it, and
          what you can do about it. We wrote it in plain language. If something is not clear, email
          us at <MailLink />.
        </Paragraph>

        <Section title="1. Who We Are and What This Policy Covers">
          <Paragraph>
            Doubly is run by Amit Rabani. He is the &quot;controller&quot; of your data. That means
            he decides why and how your data is used.
          </Paragraph>
          {/* TODO: add the controller's postal address here. It is not known yet. Do not publish a placeholder. */}
          {/* TODO: decide whether an EU representative (GDPR Article 27) is needed, and name them here if so. */}
          <Paragraph>
            Contact: <MailLink />
          </Paragraph>
          <Paragraph>This one policy covers all of Doubly:</Paragraph>
          <List>
            <li>The Doubly iPhone app.</li>
            <li>The Doubly web app at app.usedoubly.com.</li>
            <li>
              This website, usedoubly.com, including the free tools, the body-doubling room and the
              Android waitlist. The Android app is not out yet.
            </li>
            <li>The Doubly WhatsApp bot.</li>
            <li>Phone reminders: reminder calls and the daily update call.</li>
          </List>
          <Paragraph>
            The iPhone app, the web app, the WhatsApp bot and phone reminders all use the same
            Doubly account.
          </Paragraph>
        </Section>

        <Section title="2. What We Collect and Why">
          <Paragraph>
            The law asks us to name a &quot;legal basis&quot; for each way we use your data. We use
            these:
          </Paragraph>
          <List>
            <li>
              <Strong>Contract:</Strong> we need the data to run Doubly and the features you turn
              on.
            </li>
            <li>
              <Strong>Legitimate interests:</Strong> we have a real reason, like fixing bugs, and we
              weighed it against your privacy. You can object at any time.
            </li>
            <li>
              <Strong>Consent:</Strong> you said yes. You can take it back at any time.
            </li>
          </List>

          <SubHeading>2.1 Your account</SubHeading>
          <List>
            <li>Your first name, last name, display name and email address.</li>
            <li>
              If you use Sign in with Apple, the name and email Apple shares with us. The email can
              be a private relay address from Apple.
            </li>
            <li>If you use Google sign-in, your name and email from Google.</li>
            <li>You can also start without an email. We still create an account with a user ID.</li>
            <li>
              Answers you give during onboarding: what you tend to forget, the daily habits you pick
              and how many tasks make a good day for you. Some older accounts also have an answer
              about how you describe yourself.
            </li>
          </List>
          <Basis>Contract. We need this to create your account and set up the app for you.</Basis>

          <SubHeading>2.2 What you put into Doubly</SubHeading>
          <List>
            <li>Tasks: titles, due dates, subtasks, notes, spaces and task settings.</li>
            <li>Brain dumps you type or say.</li>
            <li>
              Facts about your life. You can type them yourself. The AI also saves up to 3 short
              facts it finds in each brain dump and daily update call, without asking you first. You
              can see and remove them in Settings &gt; What Doubly remembers.
            </li>
            <li>Day plans, schedule blocks, habits and focus sessions.</li>
            <li>
              Households: everyone in your household can see, change and delete every task in it,
              with its subtasks and place, even tasks marked private. They can also read the notes
              on those tasks. People you add to a single task can see and change that task.
            </li>
            <li>
              The feed: posts, photos, comments, likes, follows, close friends and blocked users.
              Photos are uploaded to a public storage folder. Anyone who has a photo&apos;s web
              address can open it.
            </li>
            <li>
              If you set a task to public or close friends, Doubly posts it to the feed. It also
              sends the task title to your close friends and, for a public task, to people who
              follow you.
            </li>
            <li>
              Task sets you create are public. Any Doubly user can see them and add them, and Doubly
              posts each new set to the feed.
            </li>
            <li>
              Chats with the in-app assistant. When the assistant fails, you can choose to send us a
              report. It holds the error, your message and your recent messages. It also holds the
              steps the assistant took, any note you add, your app version, platform and time zone.
            </li>
            <li>Push notification tokens, so we can send reminders to your phone or browser.</li>
          </List>
          <Basis>Contract. We need this to run the features you use.</Basis>

          <SubHeading>2.3 AI features</SubHeading>
          <Paragraph>
            Many Doubly features use AI from OpenAI. To make them work, we send OpenAI some of the
            following, depending on the feature:
          </Paragraph>
          <List>
            <li>your name</li>
            <li>task titles, subtasks and schedule blocks</li>
            <li>a summary of your week</li>
            <li>facts about your life that Doubly saved</li>
            <li>the names of your spaces, habits and task sets</li>
            <li>the names of people in your household and of your friends</li>
            <li>your time zone and local time</li>
            <li>your chat history with the assistant</li>
            <li>brain dump text, with any mood tags you picked</li>
            <li>messages you send to the WhatsApp bot, with your tasks (see section 3.3)</li>
            <li>what you say during the daily update call, as text</li>
          </List>
          <Paragraph>
            Some in-app assistant and brain dump requests first go through n8n, a workflow tool we
            run on Render. n8n then sends them to OpenAI.
          </Paragraph>
          <Basis>Contract. The AI is part of the features you choose to use.</Basis>

          <SubHeading>2.4 Analytics and error tracking</SubHeading>
          <Paragraph>
            We use PostHog to see how people use Doubly and to find bugs. PostHog gets:
          </Paragraph>
          <List>
            <li>Your user ID, and events about what you do in the app.</li>
            <li>
              When you tap something in the iPhone app, the text on it. That text can be a task
              title.
            </li>
            <li>Your first name, when you enter it during sign-up.</li>
            <li>Your onboarding answers about what you tend to forget.</li>
            <li>Your IP address and a rough location worked out from it, usually a city.</li>
            <li>If you came from an ad, which ad campaign AppsFlyer matched your install to.</li>
            <li>Purchase events, with the price.</li>
            <li>App errors that were not handled, and error messages.</li>
            <li>
              Events our servers send about you, such as a reminder being sent, trial and
              subscription changes, and WhatsApp use.
            </li>
            <li>
              In the web app, only after you click Accept in its cookie banner (section 6): the
              pages you open (with the full web address), when you leave a page, how far you scroll
              and how long you stay on a page, the theme you pick, and page speed measurements. The
              web app does not record your screen and does not send your email. It does not send the
              text of what you click. It also does not send where you click or move your mouse,
              because that tracking (called heatmaps) is turned off in our PostHog settings. Surveys
              are turned off there too. After you click Accept, the web app keeps your PostHog ID in
              browser storage and in a cookie that is set for all of usedoubly.com. If you also
              click Accept on usedoubly.com, PostHog can link your visits there to your Doubly
              account (section 6).
            </li>
            <li>Screen recordings of some iPhone app sessions. See section 4.</li>
          </List>
          <Basis>
            Legitimate interests. We need this to improve Doubly and fix problems. You can object by
            emailing <MailLink />. In the web app, the legal basis is consent: PostHog only runs
            there after you click Accept. You can change your choice with &quot;Cookie
            settings&quot; in the web app (section 6).
          </Basis>

          <SubHeading>2.5 Health-related answers (optional)</SubHeading>
          <Paragraph>
            Some things you can tell Doubly may say something about your health:
          </Paragraph>
          <List>
            <li>
              Mood check-ins: a mood score from -5 to 5, feelings like &quot;anxious&quot;,
              &quot;overwhelmed&quot; or &quot;brain fog&quot;, and notes you write.
            </li>
            <li>Mood tags you add to a brain dump. These go to OpenAI with the brain dump text.</li>
            <li>
              Picking &quot;medication&quot; as something you tend to forget. This answer is also
              sent to PostHog.
            </li>
          </List>
          <Paragraph>
            These answers are optional. We use them to run the features where you give them, and the
            medication answer also appears in our analytics.
          </Paragraph>
          <Basis>
            Consent, which you give by choosing to add these answers. To take it back, email{' '}
            <MailLink /> and we will delete them.
          </Basis>

          <SubHeading>2.6 Ad measurement</SubHeading>
          <Paragraph>
            We measure which ads bring people to the iPhone app. See section 5 for what this
            involves.
          </Paragraph>
          <Basis>
            Legitimate interests: we need to know which ads work. You can object by emailing{' '}
            <MailLink />. Apple&apos;s tracking prompt controls only two parts. Your phone shares
            Apple&apos;s advertising ID only if you choose &quot;Allow&quot;. And if you choose
            &quot;Ask App Not to Track&quot;, your purchase and trial events are not passed on to ad
            platforms.
          </Basis>

          <SubHeading>2.7 Emails, messages and push notifications</SubHeading>
          <List>
            <li>Sign-in emails, such as a password reset, are sent by Supabase.</li>
            <li>A reminder before your free trial ends is sent by email through Brevo.</li>
            <li>
              Check-in emails. These are for accounts that are 1 to 5 days old, when Doubly cannot
              send push notifications. We may send up to 2 emails about your task list through
              Brevo. An email can say how many saved tasks you have. We are still testing these
              emails. For now they are not sent to you. They go to our own inbox, at Gmail, with
              your email address in the subject line.
            </li>
            <li>
              If you connected WhatsApp, we may send you a WhatsApp message on your second day, or
              an update we send to everyone who connected.
            </li>
            <li>
              Push notifications that are not task reminders. In your first days, you can get up to
              2 nudges if you have created or finished only a few tasks. There is a daily reflection
              that asks how you feel, and a weekly planning reminder if you asked for one. There is
              a &quot;Save my day&quot; offer when you missed parts of your plan for the day. If an
              App Store renewal fails, we may send up to 3 push messages telling you the payment did
              not go through. And sometimes there is an offer, such as a free week. PostHog records
              which message you got.
            </li>
          </List>
          <Basis>
            Contract for sign-in and trial emails. Legitimate interests for the check-in emails, the
            WhatsApp messages and these push notifications. You can object at any time by emailing{' '}
            <MailLink />. You can turn off push notifications in the app&apos;s notification
            settings or in your iPhone&apos;s settings. Daily reflection, Save my day and Payment
            problem alerts also have their own switches in the app.
          </Basis>

          <SubHeading>2.8 Support, feedback and deletion records</SubHeading>
          <List>
            <li>
              Messages you send from the Support screen: the subject, message, your email, app
              version, platform and language setting.
            </li>
            <li>Feedback notes you write in the app, and feature ideas you send us.</li>
            <li>
              When you delete your account: the reason you pick, any note you write, your email,
              whether you had a paid subscription, and your app version, platform and language.
              PostHog also gets an event with the reason and whether you had a paid subscription.
            </li>
            <li>
              Reports about content in the feed, with a copy of the reported content. We save each
              report so we can review it.
            </li>
          </List>
          <Basis>
            Legitimate interests. We use these records to answer you, to keep the feed safe, and to
            handle disputes, for example about a purchase after an account was deleted.
          </Basis>

          <SubHeading>2.9 Security</SubHeading>
          <Paragraph>
            On this website, the Brain Dump and Task Splitter tools use your IP address to limit how
            many requests one visitor can send per minute. The IP address is only held in server
            memory for this. Our code does not log it or save it in a database. Our hosting
            provider, Vercel, keeps its own request logs.
          </Paragraph>
          <Basis>Legitimate interests. We need this to stop abuse of the free tools.</Basis>

          <SubHeading>2.10 The website</SubHeading>
          <Paragraph>
            Analytics and ad cookies on usedoubly.com only run if you click Accept in the cookie
            banner. See section 6. The free tools, the body-doubling room and the Android waitlist
            are covered in sections 7, 8 and 9.
          </Paragraph>
          <Basis>
            Consent for analytics and ad cookies. Contract for the tools and the room you choose to
            use.
          </Basis>

          <SubHeading>2.11 What you have to give us</SubHeading>
          <Paragraph>
            No law makes you give us data. To use the app, Doubly creates an account with a user ID.
            Everything else you give is optional. But a feature cannot work without the data it
            needs. For example, without a phone number you get no reminder calls, and without
            location access you get no place reminders.
          </Paragraph>
        </Section>

        <Section title="3. Optional Features">
          <SubHeading>3.1 Google Calendar (iPhone app)</SubHeading>
          <Paragraph>
            You can connect Google Calendar in the iPhone app, under Settings &gt; Account &gt;
            Integrations &gt; Google Calendar. The web app does not have this feature. When you
            connect, the app shows your upcoming events as a list, with all of them ticked. The
            events you keep ticked become tasks when you tap Import. Connecting also turns on
            two-way sync with a calendar called &quot;Doubly&quot;. There is no separate step for
            sync.
          </Paragraph>
          <BulletItem label="What Google asks you to allow">
            Full access to Google Calendar. Google describes it as: &quot;See, edit, share, and
            permanently delete all the calendars you can access using Google Calendar.&quot; Google
            also asks to share your basic profile and email address with Doubly.
          </BulletItem>
          <BulletItem label="Import">
            Your phone reads events on your main calendar, from the start of today up to 60 days
            ahead, at most 250 events. For each event it reads the title, start and end time,
            whether it is cancelled, and whether it is marked as free. It skips cancelled events,
            free events, events with no title, and events that match a task you already have on the
            same day. It shows you the rest. Only the events you keep ticked become tasks in your
            account, and only when you tap Import. The import runs on your phone.
          </BulletItem>
          <BulletItem label="The Doubly calendar">
            When you connect, our server reads your list of calendars once. If you have no calendar
            called &quot;Doubly&quot;, it creates one. If you already have a calendar with that
            name, Doubly uses that one. After that, our server only reads the Doubly calendar.
          </BulletItem>
          <BulletItem label="What Doubly writes to Google">
            About every 10 minutes, and right after you change a space&apos;s calendar setting in
            the app, Doubly adds, changes and deletes events in the Doubly calendar. It does this
            for tasks you chose to put on your calendar, one by one or for a whole space. Each event
            holds the task title (with a check mark once it is done), and its start and end time. It
            also holds a link that opens the task in Doubly, and Doubly&apos;s own ID for the task.
            And it holds a hidden check value built from the task title, time, time zone and length.
            Doubly deletes an event when the task is taken off the calendar, when it is done before
            its start time, or when the task is gone. Doubly only adds, changes or deletes events in
            the Doubly calendar.
          </BulletItem>
          <BulletItem label="What Doubly reads back from Google">
            Google tells our server when the Doubly calendar changes. Our server then reads the
            changes, including deleted events. The first read goes back 30 days. If you rename an
            event that belongs to a task, the task title changes. If you move or resize it, the
            task&apos;s time and length change, and the move is saved in the task&apos;s history. If
            you delete the event, the task is taken off your calendar.
          </BulletItem>
          <BulletItem label="What we store">
            Your Google account ID and email, which calendar Doubly uses, sync status and errors,
            and the link between each task and its event. That link includes a check value built
            from the task title, time, time zone and length. Imported events are saved as tasks
            marked as coming from Google Calendar.
          </BulletItem>
          <BulletItem label="AI">
            Raw data from Google is not sent to AI. But imported events become normal tasks. Their
            titles and dates can be sent to OpenAI like any other task. For example, they are used
            for daily suggestions of tasks to prepare, and in the chat planner.
          </BulletItem>
          <BulletItem label="Disconnecting">
            When you tap Disconnect Google in the app, Doubly stops listening for changes. It asks
            Google to remove Doubly&apos;s access, and deletes the connection and the task-event
            links. It does not delete the Doubly calendar or its events from Google. You can delete
            that calendar yourself in Google Calendar. Tasks you imported stay in your account until
            you delete them. You can also remove Doubly&apos;s access at{' '}
            <TextLink href="https://myaccount.google.com/permissions">
              myaccount.google.com/permissions
            </TextLink>
            .
          </BulletItem>
          <BulletItem label="Deleting your account">
            This deletes the connection records in Doubly. It does not remove Doubly&apos;s access
            at Google, so please remove it at the link above.
          </BulletItem>
          <Basis>Contract. You choose to connect Google Calendar.</Basis>

          <SubHeading>3.2 Calendar on your iPhone</SubHeading>
          <Paragraph>
            The iPhone app can also put your tasks in your phone&apos;s own calendar. You turn this
            on in Settings &gt; Account &gt; Integrations &gt; Calendar, or with &quot;Add a
            block&quot; on a task. It only runs while Google Calendar is not connected.
          </Paragraph>
          <BulletItem label="What your iPhone asks you to allow">
            Full access to your calendars.
          </BulletItem>
          <BulletItem label="The Doubly calendar">
            The app reads the list of calendars on your phone. If there is no &quot;Doubly&quot;
            calendar that it can change, it creates one in your default calendar account. That is
            often iCloud, but it can also be Google, Exchange or another account. The company behind
            that account then stores the calendar and can sync it to your other devices.
          </BulletItem>
          <BulletItem label="What Doubly writes">
            The app adds, changes and deletes events in the Doubly calendar for tasks that are set
            to be on the calendar. These can include tasks in your household&apos;s spaces, not only
            your own. Each event holds the task title (with a check mark once it is done), and its
            start and end time. It also holds a note with a link that opens the task in Doubly. The
            app does this each time your tasks change and each time you open the app.
          </BulletItem>
          <BulletItem label="What Doubly reads">
            The app checks that it does not make the same event twice. For this, it reads events in
            the Doubly calendar from one day before to one day after a task&apos;s time. It does not
            read events in your other calendars.
          </BulletItem>
          <BulletItem label="What we store">
            Your phone keeps the link between each task and its event. PostHog gets events about the
            sync, such as a block being added, with the task ID.
          </BulletItem>
          <BulletItem label="Stopping">
            In the Calendar sync screen, tap &quot;Stop syncing my calendar&quot;. You can keep the
            events Doubly made, or remove them all. You can also turn off calendar access for Doubly
            in your iPhone&apos;s settings.
          </BulletItem>
          <Basis>Contract. You choose to turn this on.</Basis>

          <SubHeading>3.3 WhatsApp</SubHeading>
          <List>
            <li>
              You connect WhatsApp from the app by sending a one-time link code to the Doubly bot.
            </li>
            <li>We store your WhatsApp number, your time zone and language, and the link code.</li>
            <li>
              We store the messages you send to the bot and the bot&apos;s replies, with what the
              bot understood you wanted. We also keep the IDs of messages we already handled, so
              none is handled twice.
            </li>
            <li>
              Messages travel through Meta&apos;s WhatsApp Business Platform. Meta also sends us
              your WhatsApp profile name. We do not store or use it.
            </li>
            <li>
              Each message you send goes to OpenAI, so the bot can understand you and create or
              update tasks. With it go your recent chat with the bot, your open tasks and
              today&apos;s tasks, today&apos;s schedule blocks, and your time zone. The names of
              your spaces, habits and task sets go too. So do the names of people in your household
              and of your friends.
            </li>
            <li>
              Parts of your messages, and task titles, can appear in our server logs. These logs are
              kept for 7 days.
            </li>
            <li>
              If you send a feature idea through WhatsApp, we keep its text and your WhatsApp number
              in our feedback list.
            </li>
            <li>You can disconnect WhatsApp in the app.</li>
          </List>
          <Basis>Contract. You choose to connect WhatsApp.</Basis>

          <SubHeading>3.4 Phone reminders and the daily update call</SubHeading>
          <BulletItem label="Reminder calls">
            If you add a phone number for reminder calls, Doubly can call you about a task. We send
            Twilio, our phone provider, your phone number, your first name, the task title and when
            it is due. Twilio places the call and reads the message in an Amazon Polly voice. You
            get at most one reminder call per day.
          </BulletItem>
          <BulletItem label="Daily update call">
            If you set up the daily update call, Twilio calls your number at your scheduled time. It
            checks whether a person or a voicemail answered. The call greets you by first name, in a
            Google voice, and does not read out your tasks. Twilio turns what you say into text. The
            call is not recorded as audio.
          </BulletItem>
          <BulletItem label="What happens to what you say">
            We save the text, and how the call was answered. OpenAI checks the text and turns it
            into tasks, and the text is saved as a brain dump. If the call cannot use what you said,
            the first 160 characters of the text go into our server logs.
          </BulletItem>
          <Basis>Contract. You choose to add a phone number and set up these calls.</Basis>

          <SubHeading>3.5 Place reminders and location (iPhone app)</SubHeading>
          <Paragraph>
            You can add a place to a task, and Doubly reminds you when you get there. This is
            optional.
          </Paragraph>
          <BulletItem label="What we save">
            For each task with a place: its exact coordinates, the reminder distance (100 to 2,000
            meters) and a name. The name can be a street address. It is saved on the task, so people
            who can see the task, like your household or people you share it with, can see the
            place. A repeating task copies its place to the next one.
          </BulletItem>
          <BulletItem label="Picking a place">
            If you tap &quot;Use my current location&quot;, the place we save is where your phone is
            at that moment, accurate to about 100 meters. It is uploaded when you tap Save. If you
            search for an address, the text you typed becomes the name. With approximate location
            turned on, you cannot use your current location.
          </BulletItem>
          <BulletItem label="Apple and Google maps">
            To find an address, or to name your current location, the app uses your phone&apos;s
            built-in map service: Apple on iPhone, Google on Android. Your current coordinates go to
            that service right after you tap &quot;Use my current location&quot;, even if you never
            tap Save. Addresses you type go there too.
          </BulletItem>
          <BulletItem label="Background location">
            To notice when you arrive, Doubly uses your location in the background, even when the
            app is closed or not in use. Your phone does this check. Your live location is not sent
            to our servers, and Doubly does not track or keep a record of where you go. The app
            reads your phone&apos;s last known position (at most 10 minutes old) at a few moments:
            when you open the app, when you save a place, and when the app updates your reminders.
            It uses that position to work out distances on your phone, and does not save it.
          </BulletItem>
          <BulletItem label="On your phone">
            Your phone keeps a copy of each task&apos;s title and place, and a log of when each
            reminder last went off. These are cleared when you sign out.
          </BulletItem>
          <BulletItem label="AI and analytics">
            We do not send your saved places to OpenAI. PostHog gets events like &quot;place
            reminder set&quot;, with the reminder distance but no coordinates or place names. Like
            every PostHog event, these also carry a rough location from your IP address. But a place
            name shown on screen can appear in a session recording (section 4). It can also appear
            in the text PostHog gets when you tap it.
          </BulletItem>
          <BulletItem label="Your controls">
            You can remove a place from a task, and you can turn off location access for Doubly in
            your phone&apos;s settings. Deleting a task does not delete its place. The task is only
            marked as deleted, and the place stays with it until you delete your account. Email us
            if you want it removed sooner.
          </BulletItem>
          <Basis>Contract. You choose to add a place to a task.</Basis>

          <SubHeading>3.6 Voice input</SubHeading>
          <Paragraph>
            When you speak to Doubly, your microphone audio is streamed live to our relay server on
            Google Cloud, together with your sign-in token. The relay passes the audio to Google
            Cloud Speech-to-Text and sends back only the text. We do not store the audio.
          </Paragraph>
          <Basis>Contract. You choose to speak to Doubly.</Basis>
        </Section>

        <Section title="4. Session Recording">
          <Paragraph>
            To find usability problems, the iPhone app uses PostHog to record the screen on a small
            share of sessions: about 15% of app launches. A device that was recorded is not recorded
            again for 7 days. Recordings hide text you type into input fields, and images. Other
            things on screen, like task titles, can be visible in a recording. Recordings also
            include the app&apos;s technical messages (console logs). They also include details of
            each request the app sends over the internet: the web address, how long it took, whether
            it worked, and its size. Our legal basis is legitimate interests. To object, email{' '}
            <MailLink /> with the subject &quot;Data Request&quot;.
          </Paragraph>
        </Section>

        <Section title="5. Ad Measurement">
          <Paragraph>
            We use AppsFlyer to learn which ads, for example on Meta or Reddit, bring people to the
            iPhone app, and whether they then start a trial or subscribe. The app also shows
            Apple&apos;s tracking prompt, but most of this does not depend on your answer.
          </Paragraph>
          <Paragraph>This part runs whatever you answer:</Paragraph>
          <List>
            <li>
              AppsFlyer starts right after the app asks the tracking question. It gets your Doubly
              user ID, app install and open data, a sign-up event, and a rough location based on
              your IP address. It also gets a device ID that is the same only across apps from the
              same maker (IDFV).
            </li>
            <li>PostHog gets which ad campaign AppsFlyer matched your install to (section 2.4).</li>
            <li>
              RevenueCat, which handles subscription status, sends AppsFlyer your purchase and trial
              events, including the price. It sends them with your device IDs and your AppsFlyer ID.
            </li>
            <li>
              AppsFlyer links this data to the ad you clicked. It can then report the result to the
              ad platform, such as Meta or Reddit. For example: &quot;someone who clicked this ad
              installed the app&quot;.
            </li>
          </List>
          <Paragraph>What your answer changes:</Paragraph>
          <List>
            <li>
              If you choose &quot;Allow&quot;, your phone also shares Apple&apos;s advertising ID
              (IDFA).
            </li>
            <li>
              If you choose &quot;Ask App Not to Track&quot;, or your phone blocks tracking, we turn
              on a block in RevenueCat. Then RevenueCat does not pass your purchase and trial events
              on to ad platforms.
            </li>
            <li>
              If the app gets no answer, for example because the prompt could not be shown, your
              purchase and trial events are still passed on.
            </li>
            <li>You can change your choice at any time in your iPhone&apos;s settings.</li>
          </List>
        </Section>

        <Section title="6. Website Cookies and Similar Technologies">
          <Paragraph>
            When you first visit usedoubly.com, a banner asks you to Accept or Reject. Until you
            click Accept, Google Tag Manager and the Reddit Pixel do not load, and PostHog does not
            start and sends nothing. If you click Accept, they start right away.
          </Paragraph>
          <Paragraph>After you click Accept:</Paragraph>
          <List>
            <li>
              <Strong>PostHog</Strong> gets the pages you open (with the full web address), when you
              leave a page, and how far you scroll. It gets clicks on App Store buttons, and when
              you open the Android waitlist form. It also gets other clicks, clicks that did
              nothing, many fast clicks in one place, and form submits. With these it gets the text
              and labels of what you clicked. That text can be something you typed, if it shows on
              what you click. For example, a task in the Eisenhower Matrix. When you change a form
              field, PostHog gets a note that it changed, but not what you typed. The one exception
              is the email you give the Android waitlist (section 9). PostHog also gets error
              reports from the page (the error message and where in the code it happened) and page
              speed measurements. It can also store your IP address and a rough location worked out
              from it. Data goes through events.usedoubly.com, a PostHog service that runs on
              Cloudflare, to PostHog&apos;s US cloud.
            </li>
            <li>
              <Strong>Google Tag Manager</Strong> loads other tags. Today it loads only the Meta
              Pixel, which records a page view on every page. What Tag Manager loads can change
              without an update to this website.
            </li>
            <li>
              <Strong>The Reddit Pixel</Strong> records a page visit when a page first loads. It
              records a &quot;Lead&quot; when you click an App Store button, or another button
              picked in Reddit&apos;s ad settings. It records a &quot;SignUp&quot; when you join the
              Android waitlist. Reddit&apos;s ad settings can change without an update to this
              website. Reddit&apos;s automatic matching is turned on. It scans the page, including
              text typed into form fields, for email addresses and phone numbers. It scrambles them
              with a one-way code (SHA-256 hashing) and sends them to Reddit.
            </li>
          </List>
          <Paragraph>
            Legal basis: consent for analytics and ad cookies. The items marked &quot;always&quot;
            below are needed for the site or a tool to work, so they do not need consent.
          </Paragraph>

          <TableWrap label="Cookies and browser storage on usedoubly.com">
            <table className={tableClass}>
              <caption className="sr-only">Cookies and browser storage on usedoubly.com</caption>
              <thead>
                <tr>
                  <Th>Name or key</Th>
                  <Th>Provider</Th>
                  <Th>Purpose</Th>
                  <Th>Lifetime</Th>
                  <Th>When set</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>
                    <code>NEXT_LOCALE</code> (cookie)
                  </Td>
                  <Td>Doubly</Td>
                  <Td>Remembers the language you picked.</Td>
                  <Td>1 year</Td>
                  <Td>Always, when you pick a language</Td>
                </tr>
                <tr>
                  <Td>
                    <code>doubly_cookie_consent</code> (browser storage)
                  </Td>
                  <Td>Doubly</Td>
                  <Td>Remembers whether you clicked Accept or Reject.</Td>
                  <Td>Until you clear your browser data</Td>
                  <Td>Always, when you click Accept or Reject</Td>
                </tr>
                <tr>
                  <Td>
                    <code>doubly:visual-timer:v1</code>, <code>doubly:hyperfocus-timer:v1</code>,{' '}
                    <code>doubly:pomodoro:v1</code>, <code>doubly:brown-noise:v1</code>,{' '}
                    <code>pick-one-input-v1</code>, <code>eisenhower-matrix-v1</code> (browser
                    storage)
                  </Td>
                  <Td>Doubly</Td>
                  <Td>
                    Remember tool settings, and the list or tasks you typed into Pick One or the
                    Eisenhower Matrix.
                  </Td>
                  <Td>Until you clear your browser data</Td>
                  <Td>Always, when you open that tool&apos;s page</Td>
                </tr>
                <tr>
                  <Td>
                    <code>doubly:room:name</code>, <code>doubly:room:avatar</code> (browser storage)
                  </Td>
                  <Td>Doubly</Td>
                  <Td>Remember the name and emoji you use in a body-doubling room.</Td>
                  <Td>Until you clear your browser data</Td>
                  <Td>Always, when you join a room</Td>
                </tr>
                <tr>
                  <Td>
                    <code>doubly-intro-seen</code> (session storage)
                  </Td>
                  <Td>Doubly</Td>
                  <Td>Shows the homepage intro only once per visit.</Td>
                  <Td>Until you close the tab</Td>
                  <Td>Always, on the homepage, unless your device is set to reduce motion</Td>
                </tr>
                <tr>
                  <Td>
                    <code>doubly_web_visitor_id</code> (browser storage)
                  </Td>
                  <Td>Doubly, for PostHog</Td>
                  <Td>A random visitor ID for analytics.</Td>
                  <Td>Until you clear your browser data</Td>
                  <Td>Only after Accept</Td>
                </tr>
                <tr>
                  <Td>
                    <code>{'ph_<project>_posthog'}</code> (cookie)
                  </Td>
                  <Td>PostHog</Td>
                  <Td>
                    Your analytics IDs and session ID. It also holds the first web address you
                    opened, with any campaign tags or ad click IDs in it, and the site that sent
                    you. It is set for all of usedoubly.com, so the web app at app.usedoubly.com can
                    read it too. See below for what that means.
                  </Td>
                  <Td>1 year, renewed when it is updated</Td>
                  <Td>
                    Only after Accept on this website. The web app at app.usedoubly.com also sets it
                    after you click Accept there. Older versions of the web app set it without
                    asking (see below).
                  </Td>
                </tr>
                <tr>
                  <Td>
                    <code>{'ph_<project>_posthog'}</code> (browser storage)
                  </Td>
                  <Td>PostHog</Td>
                  <Td>
                    Analytics IDs, the site you first came from, campaign tags in the link, and
                    feature settings.
                  </Td>
                  <Td>Until you clear your browser data</Td>
                  <Td>Only after Accept</Td>
                </tr>
                <tr>
                  <Td>
                    <code>{'ph_<project>_posthog'}</code>, <code>{'ph_<project>_window_id'}</code>,{' '}
                    <code>{'ph_<project>_primary_window_exists'}</code> (session storage)
                  </Td>
                  <Td>PostHog</Td>
                  <Td>Where this visit came from, and which browser tab is which.</Td>
                  <Td>Until you close the tab</Td>
                  <Td>Only after Accept</Td>
                </tr>
                <tr>
                  <Td>
                    <code>{'dmn_chk_<id>'}</code> (cookie)
                  </Td>
                  <Td>PostHog</Td>
                  <Td>A test to find which domain to set its cookie on.</Td>
                  <Td>3 seconds</Td>
                  <Td>Only after Accept</Td>
                </tr>
                <tr>
                  <Td>
                    <code>{'__ph_opt_in_out_<project>'}</code> (browser storage)
                  </Td>
                  <Td>PostHog</Td>
                  <Td>Remembers that you turned PostHog off, or back on.</Td>
                  <Td>Until you clear your browser data</Td>
                  <Td>
                    When you click Reject after you had accepted, and again if you accept later
                  </Td>
                </tr>
                <tr>
                  <Td>Google Tag Manager</Td>
                  <Td>Google</Td>
                  <Td>
                    Loads the Meta Pixel. It sets no cookies of its own. Google keeps normal request
                    logs and deletes them within 14 days.
                  </Td>
                  <Td>No cookie</Td>
                  <Td>Only after Accept</Td>
                </tr>
                <tr>
                  <Td>
                    <code>_fbp</code> (cookie)
                  </Td>
                  <Td>Meta, loaded by Google Tag Manager</Td>
                  <Td>A browser ID, to measure visits from Meta ads.</Td>
                  <Td>90 days</Td>
                  <Td>Only after Accept</Td>
                </tr>
                <tr>
                  <Td>
                    <code>_fbc</code> (cookie)
                  </Td>
                  <Td>Meta, loaded by Google Tag Manager</Td>
                  <Td>Remembers the Meta ad click that brought you here.</Td>
                  <Td>90 days</Td>
                  <Td>Only after Accept, and only if the link has a Meta click ID</Td>
                </tr>
                <tr>
                  <Td>
                    <code>_rdt_uuid</code> (cookie)
                  </Td>
                  <Td>Reddit</Td>
                  <Td>A visitor ID, to measure visits from Reddit ads.</Td>
                  <Td>90 days, renewed on each visit</Td>
                  <Td>Only after Accept</Td>
                </tr>
                <tr>
                  <Td>
                    <code>_rdt_cid</code> (cookie)
                  </Td>
                  <Td>Reddit</Td>
                  <Td>Remembers the Reddit ad click that brought you here.</Td>
                  <Td>90 days, renewed on each visit</Td>
                  <Td>Only after Accept, and only if the link has a Reddit click ID</Td>
                </tr>
                <tr>
                  <Td>
                    <code>_rdt_em</code>, <code>_rdt_pn</code> (cookies)
                  </Td>
                  <Td>Reddit</Td>
                  <Td>Hashed email addresses and phone numbers the pixel found on the page.</Td>
                  <Td>90 days, renewed on each visit</Td>
                  <Td>Only after Accept, when it finds one</Td>
                </tr>
              </tbody>
            </table>
          </TableWrap>
          <Paragraph>
            Meta may also save some data in your browser storage. PostHog may add a few more keys in
            special cases, for example for surveys.
          </Paragraph>
          <Paragraph>
            <Strong>Changing your choice:</Strong> click &quot;Cookie settings&quot; in the footer
            of our pages. If you had accepted and now click Reject, PostHog stops sending data and
            saves a note that it is turned off. We delete the cookies these tools set on our site
            and the browser storage PostHog saved, and the page reloads without them. PostHog&apos;s
            session storage stays until you close the tab. Any browser storage Meta saved stays
            until you clear your browser data. Cookies that Google, Meta or Reddit keep on their own
            websites stay until they expire or you clear them.
          </Paragraph>

          <SubHeading>The web app at app.usedoubly.com</SubHeading>
          <Paragraph>
            After you sign in to the web app, a banner asks you to Accept or Reject. It shows until
            you pick one. Until you click Accept, PostHog does not start in the web app. It sends
            nothing and saves no PostHog cookie or browser storage. If you click Accept, PostHog
            starts right away. Section 2.4 lists what it gets.
          </Paragraph>
          <Paragraph>
            Older versions of the web app started PostHog without asking. If you used the web app
            before the banner was added, PostHog may still have its cookie and browser storage in
            your browser, with your Doubly user ID. Clicking Reject deletes them.
          </Paragraph>
          <Paragraph>
            Your choice in the web app is separate from your choice on usedoubly.com. They are two
            different websites, and each one saves its own choice. The choice is saved in your
            browser, not in your Doubly account. So you may see the banner on both websites. Accept
            or Reject on one does not change your choice on the other. The choice also applies to
            anyone else who signs in to the web app in the same browser. Signing out does not change
            it.
          </Paragraph>
          <Paragraph>
            <Strong>If you click Accept on both websites:</Strong> they share one PostHog cookie, so
            PostHog can link your visits to usedoubly.com to your Doubly account. Then what you do
            on usedoubly.com, including what you click and the email you give the Android waitlist,
            can be saved under your Doubly user ID. And the first page you opened on usedoubly.com,
            with its campaign tags and ad click IDs, and the site that sent you there, can be added
            to your Doubly analytics profile.
          </Paragraph>
          <Paragraph>
            Legal basis: consent. The items marked &quot;always&quot; below keep you signed in and
            remember your settings and your cookie choice, so they do not need consent.
          </Paragraph>

          <TableWrap label="Cookies and browser storage in the web app">
            <table className={tableClass}>
              <caption className="sr-only">
                Cookies and browser storage in the web app at app.usedoubly.com
              </caption>
              <thead>
                <tr>
                  <Th>Name or key</Th>
                  <Th>Provider</Th>
                  <Th>Purpose</Th>
                  <Th>Lifetime</Th>
                  <Th>When set</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>
                    <code>doubly_cookie_consent</code> (browser storage)
                  </Td>
                  <Td>Doubly</Td>
                  <Td>Remembers whether you clicked Accept or Reject in the web app.</Td>
                  <Td>Until you clear your browser data</Td>
                  <Td>Always, when you click Accept or Reject</Td>
                </tr>
                <tr>
                  <Td>
                    <code>{'sb-<project>-auth-token'}</code> (cookie, can be split into parts ending
                    in <code>.0</code>, <code>.1</code> and so on)
                  </Td>
                  <Td>Doubly, using Supabase</Td>
                  <Td>Keeps you signed in.</Td>
                  <Td>400 days, renewed while you use the app. Deleted when you sign out</Td>
                  <Td>Always, when you sign in</Td>
                </tr>
                <tr>
                  <Td>
                    <code>{'sb-<project>-auth-token-code-verifier'}</code> (cookie)
                  </Td>
                  <Td>Doubly, using Supabase</Td>
                  <Td>
                    A one-time secret that makes sure Google sign-in finishes in your browser.
                  </Td>
                  <Td>Until Google sign-in finishes, at most 400 days</Td>
                  <Td>Always, when you sign in with Google</Td>
                </tr>
                <tr>
                  <Td>
                    <code>doubly-locale</code> (cookie)
                  </Td>
                  <Td>Doubly</Td>
                  <Td>Remembers the language you picked.</Td>
                  <Td>1 year</Td>
                  <Td>Always, when you pick a language</Td>
                </tr>
                <tr>
                  <Td>
                    <code>doubly.webTheme</code> (browser storage)
                  </Td>
                  <Td>Doubly</Td>
                  <Td>Remembers the theme you picked.</Td>
                  <Td>Until you clear your browser data</Td>
                  <Td>Always, when you pick a theme</Td>
                </tr>
                <tr>
                  <Td>
                    <code>doubly.web.week.v1</code> (browser storage)
                  </Td>
                  <Td>Doubly</Td>
                  <Td>Remembers how you set up the Week view.</Td>
                  <Td>Until you clear your browser data</Td>
                  <Td>Always, when you change the Week view</Td>
                </tr>
                <tr>
                  <Td>
                    <code>doubly.web.storageGeneration</code> (browser storage)
                  </Td>
                  <Td>Doubly</Td>
                  <Td>
                    Notes that the web app already deleted data that an older version left in your
                    browser, so it does not do it again.
                  </Td>
                  <Td>Until you clear your browser data</Td>
                  <Td>Always, the first time you open the web app</Td>
                </tr>
                <tr>
                  <Td>
                    <code>{'ph_<project>_posthog'}</code> (cookie)
                  </Td>
                  <Td>PostHog</Td>
                  <Td>
                    Your analytics IDs and session ID, and whether PostHog has your Doubly user ID.
                    It also holds the first web address you opened, with any campaign tags or ad
                    click IDs in it, and the site that sent you. It is set for all of usedoubly.com,
                    so usedoubly.com can read it too. See above for what that means.
                  </Td>
                  <Td>1 year, renewed when it is updated. Deleted when you click Reject</Td>
                  <Td>After Accept in the web app. Older versions set it without asking</Td>
                </tr>
                <tr>
                  <Td>
                    <code>{'ph_<project>_posthog'}</code> (browser storage)
                  </Td>
                  <Td>PostHog</Td>
                  <Td>
                    Analytics IDs, the site you first came from, campaign tags in the link, and
                    feature settings.
                  </Td>
                  <Td>Until you clear your browser data or click Reject</Td>
                  <Td>After Accept in the web app. Older versions set it without asking</Td>
                </tr>
                <tr>
                  <Td>
                    <code>{'ph_<project>_posthog'}</code>, <code>{'ph_<project>_window_id'}</code>,{' '}
                    <code>{'ph_<project>_primary_window_exists'}</code> (session storage)
                  </Td>
                  <Td>PostHog</Td>
                  <Td>Where this visit came from, and which browser tab is which.</Td>
                  <Td>Until you close the tab or click Reject</Td>
                  <Td>Only after Accept in the web app</Td>
                </tr>
                <tr>
                  <Td>
                    <code>{'dmn_chk_<id>'}</code> (cookie)
                  </Td>
                  <Td>PostHog</Td>
                  <Td>A test to find which domain to set its cookie on.</Td>
                  <Td>3 seconds</Td>
                  <Td>Only after Accept in the web app</Td>
                </tr>
                <tr>
                  <Td>
                    <code>{'__ph_opt_in_out_<project>'}</code> (browser storage)
                  </Td>
                  <Td>PostHog</Td>
                  <Td>Stops PostHog from sending data while the page reloads after a Reject.</Td>
                  <Td>Deleted once the page has reloaded</Td>
                  <Td>When you click Reject after you had accepted in the web app</Td>
                </tr>
              </tbody>
            </table>
          </TableWrap>
          <Paragraph>
            PostHog may add a few more keys in special cases. The web app may also save a few more
            keys that its features need, for example progress points that are still waiting to be
            saved to your account. These are always set and do not need consent.
          </Paragraph>
          <Paragraph>
            <Strong>Changing your choice in the web app:</Strong> click &quot;Cookie settings&quot;
            in the web app&apos;s side menu. On a narrow screen, it is the cookie icon in the top
            bar. If you had accepted and now click Reject, PostHog stops sending data. If the web
            app is also open in another tab, that tab can still send one last event saying you left
            the page. We delete the PostHog cookies and browser storage in the table above,
            including the cookie set for all of usedoubly.com. Then the page reloads without
            PostHog. While your choice in the web app is Reject, the web app deletes these again
            each time you open it, even a PostHog cookie that usedoubly.com set.
          </Paragraph>
        </Section>

        <Section title="7. The Free Tools">
          <BulletItem label="Task Splitter">
            The task you type (2 to 200 characters) goes to OpenAI, with today&apos;s date and a
            fixed instruction, to create the steps. We add no user ID or IP address. OpenAI&apos;s
            API policy says it does not use this data to train its models, and keeps logs for abuse
            monitoring for 30 days.
          </BulletItem>
          <BulletItem label="Brain Dump">
            The text you type (3 to 4,000 characters) goes to our server. Our server sends it, with
            a fixed instruction, to the web address of Flowise, an AI workflow service that we ran
            on Render. That service is not running now. Render receives the request but has no
            service to pass it to. So no AI turns your text into a list, and the tool shows an
            error. We add no user ID or IP address.
          </BulletItem>
          <BulletItem label="Other tools">
            The timers, brown noise, Pick One and the Eisenhower Matrix keep their settings and your
            lists in your browser. See the table in section 6. If you clicked Accept, PostHog can
            get the text of a task or list item you click (section 6).
          </BulletItem>
          <Paragraph>Legal basis: contract. You use the tool to get a result.</Paragraph>
        </Section>

        <Section title="8. The Body-Doubling Room">
          <List>
            <li>
              The room cannot connect people right now, because the service it uses for this is
              turned off. So no one else can join you. The room does not send your name, goal,
              reflection, video or sound to anyone.
            </li>
            <li>
              When you join, the room asks to use your camera. If you turn on your microphone, it
              asks for that too. The room is not recorded.
            </li>
            <li>
              The name you type (up to 24 characters) and your emoji are saved in your browser for
              next time.
            </li>
            <li>If we turn the room back on, we will update this section first.</li>
          </List>
          <Paragraph>Legal basis: contract. You choose to join a room.</Paragraph>
        </Section>

        <Section title="9. The Android Waitlist">
          <Paragraph>
            If you join the Android waitlist, we use your email to tell you when Doubly comes to
            Android.
          </Paragraph>
          <List>
            <li>
              Your email goes to PostHog, as part of the sign-up event. PostHog only starts after
              you click Accept, so the form only works after that. If you have not clicked Accept,
              the form shows an error.
            </li>
            <li>
              The Reddit Pixel records a &quot;SignUp&quot;. Reddit&apos;s automatic matching can
              also send a hashed copy of the email you typed. See section 6.
            </li>
            <li>
              Your email stays in PostHog until you ask us to remove it, or until PostHog deletes
              old data under our account&apos;s settings.
            </li>
          </List>
          <Paragraph>Legal basis: consent. You ask to join the list.</Paragraph>
        </Section>

        <Section title="10. Who Receives Data">
          <Paragraph>These companies process data for us or receive it from Doubly.</Paragraph>
          <TableWrap label="Companies that receive data">
            <table className={tableClass}>
              <caption className="sr-only">Companies that receive data from Doubly</caption>
              <thead>
                <tr>
                  <Th>Provider</Th>
                  <Th>What they do and what they get</Th>
                  <Th>Where</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>Supabase</Td>
                  <Td>
                    Our database, sign-in, file storage, sign-in emails and server functions. Holds
                    your account data.
                  </Td>
                  <Td>United States (North Virginia)</Td>
                </tr>
                <tr>
                  <Td>Vercel</Td>
                  <Td>
                    Hosts usedoubly.com and app.usedoubly.com. Gets your requests and IP address.
                  </Td>
                  <Td>
                    Website server code runs in Washington, D.C., United States. Pages are served
                    from Vercel&apos;s worldwide network.
                  </Td>
                </tr>
                <tr>
                  <Td>OpenAI</Td>
                  <Td>
                    AI features (section 2.3), the Task Splitter, and imported calendar tasks.
                  </Td>
                  <Td>See their privacy policy</Td>
                </tr>
                <tr>
                  <Td>Render</Td>
                  <Td>
                    Hosts n8n (some in-app assistant and brain dump requests). It also receives the
                    website&apos;s Brain Dump requests, but no service runs there for them now
                    (section 7).
                  </Td>
                  <Td>See their privacy policy</Td>
                </tr>
                <tr>
                  <Td>Google Cloud</Td>
                  <Td>Our voice relay and Speech-to-Text. Gets your voice audio.</Td>
                  <Td>
                    Voice relay: United States (us-central1). Speech-to-Text: Google&apos;s global
                    service, so the country is not fixed.
                  </Td>
                </tr>
                <tr>
                  <Td>Google</Td>
                  <Td>
                    Google sign-in, Google Calendar (if you connect it), and address lookup on
                    Android. Gmail holds our inbox for the test check-in emails (section 2.7).
                    Google also stores the Doubly calendar on your iPhone if your default calendar
                    account is a Google account (section 3.2).
                  </Td>
                  <Td>See their privacy policy</Td>
                </tr>
                <tr>
                  <Td>Apple</Td>
                  <Td>
                    Sign in with Apple, App Store payments, address lookup on iPhone, and push
                    notifications. iCloud Calendar stores the Doubly calendar on your iPhone if your
                    default calendar account is iCloud (section 3.2). Live Activity updates (the
                    live card on your lock screen) carry the task title and space name.
                  </Td>
                  <Td>See their privacy policy</Td>
                </tr>
                <tr>
                  <Td>Expo</Td>
                  <Td>
                    Sends push notifications. Gets the text of each push and the task ID. The text
                    can include a task or habit name. It can also include the name of a person who
                    nudged you or added a task. The app also checks Expo for app updates.
                  </Td>
                  <Td>See their privacy policy</Td>
                </tr>
                <tr>
                  <Td>Browser push services</Td>
                  <Td>
                    Deliver web app notifications. Our message to them carries no content. The web
                    app then loads the content itself.
                  </Td>
                  <Td>Chosen by your browser</Td>
                </tr>
                <tr>
                  <Td>Twilio</Td>
                  <Td>
                    Phone calls. Gets your phone number, first name, task title and due time for
                    reminder calls, and turns your speech into text in the daily call. Voices come
                    from Amazon Polly and Google through Twilio.
                  </Td>
                  <Td>See their privacy policy</Td>
                </tr>
                <tr>
                  <Td>Meta (WhatsApp)</Td>
                  <Td>Delivers WhatsApp messages. Gets your number and messages with the bot.</Td>
                  <Td>See their privacy policy</Td>
                </tr>
                <tr>
                  <Td>PostHog</Td>
                  <Td>
                    Analytics, error tracking and session recordings (sections 2.4, 4 and 6), and
                    waitlist emails.
                  </Td>
                  <Td>United States (Virginia)</Td>
                </tr>
                <tr>
                  <Td>Cloudflare</Td>
                  <Td>
                    Runs the PostHog service at events.usedoubly.com. Passes website analytics.
                  </Td>
                  <Td>See their privacy policy</Td>
                </tr>
                <tr>
                  <Td>AppsFlyer</Td>
                  <Td>Ad measurement for the iPhone app (section 5).</Td>
                  <Td>See their privacy policy</Td>
                </tr>
                <tr>
                  <Td>RevenueCat</Td>
                  <Td>
                    Subscription status. Gets your user ID, purchases, device identifiers and your
                    AppsFlyer ID.
                  </Td>
                  <Td>See their privacy policy</Td>
                </tr>
                <tr>
                  <Td>Meta and Reddit (ads)</Td>
                  <Td>
                    Website pixels after you click Accept (section 6). Ad results from AppsFlyer
                    (section 5).
                  </Td>
                  <Td>See their privacy policy</Td>
                </tr>
                <tr>
                  <Td>Brevo</Td>
                  <Td>
                    Sends the trial reminder email and the check-in emails (section 2.7). Gets your
                    email address and the text of the email.
                  </Td>
                  <Td>See their privacy policy</Td>
                </tr>
                <tr>
                  <Td>SVG Repo (svgrepo.com)</Td>
                  <Td>
                    The avatar pictures load from svgrepo.com whenever an avatar is shown, on your
                    phone or on someone else&apos;s. So SVG Repo sees the IP address of whoever is
                    looking at it.
                  </Td>
                  <Td>See their privacy policy</Td>
                </tr>
              </tbody>
            </table>
          </TableWrap>
        </Section>

        <Section title="11. International Transfers">
          <Paragraph>
            Some of these providers store or process your data in the United States. For example,
            our database and PostHog are in the United States. When we transfer data from the EU to
            the United States, we rely on Standard Contractual Clauses. These are contract terms for
            sending data out of the EU, approved by the European Commission. Or, where the provider
            is certified, we rely on the EU-U.S. Data Privacy Framework. This is a program that lets
            certified US companies receive data from the EU.
          </Paragraph>
        </Section>

        <Section title="12. How Long We Keep Data">
          <List>
            <li>Your account data: as long as you have an account.</li>
            <li>
              Deleted tasks: a deleted task is only marked as deleted. It stays in our database,
              with any place saved on it, until you delete your account.
            </li>
            <li>
              Records of which notifications we sent: some are deleted after 60 days. Records of
              sent task reminders, nudges about shared tasks and trial reminder emails stay until
              you delete your account.
            </li>
            <li>Supabase server logs: 7 days.</li>
            <li>
              Database backups: we make one a day and keep each for 7 days. Data you delete can stay
              in a backup until it is replaced.
            </li>
            <li>
              Requests to OpenAI: up to 30 days at OpenAI. This covers every AI feature, including
              the in-app assistant, the planner, brain dumps, WhatsApp, the daily update call and
              the Task Splitter.
            </li>
            <li>n8n on Render: a record of each request it handled, for about 14 days.</li>
            <li>
              Check-in emails in our Gmail inbox (section 2.7): until we delete them. Email us and
              we will delete yours.
            </li>
            <li>
              PostHog, AppsFlyer, RevenueCat, Twilio, Meta (WhatsApp), Brevo and Vercel: each keeps
              data under its own rules and our account settings there. Email us and we will ask them
              to delete your data.
            </li>
            <li>
              Cookies and browser storage on usedoubly.com and in the web app: see the tables in
              section 6.
            </li>
          </List>

          <SubHeading>When you delete your account</SubHeading>
          <Paragraph>
            You can delete your account in the iPhone app&apos;s settings. This deletes your account
            and most data linked to it. That includes your profile, tasks you created, habits, mood
            check-ins, brain dumps, facts about your life, plans, focus sessions, daily call
            records, call schedules, your WhatsApp connection and messages, your Google Calendar
            connection, push tokens, feed posts, comments, likes and follows, failure reports, and
            your household membership.
          </Paragraph>
          <Paragraph>Some data stays after you delete your account:</Paragraph>
          <List>
            <li>
              <Strong>Why you deleted your account:</Strong> the reason, any note, your email,
              whether you had a paid subscription, and your app version, platform and language. We
              save this just before the deletion, so we can learn why people leave and handle later
              disputes.
            </li>
            <li>
              <Strong>Support messages:</Strong> with your email, so we can still reply to you.
            </li>
            <li>
              <Strong>Feature ideas you sent:</Strong> the text, and your WhatsApp number if you
              sent it there. They are no longer linked to your account.
            </li>
            <li>
              <Strong>Reports about your content:</Strong> with the copy of the reported content, as
              a safety record.
            </li>
            <li>
              <Strong>Your activity on other people&apos;s things:</Strong> notes you wrote on their
              tasks stay, no longer linked to you. Tasks other people assigned to you stay in their
              accounts.
            </li>
            <li>
              <Strong>A household with no other members, and its spaces.</Strong> The household name
              can include your first name, like &quot;Alex&apos;s Family&quot;.
            </li>
            <li>
              <Strong>Photos you posted to the feed.</Strong>
            </li>
            <li>
              <Strong>Data at other services:</Strong> deleting your account does not delete data
              held by PostHog, AppsFlyer or RevenueCat. It also does not remove Doubly&apos;s access
              at Google (see section 3.1). If you used Sign in with Apple, Doubly also stays in the
              list of apps that use your Apple Account. You can remove it in your Apple Account
              settings on your iPhone.
            </li>
          </List>
          <Paragraph>
            There is no fixed time limit for the records we keep from this list. We keep them only
            while we still need them for the reason given, and you can ask us to delete them.
          </Paragraph>
          <Paragraph>
            Email <MailLink /> with the subject &quot;Data Request&quot; and we will remove the
            household, your photos, and your data at PostHog, AppsFlyer and RevenueCat.
          </Paragraph>
        </Section>

        <Section title="13. Your Rights">
          <Paragraph>
            If you are in the EU, or the law where you live gives you these rights, you can:
          </Paragraph>
          <List>
            <li>
              <Strong>Access</Strong> your data and get a copy.
            </li>
            <li>
              <Strong>Correct</Strong> data that is wrong.
            </li>
            <li>
              <Strong>Delete</Strong> your data.
            </li>
            <li>
              <Strong>Restrict</Strong> how we use your data.
            </li>
            <li>
              <Strong>Move</Strong> your data: get it in a common format to give to another service
              (portability).
            </li>
            <li>
              <Strong>Object</Strong> to uses based on legitimate interests, including analytics,
              session recording and ad measurement.
            </li>
            <li>
              <Strong>Withdraw consent</Strong> at any time: for Apple&apos;s tracking prompt
              (section 5) in your iPhone&apos;s settings, for website cookies with &quot;Cookie
              settings&quot; in the footer of our pages, for web app cookies with &quot;Cookie
              settings&quot; in the web app (section 6), and for health-related answers by email.
            </li>
            <li>
              <Strong>Complain</Strong> to a data protection authority in the EU country where you
              live, where you work, or where you think the problem happened.
            </li>
          </List>
          <Paragraph>
            To use these rights, email <MailLink /> with the subject &quot;Data Request&quot;. We
            answer within one month. You can also delete your account yourself in the iPhone
            app&apos;s settings, using Delete Account.
          </Paragraph>
        </Section>

        <Section title="14. Automated Decisions">
          <Paragraph>
            Doubly makes no automated decisions about you that have legal effects or similarly
            significant effects. The AI suggests and creates tasks for you. We also check
            automatically whether you already had a free trial, so each person gets one.
          </Paragraph>
        </Section>

        <Section title="15. Children">
          <Paragraph>
            Doubly is for people 13 and older, as our{' '}
            <TextLink href="/terms">Terms of Use</TextLink> say. In many EU countries you must be
            14, 15 or 16 to give consent yourself, for example to website cookies. If you are
            younger than that age where you live, a parent must agree first. If you think a child
            under 13 uses Doubly, email <MailLink />.
          </Paragraph>
        </Section>

        <Section title="16. Subscriptions and Billing">
          <List>
            <li>Apple handles payment through the App Store. We do not get your card details.</li>
            <li>
              RevenueCat receives your purchase and subscription status, linked to your user ID.
            </li>
            <li>
              To give each person one free trial, we save a standard form of your email address with
              the trial record.
            </li>
            <li>
              If a renewal fails, we keep a record of when it failed and whether it was fixed.
            </li>
            <li>
              For renewals and cancelling, see our <TextLink href="/terms">Terms of Use</TextLink>.
            </li>
          </List>
          <Basis>
            Contract for payments and your subscription. Legitimate interests for the free trial
            check: we need it so each person gets only one free trial.
          </Basis>
        </Section>

        <Section title="17. Changes to This Policy">
          <Paragraph>
            When we change this policy, we update it on this page and change the &quot;Last
            updated&quot; date at the top. If a change is important, or changes how we use data from
            Google, we will tell you in the app or by email first. Before we use Google data in a
            new way, we will ask you again. Questions? Email <MailLink />.
          </Paragraph>
        </Section>
      </div>
    </div>
  );
}

const tableClass = 'w-full min-w-[36rem] border-collapse text-left text-sm text-charcoal-light';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 font-display text-xl font-semibold text-charcoal">{title}</h2>
      {children}
    </section>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-3 mt-6 text-lg font-semibold text-charcoal">{children}</h3>;
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-base leading-7 text-charcoal-light">{children}</p>;
}

function Basis({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-base leading-7 text-charcoal-light">
      <span className="font-semibold text-charcoal">Legal basis:</span> {children}
    </p>
  );
}

function List({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mb-4 list-disc space-y-2 ps-5 text-base leading-7 text-charcoal-light">
      {children}
    </ul>
  );
}

function Strong({ children }: { children: React.ReactNode }) {
  return <span className="font-semibold text-charcoal">{children}</span>;
}

function BulletItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <p className="mb-3 text-base leading-7 text-charcoal-light">
      <span className="font-semibold text-charcoal">{label}:</span> {children}
    </p>
  );
}

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="font-medium text-lavender-dark hover:underline">
      {children}
    </a>
  );
}

function MailLink() {
  return <TextLink href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</TextLink>;
}

// Focusable and labelled, so keyboard users can scroll a wide table on a narrow screen.
function TableWrap({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div role="region" aria-label={label} tabIndex={0} className="mb-4 overflow-x-auto">
      {children}
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th
      scope="col"
      className="border-b border-cream-dark px-3 py-2 align-bottom font-semibold text-charcoal"
    >
      {children}
    </th>
  );
}

function Td({ children }: { children: React.ReactNode }) {
  return <td className="border-b border-cream-dark px-3 py-2 align-top">{children}</td>;
}
