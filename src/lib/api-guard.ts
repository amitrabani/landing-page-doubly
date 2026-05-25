import { NextRequest, NextResponse } from 'next/server';

const SITE_ORIGIN = 'https://usedoubly.com';
const ALLOWED_ORIGINS = new Set([
  SITE_ORIGIN,
  'https://www.usedoubly.com',
  'http://localhost:3000',
  'http://localhost:3001',
]);

const BOT_UA_PATTERNS = [
  /\bcurl\//i,
  /\bwget\//i,
  /\bpython-requests\//i,
  /\bpython-urllib\//i,
  /\bgo-http-client\//i,
  /\bjava\//i,
  /\bokhttp\//i,
  /\bnode-fetch\//i,
  /\baxios\//i,
  /\bpostmanruntime\//i,
  /\binsomnia\//i,
  /\bscrapy\//i,
  /\bheadlesschrome\//i,
];

type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

function getClientIp(req: NextRequest): string {
  const xff = req.headers.get('x-forwarded-for');
  if (xff) return xff.split(',')[0].trim();
  return req.headers.get('x-real-ip') || 'unknown';
}

export function clientIp(req: NextRequest): string {
  return getClientIp(req);
}

export function checkRateLimit(
  req: NextRequest,
  key: string,
  limit: number,
  windowMs: number,
): { ok: true } | { ok: false; retryAfter: number } {
  const ip = getClientIp(req);
  const bucketKey = `${key}:${ip}`;
  const now = Date.now();
  const existing = buckets.get(bucketKey);

  if (!existing || existing.resetAt < now) {
    buckets.set(bucketKey, { count: 1, resetAt: now + windowMs });
    return { ok: true };
  }

  if (existing.count >= limit) {
    return { ok: false, retryAfter: Math.ceil((existing.resetAt - now) / 1000) };
  }

  existing.count += 1;
  return { ok: true };
}

function isAllowedOrigin(value: string | null): boolean {
  if (!value) return false;
  try {
    const url = new URL(value);
    return ALLOWED_ORIGINS.has(`${url.protocol}//${url.host}`);
  } catch {
    return false;
  }
}

export function checkSameOrigin(req: NextRequest): boolean {
  if (process.env.NODE_ENV !== 'production') return true;
  const origin = req.headers.get('origin');
  if (origin && isAllowedOrigin(origin)) return true;
  const referer = req.headers.get('referer');
  if (referer && isAllowedOrigin(referer)) return true;
  return false;
}

export function checkUserAgent(req: NextRequest): boolean {
  const ua = req.headers.get('user-agent') || '';
  if (!ua) return false;
  if (ua.length < 8 || ua.length > 1024) return false;
  return !BOT_UA_PATTERNS.some((p) => p.test(ua));
}

export function checkContentType(req: NextRequest): boolean {
  const ct = req.headers.get('content-type') || '';
  return ct.startsWith('application/json');
}

type GuardOptions = {
  rateLimit: { key: string; limit: number; windowMs: number };
  maxBodyBytes: number;
};

export async function applyGuards(
  req: NextRequest,
  opts: GuardOptions,
): Promise<{ ok: true; body: unknown } | { ok: false; res: NextResponse }> {
  if (req.method !== 'POST') {
    return { ok: false, res: NextResponse.json({ error: 'Method not allowed' }, { status: 405 }) };
  }

  if (!checkContentType(req)) {
    return { ok: false, res: NextResponse.json({ error: 'Bad request' }, { status: 400 }) };
  }

  if (!checkSameOrigin(req)) {
    return { ok: false, res: NextResponse.json({ error: 'Forbidden' }, { status: 403 }) };
  }

  if (!checkUserAgent(req)) {
    return { ok: false, res: NextResponse.json({ error: 'Forbidden' }, { status: 403 }) };
  }

  const contentLength = Number(req.headers.get('content-length') || '0');
  if (contentLength && contentLength > opts.maxBodyBytes) {
    return {
      ok: false,
      res: NextResponse.json({ error: 'Payload too large' }, { status: 413 }),
    };
  }

  const limit = checkRateLimit(req, opts.rateLimit.key, opts.rateLimit.limit, opts.rateLimit.windowMs);
  if (!limit.ok) {
    return {
      ok: false,
      res: NextResponse.json(
        { error: 'Too many requests' },
        { status: 429, headers: { 'Retry-After': String(limit.retryAfter) } },
      ),
    };
  }

  let raw: string;
  try {
    raw = await req.text();
  } catch {
    return { ok: false, res: NextResponse.json({ error: 'Bad request' }, { status: 400 }) };
  }
  if (raw.length > opts.maxBodyBytes) {
    return { ok: false, res: NextResponse.json({ error: 'Payload too large' }, { status: 413 }) };
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return { ok: false, res: NextResponse.json({ error: 'Bad request' }, { status: 400 }) };
  }

  return { ok: true, body };
}

export async function fetchWithTimeout(
  url: string,
  init: RequestInit,
  timeoutMs: number,
): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}
