import { motionTokens, themeOrder, themeTokens } from '../../theme/theme'
import { MotionSetting } from '../../theme/theme'
import { useTheme } from '../../theme/ThemeProvider'
import { Stack } from '../layout/Primitives'

export const ThemeToggleGroup = () => {
  const { theme, setTheme, motion, setMotion } = useTheme()

  const motionOrder: MotionSetting[] = ['auto', 'reduced']

  return (
    <Stack gap="sm">
      <div className="theme-toggle-group" role="group" aria-label="Color theme">
        {themeOrder.map((mode) => (
          <button
            type="button"
            key={mode}
            data-active={(theme === mode).toString()}
            aria-pressed={theme === mode}
            onClick={() => setTheme(mode)}
          >
            {themeTokens[mode].label}
          </button>
        ))}
      </div>
      <div className="theme-toggle-group" role="group" aria-label="Motion preference">
        {motionOrder.map((mode) => (
          <button
            type="button"
            key={mode}
            data-active={(motion === mode).toString()}
            aria-pressed={motion === mode}
            onClick={() => setMotion(mode)}
          >
            {motionTokens[mode].label}
          </button>
        ))}
      </div>
    </Stack>
  )
}
