import { useState } from 'react'
import type { Attraction } from '../../data/travel-types'
import '../../styles/shareable-postcard.scss'

interface ShareablePostcardProps {
  attraction: Attraction
}

export const ShareablePostcard = ({ attraction }: ShareablePostcardProps) => {
  const [showShare, setShowShare] = useState(false)

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: attraction.name,
        text: attraction.caption,
        url: window.location.href,
      })
    } else {
      setShowShare(true)
    }
  }

  return (
    <div className="shareable-postcard">
      <button className="postcard-button" onClick={handleShare} aria-label="Share this attraction">
        <span aria-hidden="true">📮</span>
        <span>Share Postcard</span>
      </button>

      {showShare && (
        <div className="postcard-modal" role="dialog" aria-label="Share options">
          <div className="postcard-modal__content">
            <button
              className="postcard-modal__close"
              onClick={() => setShowShare(false)}
              aria-label="Close share dialog"
            >
              ✕
            </button>
            <h4>Share {attraction.name}</h4>
            <div className="postcard-preview">
              <img
                src={attraction.postcardMetadata.thumbnailUrl}
                alt={attraction.postcardMetadata.altText}
              />
              <p>{attraction.caption}</p>
            </div>
            <div className="share-buttons">
              <button onClick={() => navigator.clipboard.writeText(window.location.href)}>
                Copy Link
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
