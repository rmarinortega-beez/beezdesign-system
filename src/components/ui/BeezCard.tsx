import type { HTMLAttributes, ReactNode } from 'react'

type BeezCardVariant = 'basic' | 'elevated' | 'interactive' | 'muted'

export interface BeezCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  variant?: BeezCardVariant
}

export function BeezCard({ children, className = '', variant = 'basic', ...props }: BeezCardProps) {
  return (
    <div className={`beez-card beez-card--${variant} ${className}`} {...props}>
      {children}
    </div>
  )
}
