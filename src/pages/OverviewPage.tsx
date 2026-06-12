import { ArrowRight, Boxes, Cpu, Network } from 'lucide-react'
import { EcosystemPatterns } from '../components/previews/EcosystemPatterns'
import { BeezBadge } from '../components/ui/BeezBadge'
import { BeezButton } from '../components/ui/BeezButton'
import { BeezCard } from '../components/ui/BeezCard'
import { BeezMetricCard } from '../components/ui/BeezMetricCard'
import { BeezPageHeader } from '../components/ui/BeezPageHeader'
import { BeezProgressBar } from '../components/ui/BeezProgressBar'
import { BeezThemeSwitcher } from '../components/ui/BeezThemeSwitcher'
import { useBeezTheme } from '../theme/useBeezTheme'

export function OverviewPage() {
  const { theme } = useBeezTheme()

  return (
    <>
      <BeezPageHeader
        eyebrow="BEEZ CONTROL PLANE"
        title="Design primitives for a connected product ecosystem."
        description="Beez se estructura como una plataforma modular: identidad comun, capas transversales, productos conectados y acentos propios por app. Honey identifica la marca; los acentos solo senalan contexto operativo."
        actions={<BeezBadge intent="warning">{theme.name}</BeezBadge>}
      />

      <section className="beez-section">
        <div className="beez-section-title">
          <h2>Theme DNA</h2>
          <p>El selector modifica variables CSS globales; los componentes mantienen estructura, densidad y lenguaje de plataforma.</p>
        </div>
        <BeezThemeSwitcher />
      </section>

      <section className="beez-section beez-grid beez-grid-3">
        <BeezMetricCard icon={<Boxes size={18} />} label="UI modules" value="15" delta="Library base" />
        <BeezMetricCard icon={<Cpu size={18} />} label="Theme nodes" value="5" delta="App accents" />
        <BeezMetricCard icon={<Network size={18} />} label="System layers" value="8" delta="Design Center" />
      </section>

      <section className="beez-section">
        <div className="beez-demo-band">
          <div className="beez-grid beez-grid-2">
            <BeezCard variant="elevated">
              <BeezBadge>Identity / accent model</BeezBadge>
              <h2>Common Beez architecture, app-level operational signal.</h2>
              <p className="beez-muted">Honey queda como marca y jerarquia principal. El acento de app marca contexto, estado activo y rutas de producto.</p>
              <div className="overview-actions">
                <BeezButton rightIcon={<ArrowRight size={16} />}>Primary action</BeezButton>
                <BeezButton variant="secondary">Secondary</BeezButton>
                <BeezButton variant="ghost">Ghost</BeezButton>
              </div>
            </BeezCard>
            <BeezCard>
              <BeezProgressBar label="Component coverage" value={78} />
              <BeezProgressBar label="Theme readiness" value={92} />
              <BeezProgressBar label="Library extraction" value={46} />
            </BeezCard>
          </div>
        </div>
      </section>

      <section className="beez-section">
        <div className="beez-section-title">
          <h2>Ecosystem patterns</h2>
          <p>Patrones de modulo, capa, arquitectura y flujo para que Beez parezca un sistema conectado, no una coleccion de cards sueltas.</p>
        </div>
        <EcosystemPatterns />
      </section>
    </>
  )
}
