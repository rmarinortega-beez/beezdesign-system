import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Loader2 } from 'lucide-react'
import type { BeezSize } from './types'

type BeezButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'success'

export interface BeezButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BeezButtonVariant
  size?: BeezSize
  loading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

export function BeezButton({
  children,
  className = '',
  disabled,
  leftIcon,
  loading = false,
  rightIcon,
  size = 'md',
  variant = 'primary',
  ...props
}: BeezButtonProps) {
  return (
    <button
      className={`beez-button beez-button--${variant} beez-button--${size} ${className}`}
      disabled={disabled || loading}
      type="button"
      {...props}
    >
      {loading ? <Loader2 aria-hidden="true" className="beez-button__spinner" size={16} /> : leftIcon}
      <span>{children}</span>
      {rightIcon}
    </button>
  )
}
