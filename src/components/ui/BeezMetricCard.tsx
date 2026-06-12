import type { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { BeezCard } from './BeezCard'

export interface BeezMetricCardProps {
  label: string
  value: string
  delta?: string
  icon?: ReactNode
}

export function BeezMetricCard({ delta, icon, label, value }: BeezMetricCardProps) {
  return (
    <BeezCard className="beez-metric-card" variant="elevated">
      <div className="beez-metric-card__icon">{icon ?? <ArrowUpRight size={18} />}</div>
      <span>{label}</span>
      <strong>{value}</strong>
      {delta ? <small>{delta}</small> : null}
    </BeezCard>
  )
}
