import { Activity, Zap } from 'lucide-react'
import { BeezBadge } from '../ui/BeezBadge'
import { BeezCard } from '../ui/BeezCard'
import { BeezMetricCard } from '../ui/BeezMetricCard'
import { BeezProgressBar } from '../ui/BeezProgressBar'

export function GravityPreview() {
  return (
    <div className="preview" data-theme="gravity">
      <div className="preview__header">
        <div>
          <span>Gravity</span>
          <h3>Event operations layer</h3>
        </div>
        <BeezBadge intent="warning">Event</BeezBadge>
      </div>
      <div className="beez-grid beez-grid-2">
        <BeezMetricCard icon={<Zap size={18} />} label="Active flows" value="128" delta="+12%" />
        <BeezMetricCard icon={<Activity size={18} />} label="Load" value="84%" delta="+7%" />
      </div>
      <BeezCard>
        <div className="module-kicker">Automation signal</div>
        <BeezProgressBar label="Dispatch intensity" value={76} />
        <div className="preview-bars">
          {[44, 72, 54, 88, 63, 91, 70].map((value) => <span key={value} style={{ height: `${value}%` }} />)}
        </div>
      </BeezCard>
    </div>
  )
}
