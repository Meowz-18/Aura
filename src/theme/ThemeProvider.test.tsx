import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { ThemeProvider, useTheme } from './ThemeProvider'

type ThemeConsumerProps = {
  nextTheme: 'atmospheric' | 'contrast'
}

const ThemeConsumer = ({ nextTheme }: ThemeConsumerProps) => {
  const { theme, setTheme } = useTheme()
  return (
    <button type="button" onClick={() => setTheme(nextTheme)}>
      {theme}
    </button>
  )
}

describe('ThemeProvider', () => {
  it('switches themes via context', async () => {
    const user = userEvent.setup()
    render(
      <ThemeProvider>
        <ThemeConsumer nextTheme="contrast" />
      </ThemeProvider>,
    )

    const button = screen.getByRole('button', { name: /atmospheric/i })
    await user.click(button)
    expect(button).toHaveTextContent(/contrast/i)
  })
})
