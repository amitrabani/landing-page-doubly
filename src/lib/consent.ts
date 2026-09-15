// The visitor's cookie choice. Every tracker waits behind it
// (src/app/ConsentedTrackers.tsx) and the cookie banner shows while it is
// missing. The privacy policy is written against this contract: the choice is
// stored under STORAGE_KEY as 'granted' or 'denied', and nothing is written
// before the visitor picks one.
//
// The read* functions and subscribeConsent are shaped for useSyncExternalStore.
// Callers pass consentServerSnapshot, so the server and the hydration render show
// no banner and load no tracker; storage is only read after hydration.

type ConsentChoice = 'granted' | 'denied';
type ConsentBanner = 'asking' | 'reopened';

const STORAGE_KEY = 'doubly_cookie_consent';

const listeners = new Set<() => void>();

// Holds the choice only when storage refused to save it, so the click still
// works for this page view. When storage works, only storage holds the choice,
// so other tabs and pages restored from the back/forward cache read the same one.
let unsavedChoice: ConsentChoice | null = null;

// The "Cookie settings" button that reopened the banner, or null. Focus goes
// back to it once the visitor picks.
let reopenedFrom: HTMLElement | null = null;

function notifyListeners(): void {
  for (const listener of listeners) listener();
}

// A choice made in another tab.
function handleStorage(event: StorageEvent): void {
  if (event.key === STORAGE_KEY) notifyListeners();
}

// A page restored from the back/forward cache kept its old render. The choice
// may have changed on the page the visitor went back from.
function handlePageShow(event: PageTransitionEvent): void {
  if (event.persisted) notifyListeners();
}

export function subscribeConsent(listener: () => void): () => void {
  if (listeners.size === 0) {
    window.addEventListener('storage', handleStorage);
    window.addEventListener('pageshow', handlePageShow);
  }
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('pageshow', handlePageShow);
    }
  };
}

export const consentServerSnapshot = () => null;

export function readConsent(): ConsentChoice | null {
  if (unsavedChoice) return unsavedChoice;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'granted' || stored === 'denied' ? stored : null;
  } catch {
    return null;
  }
}

/** Null while the banner is closed. */
export function readConsentBanner(): ConsentBanner | null {
  if (reopenedFrom) return 'reopened';
  return readConsent() === null ? 'asking' : null;
}

export function writeConsent(choice: ConsentChoice): void {
  const trigger = reopenedFrom;
  reopenedFrom = null;
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
    unsavedChoice = null;
  } catch {
    unsavedChoice = choice;
  }
  notifyListeners();
  if (trigger?.isConnected) trigger.focus();
}

export function reopenConsentBanner(trigger: HTMLElement): void {
  reopenedFrom = trigger;
  notifyListeners();
}
