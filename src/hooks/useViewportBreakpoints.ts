import { useEffect, useState } from 'react'

const BREAKPOINTS = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1440,
} as const

type BreakpointKey = keyof typeof BREAKPOINTS

const breakpointLabels: Record<BreakpointKey, string> = {
  xs: 'Pocket',
  sm: 'Handheld',
  md: 'Tablet',
  lg: 'Desktop',
  xl: 'Immersive',
}

const resolveBreakpoint = (width: number): BreakpointKey => {
  if (width >= BREAKPOINTS.xl) return 'xl'
  if (width >= BREAKPOINTS.lg) return 'lg'
  if (width >= BREAKPOINTS.md) return 'md'
  if (width >= BREAKPOINTS.sm) return 'sm'
  return 'xs'
}

export const useViewportBreakpoints = () => {
  const [width, setWidth] = useState<number>(typeof window === 'undefined' ? BREAKPOINTS.md : window.innerWidth)

  useEffect(() => {
    const handler = () => setWidth(window.innerWidth)
    handler()
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const breakpoint = resolveBreakpoint(width)

  return {
    width,
    breakpoint,
    label: breakpointLabels[breakpoint],
    matches: Object.entries(BREAKPOINTS).reduce<Record<BreakpointKey, boolean>>((acc, [key, value]) => {
      acc[key as BreakpointKey] = width >= value
      return acc
    }, {} as Record<BreakpointKey, boolean>),
  }
}
