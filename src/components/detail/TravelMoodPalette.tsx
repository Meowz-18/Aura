import type { MoodIcon } from '../../data/travel-types'
import '../../styles/mood-palette.scss'

interface TravelMoodPaletteProps {
  moods: MoodIcon[]
}

const MOOD_COLORS: Record<MoodIcon, string> = {
  serene: '#87CEEB',
  vibrant: '#FF6347',
  adventure: '#FFD700',
  spiritual: '#9370DB',
  historic: '#8B4513',
  cultural: '#FF69B4',
  nature: '#32CD32',
  romantic: '#FF1493',
  family: '#FFA07A',
  peaceful: '#B0E0E6',
}

const MOOD_ICONS: Record<MoodIcon, string> = {
  serene: '🧘',
  vibrant: '🎉',
  adventure: '⛰️',
  spiritual: '🙏',
  historic: '🏛️',
  cultural: '🎭',
  nature: '🌿',
  romantic: '💕',
  family: '👨‍👩‍👧‍👦',
  peaceful: '☮️',
}

export const TravelMoodPalette = ({ moods }: TravelMoodPaletteProps) => {
  return (
    <section className="mood-palette" aria-labelledby="mood-palette-title">
      <h3 id="mood-palette-title" className="mood-palette__title">
        Travel Mood Palette
      </h3>

      <div className="mood-palette__grid">
        {moods.map((mood) => (
          <div
            key={mood}
            className="mood-badge"
            style={{ '--mood-color': MOOD_COLORS[mood] } as React.CSSProperties}
          >
            <span className="mood-badge__icon" aria-hidden="true">
              {MOOD_ICONS[mood]}
            </span>
            <span className="mood-badge__label">{mood}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
