import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useTheme } from '../../theme/ThemeProvider'
import type { TravelState } from '../../data/travel-types'

interface StatePinProps {
  state: TravelState
  isHovered: boolean
  isSelected: boolean
  onHover: (hovered: boolean) => void
  onClick: () => void
}

export const StatePin = ({ state, isHovered, isSelected, onHover, onClick }: StatePinProps) => {
  const pinRef = useRef<HTMLDivElement>(null)
  const { isMotionReduced } = useTheme()

  useEffect(() => {
    if (!pinRef.current || isMotionReduced) return

    gsap.to(pinRef.current, {
      y: isHovered || isSelected ? -8 : 0,
      duration: 0.4,
      ease: 'power2.out',
    })
  }, [isHovered, isSelected, isMotionReduced])

  const getRegionColor = (stateId: string) => {
    const colorMap: { [key: string]: string } = {
      rajasthan: '#FF6B6B',
      kerala: '#4ECDC4',
      uttarakhand: '#FFE66D',
      maharashtra: '#95E1D3',
      assam: '#FFB6D9',
      goa: '#A8D8EA',
      'tamil-nadu': '#AA96DA',
      'west-bengal': '#FCBAD3',
    }
    return colorMap[stateId] || '#64f2cb'
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <div
      ref={pinRef}
      className={`state-pin ${isHovered ? 'state-pin--hovered' : ''} ${isSelected ? 'state-pin--selected' : ''}`}
      style={{
        left: `calc(${((state.coordinates.longitude + 180) / 360) * 100}%)`,
        top: `calc(${((90 - state.coordinates.latitude) / 180) * 100}%)`,
      }}
    >
      <button
        className="state-pin__button"
        onClick={onClick}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
        aria-label={`Select ${state.name}`}
        title={`Click to explore ${state.name}`}
      >
        <span
          className="state-pin__dot"
          style={{
            backgroundColor: getRegionColor(state.id),
            boxShadow: isHovered || isSelected
              ? `0 0 16px ${getRegionColor(state.id)}`
              : `0 0 8px ${getRegionColor(state.id)}`,
            transition: isMotionReduced ? 'none' : 'box-shadow 0.3s ease',
          }}
        />

        {(isHovered || isSelected) && (
          <span className="state-pin__label">{state.name}</span>
        )}
      </button>

      {(isHovered || isSelected) && (
        <div className="state-pin__pulse" style={{
          backgroundColor: getRegionColor(state.id),
          opacity: 0.3,
        }} />
      )}
    </div>
  )
}
