import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'

interface TooltipProps {
  id: string
  title: string
  content: string
  position: { top?: string; right?: string; bottom?: string; left?: string }
  triggerAtScroll?: number
  onDismiss?: (id: string) => void
  delay?: number
}

export const Tooltip = ({
  id,
  title,
  content,
  position,
  triggerAtScroll = 0,
  onDismiss,
  delay = 0,
}: TooltipProps) => {
  const tooltipRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => {
        if (tooltipRef.current) {
          tooltipRef.current.classList.add('tooltip--visible')
        }
      }, delay)
      return () => clearTimeout(timer)
    }

    if (tooltipRef.current) {
      tooltipRef.current.classList.add('tooltip--visible')
    }
  }, [delay])

  const tooltipStyle: CSSProperties = {
    position: 'absolute',
    ...position,
  }

  return (
    <div
      ref={tooltipRef}
      className="tooltip"
      style={tooltipStyle}
      role="tooltip"
      aria-label={`${title}: ${content}`}
      data-scroll-trigger={triggerAtScroll}
    >
      <div className="tooltip__content">
        <div className="tooltip__header">
          <h3 className="tooltip__title">{title}</h3>
          <button
            type="button"
            className="tooltip__close"
            aria-label={`Close ${title} tooltip`}
            onClick={() => onDismiss?.(id)}
          >
            ✕
          </button>
        </div>
        <p className="tooltip__body">{content}</p>
      </div>
      <div className="tooltip__arrow" aria-hidden="true" />
    </div>
  )
}
