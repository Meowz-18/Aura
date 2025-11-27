import { useState } from 'react'
import { useJourneyJournalStore } from '../../stores/journalStore'
import '../../styles/journey-journal.scss'

export const JourneyJournal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { savedAttractions, removeAttraction, generateItinerary, itinerary } =
    useJourneyJournalStore()

  return (
    <>
      <button
        className="journal-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle journey journal"
        aria-expanded={isOpen}
      >
        <span>📓</span>
        {savedAttractions.length > 0 && (
          <span className="journal-toggle__badge">{savedAttractions.length}</span>
        )}
      </button>

      {isOpen && (
        <aside
          className="journey-journal"
          role="complementary"
          aria-label="Journey journal"
        >
          <header className="journey-journal__header">
            <h3 className="journey-journal__title">Journey Journal</h3>
            <button
              className="journey-journal__close"
              onClick={() => setIsOpen(false)}
              aria-label="Close journal"
            >
              ✕
            </button>
          </header>

          {savedAttractions.length === 0 ? (
            <p className="journey-journal__empty">
              Save attractions to your journal to plan your itinerary
            </p>
          ) : (
            <>
              <div className="journey-journal__list">
                {savedAttractions.map((entry) => (
                  <article key={entry.id} className="journal-entry">
                    <img
                      src={entry.attraction.postcardMetadata.thumbnailUrl}
                      alt={entry.attraction.postcardMetadata.altText}
                      className="journal-entry__image"
                    />
                    <div className="journal-entry__content">
                      <h4 className="journal-entry__name">{entry.attraction.name}</h4>
                      <p className="journal-entry__caption">{entry.attraction.caption}</p>
                    </div>
                    <button
                      className="journal-entry__remove"
                      onClick={() => removeAttraction(entry.attraction.id)}
                      aria-label={`Remove ${entry.attraction.name} from journal`}
                    >
                      ✕
                    </button>
                  </article>
                ))}
              </div>

              <button
                className="journey-journal__generate"
                onClick={generateItinerary}
              >
                Generate Itinerary
              </button>

              {itinerary.length > 0 && (
                <div className="journey-journal__itinerary">
                  <h4>Your Itinerary</h4>
                  <ol>
                    {itinerary.map((attraction) => (
                      <li key={attraction.id}>{attraction.name}</li>
                    ))}
                  </ol>
                </div>
              )}
            </>
          )}
        </aside>
      )}
    </>
  )
}
