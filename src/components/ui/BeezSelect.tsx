import type { SelectHTMLAttributes } from 'react'
import type { BeezFieldProps } from './form-shared'

export interface BeezSelectOption {
  label: string
  value: string
}

export interface BeezSelectProps extends SelectHTMLAttributes<HTMLSelectElement>, BeezFieldProps {
  options: BeezSelectOption[]
}

export function BeezSelect({ className = '', error, helpText, id, label, options, success, ...props }: BeezSelectProps) {
  const selectId = id ?? `beez-select-${label?.toLowerCase().replaceAll(' ', '-') ?? 'field'}`

  return (
    <label className="beez-field" htmlFor={selectId}>
      {label ? <span className="beez-field__label">{label}</span> : null}
      <select
        aria-invalid={Boolean(error)}
        className={`beez-control beez-select ${error ? 'beez-control--error' : ''} ${success ? 'beez-control--success' : ''} ${className}`}
        id={selectId}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? <span className="beez-field__error">{error}</span> : null}
      {!error && success ? <span className="beez-field__success">{success}</span> : null}
      {!error && !success && helpText ? <span className="beez-field__help">{helpText}</span> : null}
    </label>
  )
}
