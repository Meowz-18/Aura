import { useDistrictExplorerStore } from '../../../stores/districtExplorerStore'
import '../../../styles/view-toggle.scss'

export const ViewToggle = () => {
  const { viewMode, setViewMode } = useDistrictExplorerStore()

  return (
    <div className="view-toggle" role="radiogroup" aria-label="View mode">
      <button
        className={`view-toggle__button ${viewMode === 'grid' ? 'view-toggle__button--active' : ''}`}
        onClick={() => setViewMode('grid')}
        role="radio"
        aria-checked={viewMode === 'grid'}
        aria-label="Grid view"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <rect x="2" y="2" width="6" height="6" rx="1" fill="currentColor" />
          <rect x="12" y="2" width="6" height="6" rx="1" fill="currentColor" />
          <rect x="2" y="12" width="6" height="6" rx="1" fill="currentColor" />
          <rect x="12" y="12" width="6" height="6" rx="1" fill="currentColor" />
        </svg>
        <span>Grid</span>
      </button>
      
      <button
        className={`view-toggle__button ${viewMode === 'list' ? 'view-toggle__button--active' : ''}`}
        onClick={() => setViewMode('list')}
        role="radio"
        aria-checked={viewMode === 'list'}
        aria-label="List view"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <rect x="2" y="3" width="16" height="3" rx="1" fill="currentColor" />
          <rect x="2" y="9" width="16" height="3" rx="1" fill="currentColor" />
          <rect x="2" y="15" width="16" height="3" rx="1" fill="currentColor" />
        </svg>
        <span>List</span>
      </button>
    </div>
  )
}
