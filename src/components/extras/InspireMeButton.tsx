import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getInspiredAttractions, findStateForAttraction, findDistrictForAttraction } from '../../data/travel-loader'
import '../../styles/inspire-me.scss'

export const InspireMeButton = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleInspire = () => {
    setIsLoading(true)

    setTimeout(() => {
      const attractions = getInspiredAttractions({ limit: 1 })
      const attraction = attractions[0]

      if (attraction) {
        const state = findStateForAttraction(attraction)
        const district = findDistrictForAttraction(attraction)

        if (state && district) {
          navigate(`/india/${state.id}/${district.id}/${attraction.id}`)
        }
      }
      setIsLoading(false)
    }, 800)
  }

  return (
    <button
      className="inspire-me-button"
      onClick={handleInspire}
      disabled={isLoading}
      aria-label="Inspire me with a random attraction"
    >
      <span className="inspire-me-button__icon" aria-hidden="true">
        ✨
      </span>
      <span className="inspire-me-button__text">
        {isLoading ? 'Finding inspiration...' : 'Inspire Me'}
      </span>
    </button>
  )
}
