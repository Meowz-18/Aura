interface ProgressBarProps {
  value: number
}

export const ProgressBar = ({ value }: ProgressBarProps) => (
  <div className="progress-bar" aria-hidden="true">
    <div className="progress-bar__value" style={{ width: `${Math.min(1, Math.max(0, value)) * 100}%` }} />
  </div>
)
