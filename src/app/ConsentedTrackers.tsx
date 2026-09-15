'use client';

import posthog from 'posthog-js';
import { useEffect, useRef, useSyncExternalStore } from 'react';
import ScrollDepthTracker from '@/components/ScrollDepthTracker';
import { consentServerSnapshot, readConsent, subscribeConsent } from '@/lib/consent';
import { GoogleTagManager } from './GoogleTagManager';
import PostHogAnalytics, { VISITOR_ID_STORAGE_KEY } from './PostHogAnalytics';
import { RedditPixel } from './RedditPixel';

// Cookies and storage keys the trackers write on this site. Cookies Google, Meta
// and Reddit keep on their own domains cannot be removed from this page.
const TRACKER_COOKIE_NAME = /^(ph_|_ga|_gid|_gcl_|_rdt_|_fbp$|_fbc$)/;
const TRACKER_STORAGE_KEY = /^ph_/;

function clearTrackerStorage(): void {
  try {
    for (const key of Object.keys(window.localStorage)) {
      if (TRACKER_STORAGE_KEY.test(key) || key === VISITOR_ID_STORAGE_KEY) {
        window.localStorage.removeItem(key);
      }
    }
  } catch {
    // Storage is blocked, so the trackers could not have written to it either.
  }
  const hostname = window.location.hostname;
  const siteDomain = hostname.split('.').slice(-2).join('.');
  for (const cookie of document.cookie.split(';')) {
    const name = cookie.split('=')[0].trim();
    if (!TRACKER_COOKIE_NAME.test(name)) continue;
    const expired = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    document.cookie = expired;
    // PostHog and Google write some cookies for the whole site domain.
    if (hostname.includes('.')) document.cookie = `${expired}; domain=.${siteDomain}`;
  }
}

// The only place trackers render. Until the visitor accepts cookies nothing here
// loads, so no tracker request leaves the page. Accepting mounts them in the same
// page view, no reload needed.
export default function ConsentedTrackers() {
  const granted =
    useSyncExternalStore(subscribeConsent, readConsent, consentServerSnapshot) === 'granted';
  const trackersMounted = useRef(false);

  // While the choice is Reject, remove what the trackers left behind from an
  // earlier Accept. That covers Reject on this page, a choice made in another
  // tab, and a page restored from the back/forward cache. PostHog can be switched
  // off, but Tag Manager and the Reddit pixel cannot be unloaded from a running
  // page, so a page that loaded them reloads without them.
  useEffect(() => {
    if (granted) {
      trackersMounted.current = true;
      return;
    }
    if (readConsent() !== 'denied') return;
    if (posthog.__loaded) posthog.opt_out_capturing();
    clearTrackerStorage();
    if (trackersMounted.current) window.location.reload();
  }, [granted]);

  if (!granted) return null;

  return (
    <>
      <GoogleTagManager />
      <RedditPixel />
      <PostHogAnalytics />
      <ScrollDepthTracker />
    </>
  );
}
