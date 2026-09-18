/**
 * The village's own colours, copied from the Doubly app
 * (src/screens/Spaces/village/villageColors.ts in the app repo), so the island
 * on this page is the same place the app draws.
 *
 * On purpose NOT the site's theme tokens: grass is green whatever the section
 * around it is doing. The palette is built in pairs, a lit face and a shaded
 * face per material, because light and silhouette are what carry a drawing
 * this small.
 */
export const villageColors = {
  skyTop: '#8cc6e8',
  skyMid: '#c3e2f1',
  skyHaze: '#eef5ef',
  sun: '#fff4d4',
  cloud: '#ffffff',
  bird: '#6d7f86',

  seaFar: '#7fb8d6',
  sea: '#63a5c9',
  seaNear: '#4e8fb5',
  seaShimmer: '#c8e8f6',
  foam: '#eaf7fd',

  grassLit: '#b8d996',
  grass: '#a3ca83',
  grassShade: '#88b26c',
  grassDeep: '#6e9858',

  dirt: '#e5d1aa',
  dirtShade: '#cdb488',

  soil: '#6b503a',
  soilRidge: '#7d6046',

  wall: '#f7e8ce',
  wallShade: '#ddc5a2',
  wallDeep: '#c3a983',

  roof: '#c8705a',
  roofShade: '#a1523f',
  roofRidge: '#e29076',

  wood: '#b07f4f',
  woodShade: '#8a6039',
  woodDeep: '#6b4728',

  glass: '#6e838d',
  glassLit: '#ffcf6e',
  glow: '#ffd98a',

  leafLit: '#82b05e',
  leaf: '#5f9147',
  leafDeep: '#436b34',

  waterLit: '#bde4f2',
  waterDeep: '#5f9fbd',

  sand: '#eadfbc',
  sandShade: '#cbba91',

  stone: '#d6cfc2',
  stoneShade: '#ada698',
  stoneSpeck: '#f2e5c8',

  crop: '#e2bf61',
  cropShade: '#c39c3f',
  sprout: '#7cb45f',

  lantern: '#ffbc4a',
  lanternGlow: '#ffd88a',

  shadow: '#4b5a3a',
  ink: '#4a4136',
} as const;
