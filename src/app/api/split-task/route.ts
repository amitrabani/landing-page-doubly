import { NextRequest, NextResponse } from 'next/server';

const FLOWISE_BASE_URL =
  process.env.FLOWISE_BASE_URL || 'https://flowise-docker-lwys.onrender.com';

const FLOWISE_PREDICTION_ID = 'dd9e9b64-3d88-45d0-94b9-8bb62f3576be';

const taskCreatePrompt = `
  You are an assistant receiving task descriptions from a user, and breaking them down into JSON format.

  For each task, perform the following:
  - If there is a clearly relevant iOS emoji for the task, add it at the beginning of the task title (e.g. "🧺 Do the laundry", "🍳 Cook dinner"). If no obvious emoji fits, do NOT add one — just use the plain task title.
  - Break down the task into clear, actionable subtasks.
  - order the subtasks in the order they should be performed.
  - Estimate the time required for active, user-involved task completion.
  - Do not include passive actions like "waiting".
  - Determine the urgency and set the due date based on the text provided.
  - Set the recurrence of the task based on the provided details.

  If specific details are missing, follow these rules:
  - If urgency is not specified, Assume "null".
  - If no due date is provided, Assume "null".
  - If the due date is today, set the urgency to "high."
  - If no duration is provided, Assume "null".
  - If recurrence is not specified, Assume "null".

  Urgency can be: "medium", "low", or "high".

  When estimating durations:
  Use realistic time estimates based on typical human behavior and the nature of the task.
  Avoid overestimating durations for simple tasks; apply common sense to ensure time estimates are practical.

  **IMPORTANT:**
  - Always return a single JSON object (not an array).
  - Respond ONLY with the JSON. Do not include any additional text or explanations.

  example of fields in the JSON:
  "task": "Do the laundry",
  "subtasks": [
    { "subtask": "Gather dirty clothes", "duration": "3 minutes" },
    { "subtask": "Sort whites and colors", "duration": "2 minutes" }
  ],
  "urgency": "medium",
  "dueDate": null,
  "recurrence": null
`;

export async function POST(request: NextRequest) {
  try {
    const { task } = await request.json();

    if (!task || typeof task !== 'string' || task.length > 200) {
      return NextResponse.json({ error: 'Invalid task' }, { status: 400 });
    }

    const response = await fetch(
      `${FLOWISE_BASE_URL}/api/v1/prediction/${FLOWISE_PREDICTION_ID}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: `${taskCreatePrompt}\n\nTask: ${task}`,
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`Flowise responded with ${response.status}`);
    }

    const result: Record<string, unknown> = await response.json();
    const firstValue = Object.values(result)[0];

    if (typeof firstValue !== 'string') {
      throw new Error('Unexpected response shape');
    }

    // Extract JSON from response (handle markdown code blocks)
    const jsonMatch = firstValue.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('No JSON found in response');
    }

    const parsed = JSON.parse(jsonMatch[0]);

    // Normalize the response
    const normalized = {
      title: parsed.task || task,
      subtasks: Array.isArray(parsed.subtasks)
        ? parsed.subtasks.map((st: { subtask?: string; text?: string; duration?: string }, i: number) => ({
            text: st.subtask || st.text || `Step ${i + 1}`,
            duration: st.duration || null,
          }))
        : [],
      urgency: parsed.urgency || null,
    };

    return NextResponse.json(normalized);
  } catch (error) {
    console.error('Task split failed:', error);
    return NextResponse.json(
      { error: 'Failed to split task' },
      { status: 500 },
    );
  }
}
