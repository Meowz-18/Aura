import { useEffect, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getAttractionById, getStateById, getDistrictById } from '../data/travel-loader'
import { useSceneStore } from '../stores/sceneStore'
import { AttractionCarousel } from '../components/detail/AttractionCarousel'
import { CulturalPulseTimeline } from '../components/detail/CulturalPulseTimeline'
import { TravelMoodPalette } from '../components/detail/TravelMoodPalette'
import { AudioHotspot } from '../components/detail/AudioHotspot'
import { SustainabilityBadge } from '../components/extras/SustainabilityBadge'
import { WeatherChip } from '../components/extras/WeatherChip'
import { MicroAchievements } from '../components/extras/MicroAchievements'
import { ShareablePostcard } from '../components/extras/ShareablePostcard'
import { KnowledgeCapsule } from '../components/extras/KnowledgeCapsule'
import '../styles/attraction-detail.scss'

const AttractionDetail = () => {
  const { stateId, districtId, attractionId } = useParams<{
    stateId: string
    districtId: string
    attractionId: string
  }>()
  const navigate = useNavigate()
  const setLevel = useSceneStore((state) => state.setLevel)

  const state = useMemo(() => getStateById(stateId!), [stateId])
  const district = useMemo(() => getDistrictById(stateId!, districtId!), [stateId, districtId])
  const attraction = useMemo(
    () => getAttractionById(stateId!, districtId!, attractionId!),
    [stateId, districtId, attractionId]
  )

  useEffect(() => {
    if (stateId && districtId && attractionId) {
      setLevel('district', { stateId, districtId })
    }
  }, [setLevel, stateId, districtId, attractionId])

  if (!attraction || !state || !district) {
    return (
      <div className="attraction-detail__error">
        <h2>Attraction not found</h2>
        <button onClick={() => navigate('/india')}>Return to India</button>
      </div>
    )
  }

  return (
    <div className="attraction-detail">
      <nav className="attraction-detail__breadcrumb" aria-label="Breadcrumb">
        <button onClick={() => navigate('/india')} className="breadcrumb-link">
          India
        </button>
        <span aria-hidden="true">/</span>
        <button onClick={() => navigate(`/india/${stateId}`)} className="breadcrumb-link">
          {state.name}
        </button>
        <span aria-hidden="true">/</span>
        <button onClick={() => navigate(`/india/${stateId}/${districtId}`)} className="breadcrumb-link">
          {district.name}
        </button>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{attraction.name}</span>
      </nav>

      <AttractionCarousel attraction={attraction} />

      <div className="attraction-detail__story">
        <section>
          <h3>The Story</h3>
          <p className="attraction-detail__poetic">{attraction.poeticCopy}</p>
          <p>{attraction.storySnippet}</p>
          <blockquote className="attraction-detail__legend">{attraction.legend}</blockquote>
        </section>
      </div>

      <div className="attraction-detail__grid">
        <CulturalPulseTimeline events={attraction.culturalPulseTimeline} />
        <TravelMoodPalette moods={attraction.moodIcons} />
        <AudioHotspot audioDescription={attraction.audioDescription} />
      </div>

      <div className="attraction-detail__extras">
        <KnowledgeCapsule
          title="Travel Tips"
          content={attraction.travelTips[0]}
          icon="💡"
        />
        
        <SustainabilityBadge tips={attraction.sustainabilityTips} />

        <div className="weather-insights">
          <h4>Weather Insights</h4>
          <div className="weather-insights__grid">
            {attraction.weatherInsights.map((weather) => (
              <WeatherChip key={weather.month} weather={weather} />
            ))}
          </div>
        </div>

        <div className="accessibility-info">
          <h4>Accessibility</h4>
          <div className="accessibility-info__content">
            {attraction.accessibility.wheelchairAccessible && (
              <span className="accessibility-badge">♿ Wheelchair Accessible</span>
            )}
            {attraction.accessibility.visuallyImpairedFriendly && (
              <span className="accessibility-badge">👁️ Visually Impaired Friendly</span>
            )}
            {attraction.accessibility.hearingImpairedFriendly && (
              <span className="accessibility-badge">👂 Hearing Impaired Friendly</span>
            )}
          </div>
          <p>{attraction.accessibility.notes}</p>
        </div>

        <MicroAchievements achievements={attraction.achievements} attractionId={attraction.id} />
        <ShareablePostcard attraction={attraction} />
      </div>
    </div>
  )
}

export default AttractionDetail
