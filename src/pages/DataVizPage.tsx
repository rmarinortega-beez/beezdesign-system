import { Activity, Gauge, PieChart, SignalHigh } from 'lucide-react'
import { BeezBadge } from '../components/ui/BeezBadge'
import { BeezCard } from '../components/ui/BeezCard'
import { BeezMetricCard } from '../components/ui/BeezMetricCard'
import { BeezPageHeader } from '../components/ui/BeezPageHeader'
import { BeezProgressBar } from '../components/ui/BeezProgressBar'
import { BeezProgressRing } from '../components/ui/BeezProgressRing'

export function DataVizPage() {
  return (
    <>
      <BeezPageHeader eyebrow="SYSTEM SIGNALS" title="Compact metrics and operational indicators." description="Visualizacion falsa para probar densidad, jerarquia, estados, progreso y senales de sistema sin parecer un dashboard decorativo." />
      <section className="beez-section beez-grid beez-grid-4">
        <BeezMetricCard icon={<Activity size={18} />} label="Uptime" value="99.8%" delta="+0.4%" />
        <BeezMetricCard icon={<SignalHigh size={18} />} label="Events" value="18.2k" delta="+9%" />
        <BeezMetricCard icon={<Gauge size={18} />} label="Latency" value="124ms" delta="-12%" />
        <BeezMetricCard icon={<PieChart size={18} />} label="Coverage" value="72%" delta="+6%" />
      </section>
      <section className="beez-section beez-grid beez-grid-2">
        <BeezCard>
          <div className="module-kicker">Event load</div>
          <h3>Bars</h3>
          <div className="preview-bars dataviz-bars">{[42, 64, 38, 80, 72, 92, 58, 76].map((v) => <span key={v} style={{ height: `${v}%` }} />)}</div>
        </BeezCard>
        <BeezCard>
          <div className="module-kicker">Opportunity route</div>
          <h3>Line</h3>
          <div className="fake-line"><span /><span /><span /><span /><span /></div>
        </BeezCard>
      </section>
      <section className="beez-section beez-grid beez-grid-3">
        <BeezCard><BeezProgressBar label="Design readiness" value={88} /><BeezProgressBar label="Docs coverage" value={54} /><BeezProgressBar label="Token stability" value={76} /></BeezCard>
        <BeezCard className="ring-row"><BeezProgressRing label="UI" value={82} /><BeezProgressRing label="A11y" value={67} /></BeezCard>
        <BeezCard><div className="button-demo"><BeezBadge intent="success">Healthy</BeezBadge><BeezBadge intent="warning">Queued</BeezBadge><BeezBadge intent="danger">Blocked</BeezBadge><BeezBadge intent="info">Syncing</BeezBadge></div></BeezCard>
      </section>
    </>
  )
}
