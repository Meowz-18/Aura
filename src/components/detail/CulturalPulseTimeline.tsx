import type { CulturalPulseEvent } from '../../data/travel-types'
import '../../styles/cultural-pulse.scss'

interface CulturalPulseTimelineProps {
  events: CulturalPulseEvent[]
}

export const CulturalPulseTimeline = ({ events }: CulturalPulseTimelineProps) => {
  const sortedEvents = [...events].sort((a, b) => a.year - b.year)

  return (
    <section className="cultural-pulse" aria-labelledby="cultural-pulse-title">
      <h3 id="cultural-pulse-title" className="cultural-pulse__title">
        Cultural Pulse Timeline
      </h3>

      <div className="timeline">
        {sortedEvents.map((event, index) => (
          <article key={`${event.year}-${index}`} className="timeline-event">
            <div className="timeline-event__marker">
              <span className="timeline-event__year">{event.year}</span>
            </div>

            <div className="timeline-event__content">
              <h4 className="timeline-event__event">{event.event}</h4>
              <p className="timeline-event__significance">{event.significance}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
