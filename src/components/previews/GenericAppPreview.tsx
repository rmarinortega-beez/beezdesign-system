import { Boxes, Cpu, Network } from 'lucide-react'
import { BeezBadge } from '../ui/BeezBadge'
import { BeezButton } from '../ui/BeezButton'
import { BeezCard } from '../ui/BeezCard'

export function GenericAppPreview() {
  return (
    <div className="preview" data-theme="beez">
      <div className="preview__header">
        <div>
          <span>Beez Core</span>
          <h3>Core platform module</h3>
        </div>
        <BeezBadge>Core DNA</BeezBadge>
      </div>
      <BeezCard variant="interactive">
        <div className="preview-network">
          <span><Boxes size={18} /></span>
          <i />
          <span><Cpu size={18} /></span>
          <i />
          <span><Network size={18} /></span>
        </div>
        <p>Shared dark tech foundation with app-level operational accents.</p>
        <BeezButton size="sm" variant="secondary">Open module</BeezButton>
      </BeezCard>
    </div>
  )
}
