import '../../styles/sustainability-badge.scss'

interface SustainabilityBadgeProps {
  tips: string[]
}

export const SustainabilityBadge = ({ tips }: SustainabilityBadgeProps) => {
  return (
    <div className="sustainability-badge" role="region" aria-label="Sustainability tips">
      <div className="sustainability-badge__header">
        <span className="sustainability-badge__icon" aria-hidden="true">🌱</span>
        <h4 className="sustainability-badge__title">Travel Responsibly</h4>
      </div>
      <ul className="sustainability-badge__list">
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  )
}
