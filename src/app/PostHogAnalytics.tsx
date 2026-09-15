'use client';

import posthog from 'posthog-js';
import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Resolve a stable visitor id BEFORE posthog.init so we can bootstrap as
// identified. The project has defaultIdentifiedOnly=true; if the SDK starts
// anonymous and identifies later, the initial events (and the recording's
// session start) get dropped server-side and no person is ever created.
export const VISITOR_ID_STORAGE_KEY = 'doubly_web_visitor_id';

function resolveVisitorId(): string {
  try {
    const existing = window.localStorage.getItem(VISITOR_ID_STORAGE_KEY);
    if (existing) return existing;
    const fresh =
      typeof crypto !== 'undefined' && 'randomUUID' in crypto
        ? `web_${crypto.randomUUID()}`
        : `web_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    window.localStorage.setItem(VISITOR_ID_STORAGE_KEY, fresh);
    return fresh;
  } catch {
    return `web_${Date.now()}_${Math.random().toString(36).slice(2)}`;
  }
}

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY?.trim();
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST?.trim();

function initPostHog(apiKey: string) {
  const visitorId = resolveVisitorId();
  posthog.init(apiKey, {
    api_host: POSTHOG_HOST || 'https://events.usedoubly.com',
    ui_host: 'https://us.posthog.com',
    person_profiles: 'always',
    capture_pageview: false, // we capture manually below
    capture_pageleave: true,
    disable_session_recording: true, // temporarily paused, remove to re-enable
    bootstrap: {
      distinctID: visitorId,
      isIdentifiedID: true,
    },
  });
  // Rejecting cookies after accepting them opts PostHog out (ConsentedTrackers), and
  // that opt-out is persisted. Accepting again has to switch capture back on.
  if (posthog.has_opted_out_capturing()) {
    posthog.opt_in_capturing({ captureEventName: false });
  }
}

function PostHogPageView({ apiKey }: { apiKey: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Init here rather than in a parent effect: a parent's effects run after its
    // children's, and a capture before init is dropped, which would lose the
    // first $pageview.
    if (!posthog.__loaded) initPostHog(apiKey);
    if (pathname) {
      let url = window.origin + pathname;
      if (searchParams.toString()) {
        url = url + '?' + searchParams.toString();
      }
      posthog.capture('$pageview', { $current_url: url });
    }
  }, [apiKey, pathname, searchParams]);

  return null;
}

// Rendered only by ConsentedTrackers, so nothing here (not even the visitor id)
// runs before the visitor accepts cookies.
export default function PostHogAnalytics() {
  if (!POSTHOG_KEY) return null;

  return (
    <Suspense fallback={null}>
      <PostHogPageView apiKey={POSTHOG_KEY} />
    </Suspense>
  );
}
