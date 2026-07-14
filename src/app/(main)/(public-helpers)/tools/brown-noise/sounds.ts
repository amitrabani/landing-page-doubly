export type SoundType = 'brown' | 'pink' | 'white';

const NOISE_SECONDS = 4;

function makeStereoBuffer(ctx: AudioContext, seconds: number): AudioBuffer {
  return ctx.createBuffer(2, Math.floor(ctx.sampleRate * seconds), ctx.sampleRate);
}

function fillWhite(channel: Float32Array): void {
  for (let i = 0; i < channel.length; i++) {
    channel[i] = Math.random() * 2 - 1;
  }
}

function fillBrown(channel: Float32Array): void {
  let last = 0;
  for (let i = 0; i < channel.length; i++) {
    const w = Math.random() * 2 - 1;
    last = (last + 0.02 * w) / 1.02;
    channel[i] = last * 3.5;
  }
}

function fillPink(channel: Float32Array): void {
  let b0 = 0,
    b1 = 0,
    b2 = 0,
    b3 = 0,
    b4 = 0,
    b5 = 0,
    b6 = 0;
  for (let i = 0; i < channel.length; i++) {
    const w = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + w * 0.0555179;
    b1 = 0.99332 * b1 + w * 0.0750759;
    b2 = 0.969 * b2 + w * 0.153852;
    b3 = 0.8665 * b3 + w * 0.3104856;
    b4 = 0.55 * b4 + w * 0.5329522;
    b5 = -0.7616 * b5 - w * 0.016898;
    const pink = b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * 0.5362;
    b6 = w * 0.115926;
    channel[i] = pink * 0.11;
  }
}

export function createSoundBuffer(ctx: AudioContext, type: SoundType): AudioBuffer {
  const buffer = makeStereoBuffer(ctx, NOISE_SECONDS);
  const left = buffer.getChannelData(0);
  const right = buffer.getChannelData(1);
  switch (type) {
    case 'white':
      fillWhite(left);
      fillWhite(right);
      break;
    case 'brown':
      fillBrown(left);
      fillBrown(right);
      break;
    case 'pink':
      fillPink(left);
      fillPink(right);
      break;
  }
  return buffer;
}

// Stable ids only. The display name + description for each sound are localized
// and resolved in the component from `t.toolWidgets.brownNoise.sounds[id]`.
export const SOUND_ORDER: SoundType[] = ['brown', 'pink', 'white'];
