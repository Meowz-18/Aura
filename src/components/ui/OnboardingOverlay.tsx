import { useEffect, useRef } from 'react'
import { Tooltip } from './Tooltip'

interface OnboardingOverlayProps {
  isVisible: boolean
  scrollProgress: number
  onDismiss: () => void
  dismissedTooltips: Set<string>
  onTooltipDismiss: (id: string) => void
}

const tooltips = [
  {
    id: 'globe-intro',
    title: 'Interactive Globe',
    content: 'Rotate and explore the planet. Scroll to zoom in on India.',
    position: { right: '2rem', top: '50%', transform: 'translateY(-50%)' },
    triggerAtScroll: 0,
    delay: 600,
  },
  {
    id: 'explore-cta',
    title: 'Ready to Explore?',
    content: 'The "Start Exploring" button guides you deeper. Click when ready!',
    position: { left: '2rem', bottom: '8rem' },
    triggerAtScroll: 0.3,
    delay: 1400,
  },
  {
    id: 'accessibility',
    title: 'Accessibility First',
    content: 'Toggle high contrast or reduce motion in the header. Your preferences persist.',
    position: { left: '2rem', top: '2rem' },
    triggerAtScroll: 0.2,
    delay: 2200,
  },
]

export const OnboardingOverlay = ({
  isVisible,
  onDismiss,
  dismissedTooltips,
  onTooltipDismiss,
}: OnboardingOverlayProps) => {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!overlayRef.current) return

    if (isVisible) {
      overlayRef.current.classList.add('onboarding--visible')
    } else {
      overlayRef.current.classList.remove('onboarding--visible')
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div
      ref={overlayRef}
      className="onboarding-overlay"
      role="region"
      aria-live="polite"
      aria-label="Onboarding guide with interactive tips"
    >
      <div className="onboarding-overlay__content">
        <div className="onboarding-header">
          <h2>Welcome to Orbital Atlas</h2>
          <button
            type="button"
            className="onboarding-close-btn"
            aria-label="Close onboarding guide"
            onClick={onDismiss}
          >
            Skip tour
          </button>
        </div>

        <div className="onboarding-tooltips">
          {tooltips
            .filter((tooltip) => !dismissedTooltips.has(tooltip.id))
            .map((tooltip) => (
              <Tooltip
                key={tooltip.id}
                id={tooltip.id}
                title={tooltip.title}
                content={tooltip.content}
                position={
                  tooltip.position as {
                    top?: string
                    right?: string
                    bottom?: string
                    left?: string
                  }
                }
                triggerAtScroll={tooltip.triggerAtScroll}
                delay={tooltip.delay}
                onDismiss={onTooltipDismiss}
              />
            ))}
        </div>
      </div>

      <div className="onboarding-backdrop" onClick={onDismiss} aria-hidden="true" />
    </div>
  )
}
