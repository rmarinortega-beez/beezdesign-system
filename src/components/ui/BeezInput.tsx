import type { InputHTMLAttributes } from 'react'
import type { BeezFieldProps } from './form-shared'

export interface BeezInputProps extends InputHTMLAttributes<HTMLInputElement>, BeezFieldProps {}

export function BeezInput({ className = '', error, helpText, id, label, success, ...props }: BeezInputProps) {
  const inputId = id ?? `beez-input-${label?.toLowerCase().replaceAll(' ', '-') ?? 'field'}`

  return (
    <label className="beez-field" htmlFor={inputId}>
      {label ? <span className="beez-field__label">{label}</span> : null}
      <input
        aria-invalid={Boolean(error)}
        className={`beez-control ${error ? 'beez-control--error' : ''} ${success ? 'beez-control--success' : ''} ${className}`}
        id={inputId}
        {...props}
      />
      {error ? <span className="beez-field__error">{error}</span> : null}
      {!error && success ? <span className="beez-field__success">{success}</span> : null}
      {!error && !success && helpText ? <span className="beez-field__help">{helpText}</span> : null}
    </label>
  )
}
