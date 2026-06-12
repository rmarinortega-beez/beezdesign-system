import { BarChart3, MoreHorizontal, TrendingUp } from 'lucide-react'
import { EcosystemPatterns } from '../components/previews/EcosystemPatterns'
import { BeezBadge } from '../components/ui/BeezBadge'
import { BeezButton } from '../components/ui/BeezButton'
import { BeezCard } from '../components/ui/BeezCard'
import { BeezMetricCard } from '../components/ui/BeezMetricCard'
import { BeezPageHeader } from '../components/ui/BeezPageHeader'

export function CardsPage() {
  return (
    <>
      <BeezPageHeader eyebrow="MODULE SURFACES" title="Cards as platform modules, not soft app tiles." description="Superficies rectangulares, densas y tecnicas: borde fino, header pequeno, etiqueta de capa e indicador sutil." />
      <section className="beez-section beez-grid beez-grid-3">
        <BeezCard><BeezBadge>Layer</BeezBadge><h3>Identity module</h3><p className="beez-muted">Compact surface with technical metadata and shared rhythm.</p></BeezCard>
        <BeezCard variant="elevated"><BeezBadge intent="warning">Priority</BeezBadge><h3>Cloud-first module</h3><p className="beez-muted">Depth is limited to hierarchy, not decoration.</p></BeezCard>
        <BeezCard variant="interactive"><BeezBadge intent="info">Interactive</BeezBadge><h3>Connected product</h3><p className="beez-muted">Hover changes border and layer contrast only.</p></BeezCard>
      </section>
      <section className="beez-section beez-grid beez-grid-3">
        <BeezMetricCard icon={<TrendingUp size={18} />} label="Revenue proxy" value="42.8k" delta="+18%" />
        <BeezCard><div className="card-action"><div><h3>Invite workspace</h3><p className="beez-muted">Prepared CTA pattern.</p></div><BeezButton size="sm">Invite</BeezButton></div></BeezCard>
        <BeezCard><div className="card-chart-head"><BarChart3 size={18} /><MoreHorizontal size={18} /></div><div className="preview-bars">{[30, 52, 44, 68, 84, 57].map((v) => <span key={v} style={{ height: `${v}%` }} />)}</div></BeezCard>
      </section>
      <section className="beez-section">
        <div className="beez-section-title">
          <h2>Ecosystem patterns</h2>
          <p>Reusable card archetypes for product, layer, architecture, event and core platform modules.</p>
        </div>
        <EcosystemPatterns />
      </section>
    </>
  )
}
