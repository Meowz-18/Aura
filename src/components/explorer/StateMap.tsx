import { useNavigate } from 'react-router-dom'
import { useStateExplorerStore } from '../../stores/stateExplorerStore'
import { getAllStates } from '../../data/travel-loader'
import { StatePin } from './StatePin'
import { useTheme } from '../../theme/ThemeProvider'

export const StateMap = () => {
  const navigate = useNavigate()
  const { isMotionReduced } = useTheme()
  const selectedStateId = useStateExplorerStore((state) => state.selectedStateId)
  const hoveredStateId = useStateExplorerStore((state) => state.hoveredStateId)
  const setHoveredState = useStateExplorerStore((state) => state.setHoveredState)

  const allStates = getAllStates()

  const handleStateClick = (stateId: string) => {
    navigate(`/india/${stateId}`)
  }

  return (
    <div className="state-map">
      <div
        className="state-map__container"
        role="region"
        aria-label="Interactive state map of India"
      >
        <div className="state-map__background">
          <svg
            className="state-map__outline"
            viewBox="0 0 360 200"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              <filter id="state-glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              d="M 180 60 Q 240 80 260 140 Q 220 160 180 170 Q 140 160 120 140 Q 100 80 180 60 Z"
              className="state-map__india-outline"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.3"
            />
          </svg>
        </div>

        <div
          className="state-map__pins"
          style={{
            opacity: isMotionReduced ? 1 : 1,
            transition: isMotionReduced ? 'none' : 'opacity 0.3s ease',
          }}
        >
          {allStates.map((state) => (
            <StatePin
              key={state.id}
              state={state}
              isHovered={hoveredStateId === state.id}
              isSelected={selectedStateId === state.id}
              onHover={(hovered) =>
                setHoveredState(hovered ? state.id : null)
              }
              onClick={() => handleStateClick(state.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
