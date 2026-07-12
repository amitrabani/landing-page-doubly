import { NextRequest, NextResponse } from 'next/server';
import { applyGuards, fetchWithTimeout } from '@/lib/api-guard';
import { isLocale, defaultLocale, localeEnglishNames } from '@/i18n/config';

export const runtime = 'nodejs';

// Mirrors the TidyList `ai-task-split` edge function (mode: 'create'): same
// prompt, model, and temperature, so the web tool produces the same quality of
// breakdown as the app. The landing page calls OpenAI directly instead of the
// app's edge function because that function gates on a logged-in user JWT,
// which anonymous web visitors do not have.
const OPENAI_MODEL = process.env.OPENAI_SPLIT_MODEL || 'gpt-4o-mini';

const SYSTEM_PROMPT_CREATE = `
You are a task breakdown assistant for an ADHD-friendly household app.
You receive a free-form task description from a user and return a structured task.

For the task:
- If a clearly relevant iOS emoji fits, prefix the task title with it (e.g. "🧺 Do the laundry"). If no obvious emoji fits, do not force one.
- Break the task into 3-6 concrete, actionable subtasks in the order they should be performed.
- Each subtask must be a real action the user actively does. Do NOT include passive steps like "wait", "let it dry", "let it soak".
- Keep each subtask title short and concrete (under 60 characters). Avoid vague verbs like "handle" or "deal with".
- Estimate the active duration for each subtask as a short string (e.g. "5 minutes"). Use realistic time estimates.
- Infer urgency from the description: "high", "medium", or "low". If unclear, use null.
- Extract a due date in ISO 8601 format if the user mentioned one. Otherwise null.
- Extract a recurrence pattern as one of: "daily", "weekly", "monthly", "yearly", "none". If unclear, null.

Return ONLY valid JSON with the keys: task, subtasks, urgency, dueDate, recurrence.
Each item in "subtasks" must be an object with keys "subtask" (string) and "duration" (string).
Return a single JSON object for a single task (not an array).
`.trim();

const MAX_TASK_LENGTH = 200;
const MAX_SUBTASKS = 12;

type ParsedSubtask = { subtask?: unknown; text?: unknown; name?: unknown; duration?: unknown };

function pickString(...values: unknown[]): string {
  for (const v of values) {
    if (typeof v === 'string' && v.trim()) return v;
  }
  return '';
}

function normalize(parsed: Record<string, unknown>, fallbackTitle: string) {
  // The model may wrap multiple tasks under a "tasks" array; the web tool only
  // shows one, so collapse to the first.
  const source =
    Array.isArray((parsed as { tasks?: unknown }).tasks) &&
    (parsed as { tasks: unknown[] }).tasks.length > 0
      ? ((parsed as { tasks: Record<string, unknown>[] }).tasks[0] ?? {})
      : parsed;

  const subtasksRaw = source.subtasks;
  const subtasks = Array.isArray(subtasksRaw)
    ? subtasksRaw
        .map((st: ParsedSubtask, i: number) => ({
          text: pickString(st?.subtask, st?.text, st?.name, `Step ${i + 1}`).slice(0, 200),
          duration: typeof st?.duration === 'string' ? st.duration.slice(0, 32) : null,
        }))
        .filter((st) => st.text.trim().length > 0)
        .slice(0, MAX_SUBTASKS)
    : [];

  const urgencyRaw = source.urgency;
  const urgency =
    urgencyRaw === 'low' || urgencyRaw === 'medium' || urgencyRaw === 'high' ? urgencyRaw : null;

  return {
    title: pickString(source.task, source.title, fallbackTitle).slice(0, 200) || fallbackTitle,
    subtasks,
    urgency,
  };
}

export async function POST(request: NextRequest) {
  const guarded = await applyGuards(request, {
    rateLimit: { key: 'split-task', limit: 8, windowMs: 60_000 },
    maxBodyBytes: 2_048,
  });
  if (!guarded.ok) return guarded.res;

  const body = guarded.body as { task?: unknown; locale?: unknown } | null;
  const task = typeof body?.task === 'string' ? body.task.trim() : '';

  if (!task || task.length < 2 || task.length > MAX_TASK_LENGTH) {
    return NextResponse.json({ error: 'Invalid task' }, { status: 400 });
  }

  // The landing page's localized homepages send their locale so the AI answers
  // in the page's language. English (or an absent/unknown locale, e.g. the
  // English /tools/task-splitter page) leaves the prompt unchanged.
  const localeRaw = typeof body?.locale === 'string' ? body.locale : '';
  const locale = isLocale(localeRaw) ? localeRaw : defaultLocale;

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error('Task split failed: OPENAI_API_KEY is not set');
    return NextResponse.json({ error: 'Failed to split task' }, { status: 502 });
  }

  const today = new Date().toISOString().slice(0, 10);
  const languageDirective =
    locale === defaultLocale
      ? ''
      : `\n\nRespond entirely in ${localeEnglishNames[locale]}. The task title and every subtask must be written in ${localeEnglishNames[locale]}, regardless of the language of the input.`;
  const systemPrompt = `${SYSTEM_PROMPT_CREATE}\n\nToday's date is ${today}. Resolve relative dates (e.g. "tomorrow", "this weekend") relative to this date.${languageDirective}`;

  try {
    const response = await fetchWithTimeout(
      'https://api.openai.com/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: OPENAI_MODEL,
          temperature: 0.4,
          response_format: { type: 'json_object' },
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: task },
          ],
        }),
      },
      25_000,
    );

    if (!response.ok) {
      throw new Error(`Upstream ${response.status}`);
    }

    const result = await response.json();
    const content = result?.choices?.[0]?.message?.content;
    if (typeof content !== 'string' || !content.trim()) {
      throw new Error('Unexpected response shape');
    }

    const parsed = JSON.parse(content);
    if (!parsed || typeof parsed !== 'object') {
      throw new Error('Model output was not a JSON object');
    }

    return NextResponse.json(normalize(parsed as Record<string, unknown>, task));
  } catch (error) {
    console.error('Task split failed:', error);
    return NextResponse.json({ error: 'Failed to split task' }, { status: 502 });
  }
}
