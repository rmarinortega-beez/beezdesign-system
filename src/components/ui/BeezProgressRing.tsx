export interface BeezProgressRingProps {
  value: number
  label?: string
  size?: number
}

export function BeezProgressRing({ label, size = 92, value }: BeezProgressRingProps) {
  const safeValue = Math.max(0, Math.min(100, value))
  const radius = 38
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (safeValue / 100) * circumference

  return (
    <div className="beez-ring" style={{ height: size, width: size }}>
      <svg aria-hidden="true" viewBox="0 0 100 100">
        <circle className="beez-ring__track" cx="50" cy="50" r={radius} />
        <circle className="beez-ring__value" cx="50" cy="50" r={radius} strokeDasharray={circumference} strokeDashoffset={offset} />
      </svg>
      <div>
        <strong>{safeValue}%</strong>
        {label ? <span>{label}</span> : null}
      </div>
    </div>
  )
}
