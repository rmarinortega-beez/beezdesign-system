import { ArrowRight, Boxes, Cloud, Fingerprint, GitBranch, Layers3, Network, Workflow } from 'lucide-react'
import { BeezBadge } from '../ui/BeezBadge'
import { BeezCard } from '../ui/BeezCard'

const products = [
  ['01', 'BeezID', 'IDENTITY LAYER', 'Access, trust and account perimeter'],
  ['02', 'Gravity', 'EVENT LAYER', 'Operational movement and live signals'],
  ['03', 'BMManager', 'SPORT & HEALTH', 'Management layer for tactical teams'],
  ['04', 'Flow', 'AUTOMATION LAYER', 'Workflows, handoffs and productivity'],
]

const steps = [
  ['01', 'Capture', 'Company, event or identity signal enters the ecosystem.'],
  ['02', 'Normalize', 'Shared tokens and cloud-first rules align the module.'],
  ['03', 'Route', 'The right product surface receives context and action.'],
]

export function EcosystemPatterns() {
  return (
    <div className="ecosystem-patterns">
      <BeezCard className="ecosystem-card ecosystem-card--core" variant="interactive">
        <div className="module-kicker"><Boxes size={14} /> Core module</div>
        <div className="core-diagram" aria-hidden="true">
          <span><Cloud size={16} /></span>
          <i />
          <span><Network size={16} /></span>
          <i />
          <span><Fingerprint size={16} /></span>
        </div>
        <h3>Beez ecosystem control plane</h3>
        <p>Common identity, surfaces and collaboration rules for connected products.</p>
      </BeezCard>

      <BeezCard className="ecosystem-card">
        <div className="module-kicker"><Layers3 size={14} /> Product cards</div>
        <div className="product-tile-grid">
          {products.map(([number, name, layer, description]) => (
            <div className="product-tile" key={name}>
              <span>{number}</span>
              <strong>{name}</strong>
              <BeezBadge>{layer}</BeezBadge>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </BeezCard>

      <BeezCard className="ecosystem-card">
        <div className="module-kicker"><GitBranch size={14} /> Architecture steps</div>
        <div className="architecture-steps">
          {steps.map(([number, title, description]) => (
            <div className="architecture-step" key={title}>
              <span>{number}</span>
              <div>
                <strong>{title}</strong>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </BeezCard>

      <BeezCard className="ecosystem-card ecosystem-card--flow">
        <div className="module-kicker"><Workflow size={14} /> Event flow</div>
        <div className="event-flow">
          <span>Company</span>
          <ArrowRight size={14} />
          <span>Opportunity</span>
          <ArrowRight size={14} />
          <span>Product</span>
          <ArrowRight size={14} />
          <span>Action</span>
        </div>
      </BeezCard>
    </div>
  )
}
