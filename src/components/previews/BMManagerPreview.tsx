import { ClipboardCheck, TimerReset } from 'lucide-react'
import { BeezBadge } from '../ui/BeezBadge'
import { BeezCard } from '../ui/BeezCard'
import { BeezMetricCard } from '../ui/BeezMetricCard'
import { BeezProgressBar } from '../ui/BeezProgressBar'

export function BMManagerPreview() {
  return (
    <div className="preview" data-theme="bmmanager">
      <div className="preview__header">
        <div>
          <span>BMManager</span>
          <h3>Team operations layer</h3>
        </div>
        <BeezBadge intent="info">Tactical</BeezBadge>
      </div>
      <div className="beez-grid beez-grid-2">
        <BeezMetricCard icon={<ClipboardCheck size={18} />} label="Sessions" value="34" delta="+5" />
        <BeezMetricCard icon={<TimerReset size={18} />} label="Readiness" value="91%" delta="+8%" />
      </div>
      <BeezCard>
        <div className="module-kicker">Sport & health layer</div>
        <BeezProgressBar label="Training load" value={68} />
        <BeezProgressBar label="Medical follow-up" value={82} />
      </BeezCard>
    </div>
  )
}
