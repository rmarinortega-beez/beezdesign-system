import type { ReactNode } from 'react'

export interface BeezPageHeaderProps {
  title: string
  eyebrow?: string
  description?: string
  actions?: ReactNode
}

export function BeezPageHeader({ actions, description, eyebrow, title }: BeezPageHeaderProps) {
  return (
    <header className="beez-page-header">
      <div>
        {eyebrow ? <p className="beez-page-header__eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {description ? <p>{description}</p> : null}
      </div>
      {actions ? <div className="beez-page-header__actions">{actions}</div> : null}
    </header>
  )
}
