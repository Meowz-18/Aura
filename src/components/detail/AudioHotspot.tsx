import { useState, useRef, useEffect } from 'react'
import type { AudioDescription } from '../../data/travel-types'
import '../../styles/audio-hotspot.scss'

interface AudioHotspotProps {
  audioDescription: AudioDescription
}

export const AudioHotspot = ({ audioDescription }: AudioHotspotProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [showTranscript, setShowTranscript] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const handleEnded = () => setIsPlaying(false)

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [])

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const progress = (currentTime / audioDescription.duration) * 100

  return (
    <section className="audio-hotspot" aria-labelledby="audio-hotspot-title">
      <h3 id="audio-hotspot-title" className="audio-hotspot__title">
        Audio Guide
      </h3>

      <audio ref={audioRef} src={audioDescription.url} preload="metadata" />

      <div className="audio-player">
        <button
          className="audio-player__button"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>

        <div className="audio-player__info">
          <div className="audio-player__progress-container">
            <div
              className="audio-player__progress"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="audio-player__time">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(audioDescription.duration)}</span>
          </div>
        </div>

        <button
          className="audio-player__transcript-toggle"
          onClick={() => setShowTranscript(!showTranscript)}
          aria-expanded={showTranscript}
          aria-controls="audio-transcript"
        >
          📝
        </button>
      </div>

      {showTranscript && (
        <div
          id="audio-transcript"
          className="audio-transcript"
          role="region"
          aria-label="Audio transcript"
        >
          <p>{audioDescription.transcript}</p>
        </div>
      )}
    </section>
  )
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}
