export type ThemeName = 'atmospheric' | 'contrast'
export type MotionSetting = 'auto' | 'reduced'

export const themeTokens: Record<ThemeName, { label: string; description: string }> = {
  atmospheric: {
    label: 'Atmospheric',
    description: 'Cinematic gradients with immersive depth cues.',
  },
  contrast: {
    label: 'High Contrast',
    description: 'Luminous paper-white canvas with bold accents for accessibility.',
  },
}

export const motionTokens: Record<MotionSetting, { label: string; description: string }> = {
  auto: {
    label: 'Live Motion',
    description: 'Respect system preference but allow subtle parallax moves.',
  },
  reduced: {
    label: 'Reduced Motion',
    description: 'Static experience with transitions disabled.',
  },
}

export const themeOrder: ThemeName[] = ['atmospheric', 'contrast']

export const THEME_STORAGE_KEY = 'immersive.theme'
export const MOTION_STORAGE_KEY = 'immersive.motion'
