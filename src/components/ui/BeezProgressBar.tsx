export interface BeezProgressBarProps {
  value: number
  label?: string
}

export function BeezProgressBar({ label, value }: BeezProgressBarProps) {
  const safeValue = Math.max(0, Math.min(100, value))

  return (
    <div className="beez-progress">
      {label ? (
        <div className="beez-progress__label">
          <span>{label}</span>
          <span>{safeValue}%</span>
        </div>
      ) : null}
      <div aria-valuemax={100} aria-valuemin={0} aria-valuenow={safeValue} className="beez-progress__track" role="progressbar">
        <span style={{ width: `${safeValue}%` }} />
      </div>
    </div>
  )
}
