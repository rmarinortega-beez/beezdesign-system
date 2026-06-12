import type { HTMLAttributes, ReactNode } from 'react'
import type { BeezIntent } from './types'

export interface BeezBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  intent?: BeezIntent
}

export function BeezBadge({ children, className = '', intent = 'neutral', ...props }: BeezBadgeProps) {
  return (
    <span className={`beez-badge beez-badge--${intent} ${className}`} {...props}>
      {children}
    </span>
  )
}
