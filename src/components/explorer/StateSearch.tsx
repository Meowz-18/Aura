import { useMemo } from 'react'
import { useStateExplorerStore } from '../../stores/stateExplorerStore'
import { getAllStates } from '../../data/travel-loader'
import { useTheme } from '../../theme/ThemeProvider'

export const StateSearch = () => {
  const searchQuery = useStateExplorerStore((state) => state.searchQuery)
  const setSearchQuery = useStateExplorerStore((state) => state.setSearchQuery)
  const isSearchFocused = useStateExplorerStore((state) => state.isSearchFocused)
  const setSearchFocused = useStateExplorerStore((state) => state.setSearchFocused)
  const { isMotionReduced } = useTheme()

  const allStates = getAllStates()

  const suggestions = useMemo(() => {
    if (!searchQuery.trim()) return []

    const query = searchQuery.toLowerCase()
    return allStates
      .filter((state) => state.name.toLowerCase().includes(query))
      .slice(0, 5)
  }, [searchQuery, allStates])

  const handleSelectSuggestion = (stateId: string) => {
    const state = allStates.find((s) => s.id === stateId)
    if (state) {
      setSearchQuery(state.name)
      setSearchFocused(false)
    }
  }

  const handleClear = () => {
    setSearchQuery('')
  }

  return (
    <div className="state-search">
      <div className="state-search__input-wrapper">
        <input
          type="text"
          className="state-search__input"
          placeholder="Search states…"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setTimeout(() => setSearchFocused(false), 150)}
          aria-label="Search for Indian states"
          aria-autocomplete="list"
          aria-expanded={isSearchFocused && suggestions.length > 0}
          aria-controls="state-suggestions"
        />

        {searchQuery && (
          <button
            className="state-search__clear"
            onClick={handleClear}
            aria-label="Clear search"
            title="Clear search query"
          >
            ✕
          </button>
        )}
      </div>

      {isSearchFocused && suggestions.length > 0 && (
        <ul
          id="state-suggestions"
          className="state-search__suggestions"
          role="listbox"
          style={{
            opacity: isSearchFocused ? 1 : 0,
            pointerEvents: isSearchFocused ? 'auto' : 'none',
            transition: isMotionReduced ? 'none' : 'opacity 0.2s ease',
          }}
        >
          {suggestions.map((state) => (
            <li
              key={state.id}
              className="state-search__suggestion"
              role="option"
              onClick={() => handleSelectSuggestion(state.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleSelectSuggestion(state.id)
                }
              }}
              tabIndex={0}
            >
              <span className="state-search__suggestion-name">{state.name}</span>
              <span className="state-search__suggestion-info">
                {state.districts.length} districts
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
