import { useEffect, useState, useRef } from 'react'

const ONBOARDING_DISMISSED_KEY = 'immersive.onboarding-dismissed'

export const useOnboarding = () => {
  const [state, setState] = useState<{ isDismissed: boolean; isHydrated: boolean }>({
    isDismissed: true,
    isHydrated: false,
  })
  const hasInitializedRef = useRef(false)

  useEffect(() => {
    if (hasInitializedRef.current || typeof window === 'undefined') return

    hasInitializedRef.current = true
    const dismissed = window.localStorage.getItem(ONBOARDING_DISMISSED_KEY) === 'true'
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState({ isDismissed: dismissed, isHydrated: true })
  }, [])

  const dismiss = () => {
    setState((prev) => ({ ...prev, isDismissed: true }))
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(ONBOARDING_DISMISSED_KEY, 'true')
    }
  }

  const reset = () => {
    setState((prev) => ({ ...prev, isDismissed: false }))
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(ONBOARDING_DISMISSED_KEY)
    }
  }

  return { isDismissed: state.isDismissed, isHydrated: state.isHydrated, dismiss, reset }
}
