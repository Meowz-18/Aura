import { useMemo } from 'react'
import type { TravelState } from '../../../data/travel-types'
import { filterAttractions } from '../../../data/travel-loader'
import { useDistrictExplorerStore } from '../../../stores/districtExplorerStore'
import { FilterChips } from './FilterChips'
import { ViewToggle } from './ViewToggle'
import { AttractionGrid } from './AttractionGrid'
import { CompareDistrictsPanel } from './CompareDistrictsPanel'
import { InspireMeButton } from '../../extras/InspireMeButton'
import '../../../styles/district-explorer.scss'

interface DistrictExplorerProps {
  travelState: TravelState
}

export const DistrictExplorer = ({ travelState }: DistrictExplorerProps) => {
  const { activeFilters, viewMode } = useDistrictExplorerStore()

  const filteredAttractions = useMemo(() => {
    return filterAttractions({
      stateId: travelState.id,
      tags: activeFilters.length > 0 ? activeFilters : undefined,
    })
  }, [travelState.id, activeFilters])

  const attractionsByDistrict = useMemo(() => {
    const grouped = new Map()
    travelState.districts.forEach((district) => {
      const districtAttractions = filteredAttractions.filter((attr) =>
        district.attractions.some((a) => a.id === attr.id)
      )
      if (districtAttractions.length > 0) {
        grouped.set(district.id, { district, attractions: districtAttractions })
      }
    })
    return grouped
  }, [travelState.districts, filteredAttractions])

  return (
    <div className="district-explorer">
      <header className="district-explorer__header">
        <h2 className="district-explorer__title">Explore {travelState.name} Districts</h2>
        <div className="district-explorer__controls">
          <InspireMeButton />
          <ViewToggle />
        </div>
      </header>

      <FilterChips />

      <div className="district-explorer__results">
        <p className="district-explorer__count">
          {filteredAttractions.length} attraction{filteredAttractions.length !== 1 ? 's' : ''} found
        </p>

        {Array.from(attractionsByDistrict.values()).map(({ district, attractions }) => (
          <section key={district.id} className="district-section">
            <header className="district-section__header">
              <h3 className="district-section__title">{district.name}</h3>
              <p className="district-section__description">{district.description}</p>
            </header>

            <AttractionGrid
              attractions={attractions}
              stateId={travelState.id}
              districtId={district.id}
              viewMode={viewMode}
            />
          </section>
        ))}

        {filteredAttractions.length === 0 && (
          <p className="district-explorer__no-results">
            No attractions match your filters. Try adjusting your selection.
          </p>
        )}
      </div>

      <CompareDistrictsPanel districts={travelState.districts} />
    </div>
  )
}
