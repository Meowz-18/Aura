import { useNavigate, useParams } from 'react-router-dom'
import { useSceneStore } from '../../stores/sceneStore'
import { getAllStates } from '../../data/travel-loader'
import { useTheme } from '../../theme/ThemeProvider'

export const StateBreadcrumb = () => {
  const navigate = useNavigate()
  const params = useParams<{ stateId: string }>()
  const { isMotionReduced } = useTheme()
  const level = useSceneStore((state) => state.level)

  const allStates = getAllStates()
  const currentState = params.stateId ? allStates.find((s) => s.id === params.stateId) : null

  const handleBack = () => {
    if (level === 'state' && currentState) {
      navigate('/india')
    } else if (level === 'district') {
      navigate(`/india/${params.stateId}`)
    }
  }

  const isAtStateLevel = level === 'state' && currentState

  return (
    <div className="state-breadcrumb">
      <button
        className={`state-breadcrumb__back ${isAtStateLevel ? 'state-breadcrumb__back--visible' : ''}`}
        onClick={handleBack}
        aria-label={isAtStateLevel ? `Back from ${currentState.name}` : 'Navigation back'}
        title="Go back to previous view"
        style={{
          opacity: isAtStateLevel ? 1 : 0,
          pointerEvents: isAtStateLevel ? 'auto' : 'none',
          transition: isMotionReduced ? 'none' : 'opacity 0.3s ease',
        }}
      >
        ←
      </button>

      <nav className="state-breadcrumb__nav" aria-label="State navigation">
        <ol className="state-breadcrumb__list">
          <li className="state-breadcrumb__item">
            <button
              className="state-breadcrumb__link"
              onClick={() => navigate('/')}
              aria-current={level === 'globe' ? 'page' : undefined}
            >
              Earth
            </button>
          </li>

          <li className="state-breadcrumb__separator" aria-hidden="true">
            →
          </li>

          <li className="state-breadcrumb__item">
            <button
              className="state-breadcrumb__link"
              onClick={() => navigate('/india')}
              aria-current={level === 'india' ? 'page' : undefined}
            >
              India
            </button>
          </li>

          {currentState && (
            <>
              <li className="state-breadcrumb__separator" aria-hidden="true">
                →
              </li>

              <li className="state-breadcrumb__item">
                <span className="state-breadcrumb__current" aria-current="page">
                  {currentState.name}
                </span>
              </li>
            </>
          )}
        </ol>
      </nav>
    </div>
  )
}
