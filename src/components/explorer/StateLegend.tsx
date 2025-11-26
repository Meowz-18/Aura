import { useState } from 'react'
import { useTheme } from '../../theme/ThemeProvider'

export const StateLegend = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const { isMotionReduced } = useTheme()

  const legendItems = [
    { id: 'northern', label: 'Northern', color: '#FF6B6B' },
    { id: 'southern', label: 'Southern', color: '#4ECDC4' },
    { id: 'eastern', label: 'Eastern', color: '#FFE66D' },
    { id: 'western', label: 'Western', color: '#95E1D3' },
    { id: 'central', label: 'Central', color: '#C7CEEA' },
  ]

  return (
    <div className="state-legend">
      <button
        className="state-legend__toggle"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-label="Toggle legend details"
        title="Show/hide region color key"
      >
        <span className="state-legend__label">Legend</span>
        <span className="state-legend__icon" aria-hidden="true">
          {isExpanded ? '▼' : '▶'}
        </span>
      </button>

      <div
        className={`state-legend__content ${isExpanded ? 'state-legend__content--expanded' : ''}`}
        style={{
          maxHeight: isExpanded ? '200px' : '0',
          transition: isMotionReduced ? 'none' : 'max-height 0.3s ease',
        }}
      >
        <ul className="state-legend__list" role="list">
          {legendItems.map((item) => (
            <li key={item.id} className="state-legend__item">
              <span
                className="state-legend__color"
                style={{ backgroundColor: item.color }}
                aria-label={`${item.label} region indicator`}
              />
              <span className="state-legend__text">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
