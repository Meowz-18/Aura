import { useState } from 'react'
import type { Attraction } from '../../data/travel-types'
import '../../styles/attraction-carousel.scss'

interface AttractionCarouselProps {
  attraction: Attraction
}

export const AttractionCarousel = ({ attraction }: AttractionCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    attraction.postcardMetadata.imageUrl,
    attraction.postcardMetadata.thumbnailUrl,
  ]

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="attraction-carousel">
      <div className="carousel__image-container">
        <img
          src={images[currentIndex]}
          alt={attraction.postcardMetadata.altText}
          className="carousel__image"
        />

        <button
          className="carousel__nav carousel__nav--prev"
          onClick={handlePrevious}
          aria-label="Previous image"
        >
          ◀
        </button>
        <button
          className="carousel__nav carousel__nav--next"
          onClick={handleNext}
          aria-label="Next image"
        >
          ▶
        </button>

        <div className="carousel__indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel__indicator ${index === currentIndex ? 'carousel__indicator--active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="carousel__info">
        <h2 className="carousel__title">{attraction.name}</h2>
        <p className="carousel__caption">{attraction.caption}</p>
        
        <div className="carousel__details">
          <div className="carousel__detail-item">
            <span className="carousel__detail-label">Best Season:</span>
            <span className="carousel__detail-value">{attraction.bestSeasons[0]}</span>
          </div>
          
          <div className="carousel__detail-item">
            <span className="carousel__detail-label">Travel Tip:</span>
            <span className="carousel__detail-value">{attraction.travelTips[0]}</span>
          </div>

          <div className="carousel__tags">
            {attraction.tags.map(tag => (
              <span key={tag} className="carousel__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
