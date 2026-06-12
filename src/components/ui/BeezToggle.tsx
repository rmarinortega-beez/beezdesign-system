import type { InputHTMLAttributes } from 'react'

export interface BeezToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
  description?: string
}

export function BeezToggle({ className = '', description, id, label, ...props }: BeezToggleProps) {
  const toggleId = id ?? `beez-toggle-${label.toLowerCase().replaceAll(' ', '-')}`

  return (
    <label className={`beez-toggle ${className}`} htmlFor={toggleId}>
      <span>
        <span className="beez-toggle__label">{label}</span>
        {description ? <span className="beez-toggle__description">{description}</span> : null}
      </span>
      <input id={toggleId} type="checkbox" {...props} />
      <span aria-hidden="true" className="beez-toggle__track">
        <span className="beez-toggle__thumb" />
      </span>
    </label>
  )
}
