import { useMemo } from 'react'
import type { TravelDistrict } from '../../../data/travel-types'
import { useDistrictExplorerStore } from '../../../stores/districtExplorerStore'
import '../../../styles/compare-districts.scss'

interface CompareDistrictsPanelProps {
  districts: TravelDistrict[]
}

export const CompareDistrictsPanel = ({ districts }: CompareDistrictsPanelProps) => {
  const { selectedDistrictIds, isComparePanelOpen, toggleComparePanel, setSelectedDistrictIds } =
    useDistrictExplorerStore()

  const selectedDistricts = useMemo(() => {
    return districts.filter(d => selectedDistrictIds.includes(d.id))
  }, [districts, selectedDistrictIds])

  if (!isComparePanelOpen) {
    return (
      <button
        className="compare-toggle"
        onClick={toggleComparePanel}
        aria-label="Open compare districts panel"
      >
        <span>Compare Districts</span>
        <span className="compare-toggle__badge">{selectedDistrictIds.length}</span>
      </button>
    )
  }

  return (
    <aside
      className="compare-panel"
      role="complementary"
      aria-label="Compare districts panel"
    >
      <header className="compare-panel__header">
        <h3 className="compare-panel__title">Compare Districts</h3>
        <button
          className="compare-panel__close"
          onClick={toggleComparePanel}
          aria-label="Close compare panel"
        >
          ✕
        </button>
      </header>

      {selectedDistricts.length === 0 ? (
        <p className="compare-panel__empty">
          Select districts from the map to compare them
        </p>
      ) : (
        <div className="compare-panel__grid">
          {selectedDistricts.map(district => (
            <div key={district.id} className="compare-card">
              <button
                className="compare-card__remove"
                onClick={() =>
                  setSelectedDistrictIds(selectedDistrictIds.filter(id => id !== district.id))
                }
                aria-label={`Remove ${district.name} from comparison`}
              >
                ✕
              </button>

              <h4 className="compare-card__name">{district.name}</h4>
              <p className="compare-card__description">{district.description}</p>

              <div className="compare-card__stats">
                <div className="compare-stat">
                  <span className="compare-stat__value">{district.attractions.length}</span>
                  <span className="compare-stat__label">Attractions</span>
                </div>

                <div className="compare-stat">
                  <span className="compare-stat__value">
                    {district.attractions.filter(a => a.accessibility.wheelchairAccessible).length}
                  </span>
                  <span className="compare-stat__label">Accessible</span>
                </div>
              </div>

              <div className="compare-card__tags">
                {Array.from(
                  new Set(district.attractions.flatMap(a => a.tags).slice(0, 5))
                ).map(tag => (
                  <span key={tag} className="compare-card__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedDistricts.length > 0 && (
        <button
          className="compare-panel__clear"
          onClick={() => setSelectedDistrictIds([])}
        >
          Clear comparison
        </button>
      )}
    </aside>
  )
}
