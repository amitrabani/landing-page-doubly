# PostHog Session Recording — Web Not Surfacing

## Problem

`usedoubly.com` and the TidyList mobile app share one PostHog project
(token `phc_wIYXRX44wlJDOEZCmGAeFKLKiVWjlqqz6umDtXTPkrE`, project id `354588`).
Mobile recordings appear in PostHog Session Replay. **Web recordings do not**,
despite the web SDK successfully uploading snapshot data.

## What we verified is working

- Both projects use the same PostHog key (confirmed via `.env.local` and TidyList `.env`).
- Vercel prod has `NEXT_PUBLIC_POSTHOG_KEY` set for Production + Development.
- Project-level toggles "Record user sessions" (web) and mobile session replay
  are both ON in PostHog settings.
- URL trigger configured: regex `https:\/\/usedoubly\.com\/.*`
  (the PostHog UI URL tester anchors the regex and falsely reports no match;
  the actual SDK uses substring `.test()` so the trigger DOES fire on prod).
- URL blocklist configured: `^localhost$` (does not affect prod).
- `posthog-recorder.js` (v1.363.4) loads on the live site.
- `_POSTHOG_REMOTE_CONFIG` is populated with correct sessionRecording config
  (urlTriggers, sampleRate: null, minimumDurationMilliseconds: null).
- Network tab on prod shows **many successful `POST /s/` requests, all 200**
  — snapshot data is being captured and accepted by PostHog ingestion.
- `/e/` events also fire (manual `$pageview` captures from `PostHogPageView`).
- TidyList persons + recordings appear in the project, so the project is
  configured correctly server-side.

## Suspicious observations

- `window.posthog` is `undefined` on prod. Only `__PosthogExtensions__`,
  `_POSTHOG_REMOTE_CONFIG`, and `extendPostHogWithSurveys` are exposed.
  Likely explained by Next.js bundling the SDK inside a client chunk —
  `posthog.init()` still runs and the SDK still makes network calls, it just
  isn't attached to `window`. Not necessarily a smoking gun.
- Remote config returns `"defaultIdentifiedOnly": true` at the project level.

## Things we tried

| # | Change | Result |
|---|--------|--------|
| 1 | Confirmed both projects share same key | already true, ruled out as cause |
| 2 | Loosened URL trigger regex (`.*usedoubly\.com.*`) | not needed — SDK already matches |
| 3 | `posthog.identify(posthog.get_distinct_id())` after init (commit `6241037`) | No-op. PostHog does not promote the existing anonymous distinct_id to "identified" when you identify with the same ID. No new persons created. |
| 4 | Switched `person_profiles: 'identified_only'` → `'always'` (commit `fcb5b5a`) | Pushed. Pending verification after Vercel deploy. |

## Current state

- Latest commit on `main`: `fcb5b5a` ("Switch web PostHog to person_profiles: 'always'")
- Waiting on Vercel deploy + fresh incognito visit to confirm whether
  `person_profiles: 'always'` makes web recordings appear.
- If it still doesn't work, the cause is **not** the identified_only setting.

## Open hypotheses if `'always'` doesn't fix it

1. **PostHog requires at least one captured event tied to the session before
   it indexes the recording.** Events ARE firing (`/e/` requests visible), so
   this should be satisfied — but worth confirming the `$pageview` event
   actually has the same `$session_id` as the `/s/` snapshots. Check a `/s/`
   request payload vs an `/e/` payload in DevTools.
2. **Recording quota exhausted at the project level.** Free tier caps replays
   at 5,000/month. Check Settings → Billing & Usage → Session replay line.
   If at 100%, the SDK keeps uploading but PostHog drops them silently.
3. **An org-level "Record anonymous sessions" toggle is off.** Some PostHog
   plans gate anonymous replay separately. Search project settings for
   anything about anonymous users / unidentified sessions.
4. **CDN / Vercel cache serving stale JS bundle.** Verify the deployed
   `_next/static/.../*.js` actually contains `person_profiles:"always"` and
   not the old `"identified_only"` string.
5. **Snapshot ingestion is succeeding but assigned to a `distinct_id` that
   never gets a person profile.** With `'always'` this shouldn't happen, but
   if PostHog's session-stitching is broken for this project, recordings
   could be orphaned.
6. **Different SDK version mismatch between recorder.js (loaded from CDN
   v1.363.4) and the bundled posthog-js client.** Check the version in
   `package.json` — if drastically different, upgrade.

## Next diagnostic steps

1. Confirm Vercel built commit `fcb5b5a` (Deployments tab).
2. Hard refresh usedoubly.com in incognito, then in DevTools Network:
   - Click one `/s/` request → Payload → confirm `$session_id` value.
   - Click one `/e/` request → Payload → confirm `$session_id` value.
   - **They must match.** If they differ, session stitching is the bug.
3. In PostHog → People → Persons, filter by "Created this hour" — see if
   any new anonymous web persons appear after the deploy.
4. Check Settings → Billing & Usage for session replay quota.
