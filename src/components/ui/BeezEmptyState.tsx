import type { ReactNode } from 'react'
import { Inbox } from 'lucide-react'
import { BeezButton } from './BeezButton'

export interface BeezEmptyStateProps {
  title: string
  description: string
  actionLabel?: string
  icon?: ReactNode
}

export function BeezEmptyState({ actionLabel, description, icon, title }: BeezEmptyStateProps) {
  return (
    <div className="beez-state">
      <div className="beez-state__icon">{icon ?? <Inbox size={28} />}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      {actionLabel ? <BeezButton size="sm">{actionLabel}</BeezButton> : null}
    </div>
  )
}
