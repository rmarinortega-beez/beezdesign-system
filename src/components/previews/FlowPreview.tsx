import { CheckCircle2, Clock3 } from 'lucide-react'
import { BeezBadge } from '../ui/BeezBadge'
import { BeezCard } from '../ui/BeezCard'
import { BeezProgressBar } from '../ui/BeezProgressBar'

export function FlowPreview() {
  return (
    <div className="preview" data-theme="flow">
      <div className="preview__header">
        <div>
          <span>Flow</span>
          <h3>Automation layer</h3>
        </div>
        <BeezBadge intent="info">Workflow</BeezBadge>
      </div>
      <div className="preview-lanes">
        {['Backlog', 'Doing', 'Review'].map((lane, index) => (
          <BeezCard key={lane} variant={index === 1 ? 'elevated' : 'basic'}>
            <div className="preview__inline">
              {index === 2 ? <CheckCircle2 size={16} /> : <Clock3 size={16} />}
              <strong>{lane}</strong>
            </div>
            <p>{[5, 3, 2][index]} modular tasks</p>
            <BeezProgressBar value={[35, 68, 82][index]} />
          </BeezCard>
        ))}
      </div>
    </div>
  )
}
