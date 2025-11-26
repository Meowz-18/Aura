import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../theme/ThemeProvider'
import type { TravelState } from '../../data/travel-types'

interface StateCardProps {
  state: TravelState
  isHovered: boolean
  onHoverChange: (hovered: boolean) => void
}

export const StateCard = ({ state, isHovered, onHoverChange }: StateCardProps) => {
  const navigate = useNavigate()
  const { isMotionReduced } = useTheme()

  const handleClick = () => {
    navigate(`/india/${state.id}`)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }

  const capitalCity = state.districts[0]?.name || 'Capital'
  const districtCount = state.districts.length

  return (
    <div
      className={`state-card ${isHovered ? 'state-card--hovered' : ''}`}
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
      style={{
        transform: isHovered && !isMotionReduced ? 'translateY(-4px)' : 'translateY(0)',
        transition: isMotionReduced ? 'none' : 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <button
        className="state-card__button"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-label={`Explore ${state.name}`}
        title={`Click to explore ${state.name}`}
      >
        <div className="state-card__content">
          <h3 className="state-card__title">{state.name}</h3>

          <div className="state-card__meta">
            <span className="state-card__districts">
              <span className="state-card__meta-label">Districts:</span>
              <span className="state-card__meta-value">{districtCount}</span>
            </span>

            <span className="state-card__capital">
              <span className="state-card__meta-label">Capital:</span>
              <span className="state-card__meta-value">{capitalCity}</span>
            </span>
          </div>

          <p className="state-card__description">{state.description}</p>

          <div className="state-card__action">
            <span className="state-card__action-text">Explore</span>
            <span className="state-card__action-icon" aria-hidden="true">
              →
            </span>
          </div>
        </div>
      </button>
    </div>
  )
}
