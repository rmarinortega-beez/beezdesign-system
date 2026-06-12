import type { TextareaHTMLAttributes } from 'react'
import type { BeezFieldProps } from './form-shared'

export interface BeezTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, BeezFieldProps {}

export function BeezTextarea({ className = '', error, helpText, id, label, success, ...props }: BeezTextareaProps) {
  const textareaId = id ?? `beez-textarea-${label?.toLowerCase().replaceAll(' ', '-') ?? 'field'}`

  return (
    <label className="beez-field" htmlFor={textareaId}>
      {label ? <span className="beez-field__label">{label}</span> : null}
      <textarea
        aria-invalid={Boolean(error)}
        className={`beez-control beez-textarea ${error ? 'beez-control--error' : ''} ${success ? 'beez-control--success' : ''} ${className}`}
        id={textareaId}
        {...props}
      />
      {error ? <span className="beez-field__error">{error}</span> : null}
      {!error && success ? <span className="beez-field__success">{success}</span> : null}
      {!error && !success && helpText ? <span className="beez-field__help">{helpText}</span> : null}
    </label>
  )
}
