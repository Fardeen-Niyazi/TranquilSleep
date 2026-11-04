export const COLORS = {
  // Pure Colors (100% Opacity)
  white: '#FFFFFF',
  boneWhite: '#F4EFE8',
  stoneGray: '#B1B9B0',
  stoneGreen: '#9BA99F',
  forestGreen: '#4A7C59',
  slateGreen: '#758277',
  lightGreen: '#A7C4A0',
  deepCharcoal: '#0C100E',
  onyxBlack: '#161E18',
  darkObsidian: '#18201B',
  nightGreen: '#253228',

  // Alpha / Translucent Colors (Varying Opacity mapped to RGBA)
  slateGreen60: 'rgba(117, 130, 119, 0.60)', // #758277 at 60%
  deepCharcoal70: 'rgba(12, 16, 14, 0.70)', // #0C100E at 70%
  darkObsidian60: 'rgba(24, 32, 27, 0.60)', // #18201B at 60%
} as const;

export type ColorName = keyof typeof COLORS;
