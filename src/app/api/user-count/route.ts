import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
// Recompute per request so the number is always current (it only changes once an
// hour anyway). no-store keeps CDNs from pinning a stale value.
export const dynamic = 'force-dynamic';

// Member count is served from here so the increment logic lives on the backend,
// not in the client bundle. The base sits above the live app DB's signed-up
// count on purpose: there are more members in the legacy TidyList database that
// a live DB count would miss. From the base it climbs +1 every hour.
const BASE_COUNT = 470;
const EPOCH = Date.UTC(2026, 6, 11); // 2026-07-11, the day this base was set
const STEP_MS = 60 * 60 * 1000; // +1 every hour

export async function GET() {
  const count = BASE_COUNT + Math.max(0, Math.floor((Date.now() - EPOCH) / STEP_MS));
  return NextResponse.json({ count }, { headers: { 'Cache-Control': 'no-store' } });
}
