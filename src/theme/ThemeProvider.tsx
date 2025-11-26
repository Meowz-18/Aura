import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  MOTION_STORAGE_KEY,
  THEME_STORAGE_KEY,
  MotionSetting,
  ThemeName,
} from './theme'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

interface ThemeContextValue {
  theme: ThemeName
  setTheme: (theme: ThemeName) => void
  motion: MotionSetting
  setMotion: (setting: MotionSetting) => void
  isMotionReduced: boolean
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

const isBrowser = typeof window !== 'undefined'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const prefersReduced = usePrefersReducedMotion()
  const [theme, setTheme] = useState<ThemeName>('atmospheric')
  const [motion, setMotion] = useState<MotionSetting>('auto')

  useEffect(() => {
    if (!isBrowser) return
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY) as ThemeName | null
    const storedMotion = window.localStorage.getItem(MOTION_STORAGE_KEY) as MotionSetting | null
    if (storedTheme) {
      setTheme(storedTheme)
    }
    if (storedMotion) {
      setMotion(storedMotion)
    }
  }, [])

  useEffect(() => {
    if (!isBrowser) return
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  const isMotionReduced = motion === 'reduced' || (motion === 'auto' && prefersReduced)

  useEffect(() => {
    if (!isBrowser) return
    document.documentElement.dataset.motion = isMotionReduced ? 'reduced' : 'active'
    window.localStorage.setItem(MOTION_STORAGE_KEY, motion)
  }, [isMotionReduced, motion])

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      motion,
      setMotion,
      isMotionReduced,
    }),
    [theme, motion, isMotionReduced],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
