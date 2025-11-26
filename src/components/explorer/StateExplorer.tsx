import { useEffect } from 'react'
import { useSceneStore } from '../../stores/sceneStore'
import { useStateExplorerStore } from '../../stores/stateExplorerStore'
import { getAllStates } from '../../data/travel-loader'
import { StateBreadcrumb } from './StateBreadcrumb'
import { StateLegend } from './StateLegend'
import { StateSearch } from './StateSearch'
import { StateMap } from './StateMap'
import { StateCard } from './StateCard'
import { ScrollSequence } from './ScrollSequence'

export const StateExplorer = () => {
  const setLevel = useSceneStore((state) => state.setLevel)
  const searchQuery = useStateExplorerStore((state) => state.searchQuery)
  const setHoveredState = useStateExplorerStore((state) => state.setHoveredState)
  const hoveredStateId = useStateExplorerStore((state) => state.hoveredStateId)

  useEffect(() => {
    setLevel('india')
  }, [setLevel])

  const allStates = getAllStates()

  const filteredStates = searchQuery.trim()
    ? allStates.filter((state) =>
        state.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allStates

  return (
    <section className="state-explorer" aria-label="State exploration interface">
      <StateBreadcrumb />

      <div className="state-explorer__controls">
        <StateSearch />
        <StateLegend />
      </div>

      <ScrollSequence>
        <div className="state-explorer__content">
          <div className="state-explorer__map-section">
            <div className="state-explorer__header">
              <h2 className="state-explorer__title">Explore India's States</h2>
              <p className="state-explorer__subtitle">
                Click on a pin or search to select a state
              </p>
            </div>

            <StateMap />

            <div className="state-explorer__caption">
              <p className="state-explorer__caption-text">
                Each state reveals its own story. Hover over pins to preview, click to dive deeper.
              </p>
            </div>
          </div>

          <div className="state-explorer__cards-section">
            <h2 className="state-explorer__cards-title">
              {searchQuery ? `Results for "${searchQuery}"` : 'All States'}
            </h2>

            <div className="state-explorer__cards">
              {filteredStates.length > 0 ? (
                filteredStates.map((state) => (
                  <StateCard
                    key={state.id}
                    state={state}
                    isHovered={hoveredStateId === state.id}
                    onHoverChange={(hovered) =>
                      setHoveredState(hovered ? state.id : null)
                    }
                  />
                ))
              ) : (
                <div
                  className="state-explorer__no-results"
                  role="status"
                  aria-live="polite"
                >
                  <p>No states match your search. Try a different query.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </ScrollSequence>

      <div
        className="state-explorer__status"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {filteredStates.length} state{filteredStates.length !== 1 ? 's' : ''} available
      </div>
    </section>
  )
}
