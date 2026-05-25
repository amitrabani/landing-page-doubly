import { NextRequest, NextResponse } from 'next/server';
import { applyGuards, fetchWithTimeout } from '@/lib/api-guard';

export const runtime = 'nodejs';

const FLOWISE_BASE_URL =
  process.env.FLOWISE_BASE_URL || 'https://flowise-docker-lwys.onrender.com';
const FLOWISE_PREDICTION_ID =
  process.env.FLOWISE_PREDICTION_ID || 'dd9e9b64-3d88-45d0-94b9-8bb62f3576be';

const BRAIN_DUMP_PROMPT = `
You are a task extraction assistant for an ADHD-friendly app called Doubly.

You will receive a messy brain dump - raw text that a user typed to get thoughts out of their head.
Your job is to extract only **actionable tasks** from the text.

Rules:
- Extract ONLY concrete, actionable tasks (things someone can do).
- Ignore emotions, reflections, venting, and observations - those are valid but not tasks.
- If there is a clearly relevant iOS emoji for the task, add it at the beginning of the task title (e.g. "🧹 Clean the kitchen", "📞 Call dentist"). If no obvious emoji fits, do NOT add one - just use the plain task title.
- Keep task titles short and clear (under 60 characters).
- Return between 0 and 10 tasks. If there are no actionable items, return an empty array.
- Do NOT invent tasks that aren't implied by the text.

IMPORTANT:
Respond ONLY with a JSON array of task title strings. No additional text.

Example input: "I keep forgetting to call the dentist and the kitchen is a mess. Also feeling really overwhelmed today. Need to buy groceries for dinner tonight."
Example output: ["📞 Call the dentist", "🧹 Clean the kitchen", "🛒 Buy groceries for dinner"]

Example input: "Had a great day today, feeling proud of myself for finishing the laundry."
Example output: []
`;

const MAX_DUMP_LENGTH = 4000;

export async function POST(request: NextRequest) {
  const guarded = await applyGuards(request, {
    rateLimit: { key: 'brain-dump', limit: 6, windowMs: 60_000 },
    maxBodyBytes: 16_384,
  });
  if (!guarded.ok) return guarded.res;

  const body = guarded.body as { text?: unknown } | null;
  const text = typeof body?.text === 'string' ? body.text.trim() : '';

  if (!text || text.length < 3 || text.length > MAX_DUMP_LENGTH) {
    return NextResponse.json({ error: 'Invalid text' }, { status: 400 });
  }

  try {
    const response = await fetchWithTimeout(
      `${FLOWISE_BASE_URL}/api/v1/prediction/${FLOWISE_PREDICTION_ID}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: `${BRAIN_DUMP_PROMPT}\n\nBrain dump:\n${text}`,
        }),
      },
      25_000,
    );

    if (!response.ok) {
      throw new Error(`Upstream ${response.status}`);
    }

    const result: Record<string, unknown> = await response.json();
    const firstValue = Object.values(result)[0];
    if (typeof firstValue !== 'string') {
      throw new Error('Unexpected response shape');
    }

    const jsonMatch = firstValue.match(/\[[\s\S]*\]/);
    const tasks: string[] = [];
    if (jsonMatch) {
      try {
        const parsed: unknown = JSON.parse(jsonMatch[0]);
        if (Array.isArray(parsed)) {
          for (const item of parsed) {
            if (typeof item === 'string' && item.trim()) {
              tasks.push(item.trim().slice(0, 80));
              if (tasks.length >= 10) break;
            }
          }
        }
      } catch {
        // fall through with empty tasks
      }
    }

    return NextResponse.json({ tasks });
  } catch (error) {
    console.error('Brain dump extraction failed:', error);
    return NextResponse.json({ error: 'Failed to extract tasks' }, { status: 502 });
  }
}
