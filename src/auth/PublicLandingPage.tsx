import { Boxes, Fingerprint, GitBranch, Layers3, Palette, ShieldCheck } from 'lucide-react'
import { BeezBadge } from '../components/ui/BeezBadge'
import { BeezButton } from '../components/ui/BeezButton'
import { BeezCard } from '../components/ui/BeezCard'
import { BeezMetricCard } from '../components/ui/BeezMetricCard'
import { BeezProgressBar } from '../components/ui/BeezProgressBar'
import { navigateTo } from '../app/routes'

const VALUE_ITEMS = ['Tokens compartidos', 'Temas por producto', 'Componentes React', 'Patrones de ecosistema']

export function PublicLandingPage() {
  return (
    <main className="design-landing" data-theme="beez">
      <header className="design-landing-header">
        <a href="/" className="design-landing-brand" aria-label="Beez Design Center home">
          <span className="design-brand-mark" aria-hidden="true">
            <Boxes size={20} />
          </span>
          <span>
            <strong>Beez Design Center</strong>
            <small>Powered by BeezProjects</small>
          </span>
        </a>
        <div className="design-landing-nav">
          <BeezButton type="button" variant="ghost" size="sm" onClick={() => navigateTo('/login')}>
            Iniciar sesión
          </BeezButton>
          <BeezButton type="button" size="sm" onClick={() => navigateTo('/register')}>
            Crear cuenta
          </BeezButton>
        </div>
      </header>

      <section className="design-landing-hero">
        <div className="design-landing-copy">
          <BeezBadge intent="info">Beez ecosystem authority</BeezBadge>
          <h1>Design System for connected Beez apps.</h1>
          <p>
            Una base visual común para Gravity, Flow, BMManager y BeezID: componentes reutilizables,
            tokens, temas y patrones de plataforma para que cada producto conserve su acento sin
            perder el ADN Beez.
          </p>
          <div className="design-landing-benefits">
            {VALUE_ITEMS.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <BeezCard className="design-landing-panel">
          <div className="design-panel-header">
            <div>
              <span className="module-kicker">Visual control plane</span>
              <h2>Core UI system</h2>
            </div>
            <div className="design-panel-mark">
              <Fingerprint size={18} />
            </div>
          </div>

          <div className="design-mock-grid">
            <BeezMetricCard label="Themes" value="5" delta="App accents" />
            <BeezMetricCard label="UI exports" value="15+" delta="@beez-projects/ui" />
          </div>

          <div className="design-mock-block">
            <div>
              <strong>Beez identity layer</strong>
              <span>Dark tech surfaces, honey brand signal and product-specific accents.</span>
            </div>
            <BeezProgressBar value={86} />
          </div>

          <div className="design-layer-list">
            <span>
              <Palette size={14} />
              TOKENS
            </span>
            <span>
              <Layers3 size={14} />
              COMPONENTS
            </span>
            <span>
              <GitBranch size={14} />
              PATTERNS
            </span>
          </div>
        </BeezCard>
      </section>

      <section className="design-value-strip" aria-label="Design Center value proposition">
        <BeezCard>
          <strong>Tokens</strong>
          <span>Colores, radios, sombras y surfaces centralizados en CSS variables.</span>
        </BeezCard>
        <BeezCard>
          <strong>Themes</strong>
          <span>Beez, Gravity, Flow, BMManager y BeezID con identidad común.</span>
        </BeezCard>
        <BeezCard>
          <strong>Components</strong>
          <span>Botones, cards, formularios, estados y data viz listos para React.</span>
        </BeezCard>
        <BeezCard>
          <strong>Access</strong>
          <div>
            <ShieldCheck size={14} />
            <span>Entrada protegida por BeezID y permisos design-system.</span>
          </div>
        </BeezCard>
      </section>
    </main>
  )
}
