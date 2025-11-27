import type { AttractionTag } from '../../../data/travel-types'
import { useDistrictExplorerStore } from '../../../stores/districtExplorerStore'
import '../../../styles/filter-chips.scss'

const FILTER_TAGS: { tag: AttractionTag; label: string; icon: string }[] = [
  { tag: 'nature', label: 'Nature', icon: '🌿' },
  { tag: 'heritage', label: 'Heritage', icon: '🏛️' },
  { tag: 'adventure', label: 'Adventure', icon: '⛰️' },
  { tag: 'spiritual', label: 'Spiritual', icon: '🙏' },
  { tag: 'cultural', label: 'Cultural', icon: '🎭' },
  { tag: 'beach', label: 'Beach', icon: '🏖️' },
  { tag: 'food', label: 'Food', icon: '🍜' },
  { tag: 'architecture', label: 'Architecture', icon: '🕌' },
]

export const FilterChips = () => {
  const { activeFilters, toggleFilter, clearFilters } = useDistrictExplorerStore()

  return (
    <div className="filter-chips" role="group" aria-label="Filter attractions by category">
      <div className="filter-chips__header">
        <h3 className="filter-chips__title">Filter by</h3>
        {activeFilters.length > 0 && (
          <button
            className="filter-chips__clear"
            onClick={clearFilters}
            aria-label="Clear all filters"
          >
            Clear all
          </button>
        )}
      </div>
      
      <div className="filter-chips__list">
        {FILTER_TAGS.map(({ tag, label, icon }) => {
          const isActive = activeFilters.includes(tag)
          return (
            <button
              key={tag}
              className={`filter-chip ${isActive ? 'filter-chip--active' : ''}`}
              onClick={() => toggleFilter(tag)}
              aria-pressed={isActive}
              aria-label={`${isActive ? 'Remove' : 'Add'} ${label} filter`}
            >
              <span className="filter-chip__icon" aria-hidden="true">{icon}</span>
              <span className="filter-chip__label">{label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
