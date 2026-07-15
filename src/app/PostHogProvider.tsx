'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider, usePostHog } from 'posthog-js/react';
import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Resolve a stable visitor id BEFORE posthog.init so we can bootstrap as
// identified. The project has defaultIdentifiedOnly=true; if the SDK starts
// anonymous and identifies later, the initial events (and the recording's
// session start) get dropped server-side and no person is ever created.
function resolveVisitorId(): string {
  const STORAGE_KEY = 'doubly_web_visitor_id';
  try {
    const existing = window.localStorage.getItem(STORAGE_KEY);
    if (existing) return existing;
    const fresh =
      typeof crypto !== 'undefined' && 'randomUUID' in crypto
        ? `web_${crypto.randomUUID()}`
        : `web_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    window.localStorage.setItem(STORAGE_KEY, fresh);
    return fresh;
  } catch {
    return `web_${Date.now()}_${Math.random().toString(36).slice(2)}`;
  }
}

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY?.trim();
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST?.trim();

if (typeof window !== 'undefined' && POSTHOG_KEY) {
  const visitorId = resolveVisitorId();
  posthog.init(POSTHOG_KEY, {
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
}

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const ph = usePostHog();

  useEffect(() => {
    if (pathname && ph) {
      let url = window.origin + pathname;
      if (searchParams.toString()) {
        url = url + '?' + searchParams.toString();
      }
      ph.capture('$pageview', { $current_url: url });
    }
  }, [pathname, searchParams, ph]);

  return null;
}

export default function PostHogProvider({ children }: { children: React.ReactNode }) {
  if (!POSTHOG_KEY) {
    return <>{children}</>;
  }

  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </PHProvider>
  );
}
