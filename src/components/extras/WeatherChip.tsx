import type { WeatherInsight } from '../../data/travel-types'
import '../../styles/weather-chip.scss'

interface WeatherChipProps {
  weather: WeatherInsight
}

export const WeatherChip = ({ weather }: WeatherChipProps) => {
  return (
    <div className="weather-chip">
      <div className="weather-chip__month">{weather.month}</div>
      <div className="weather-chip__temp">
        {weather.temperature.min}°C - {weather.temperature.max}°C
      </div>
      <div className="weather-chip__conditions">{weather.conditions}</div>
    </div>
  )
}
