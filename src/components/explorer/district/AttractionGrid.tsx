import { useNavigate } from 'react-router-dom'
import type { Attraction } from '../../../data/travel-types'
import { useJourneyJournalStore } from '../../../stores/journalStore'
import '../../../styles/attraction-grid.scss'

interface AttractionGridProps {
  attractions: Attraction[]
  stateId: string
  districtId: string
  viewMode: 'grid' | 'list'
}

export const AttractionGrid = ({ attractions, stateId, districtId, viewMode }: AttractionGridProps) => {
  const navigate = useNavigate()
  const { addAttraction, savedAttractions } = useJourneyJournalStore()

  const handleAttractionClick = (attractionId: string) => {
    navigate(`/india/${stateId}/${districtId}/${attractionId}`)
  }

  const isSaved = (attractionId: string) =>
    savedAttractions.some(entry => entry.attraction.id === attractionId)

  return (
    <div className={`attraction-grid attraction-grid--${viewMode}`}>
      {attractions.map(attraction => (
        <article
          key={attraction.id}
          className="attraction-card"
          onClick={() => handleAttractionClick(attraction.id)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              handleAttractionClick(attraction.id)
            }
          }}
        >
          <div className="attraction-card__image">
            <img
              src={attraction.postcardMetadata.thumbnailUrl}
              alt={attraction.postcardMetadata.altText}
              loading="lazy"
            />
            <button
              className={`attraction-card__save ${isSaved(attraction.id) ? 'attraction-card__save--active' : ''}`}
              onClick={(e) => {
                e.stopPropagation()
                addAttraction(attraction)
              }}
              aria-label={isSaved(attraction.id) ? 'Remove from journal' : 'Add to journal'}
            >
              {isSaved(attraction.id) ? '❤️' : '🤍'}
            </button>
          </div>

          <div className="attraction-card__content">
            <h3 className="attraction-card__name">{attraction.name}</h3>
            <p className="attraction-card__caption">{attraction.caption}</p>

            <div className="attraction-card__tags">
              {attraction.tags.slice(0, 3).map(tag => (
                <span key={tag} className="attraction-card__tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="attraction-card__meta">
              <span className="attraction-card__season">
                {attraction.bestSeasons[0]}
              </span>
              <span className="attraction-card__accessibility">
                {attraction.accessibility.wheelchairAccessible ? '♿ Accessible' : ''}
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
