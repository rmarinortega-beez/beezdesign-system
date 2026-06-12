import { BeezCard } from '../components/ui/BeezCard'
import { BeezPageHeader } from '../components/ui/BeezPageHeader'
import { beezThemes } from '../theme/themes'

const baseTokens = [
  ['--beez-bg', '#070708', 'Fondo raiz dark tech'],
  ['--beez-surface', '#181A20', 'Cards y paneles base'],
  ['--beez-surface-elevated', '#22252D', 'Capas elevadas'],
  ['--beez-border', '#30343D', 'Division sutil'],
  ['--beez-text', '#F5F2E8', 'Texto principal calido'],
  ['--beez-text-muted', '#A9A69B', 'Texto secundario'],
]

const semanticTokens = [
  ['--beez-success', '#34D399', 'Acciones completadas'],
  ['--beez-warning', '#F6B73C', 'Atencion no bloqueante'],
  ['--beez-danger', '#FB5B63', 'Errores y riesgo'],
  ['--beez-info', '#38BDF8', 'Informacion contextual'],
]

function TokenTable({ rows }: { rows: string[][] }) {
  return (
    <div className="beez-token-table">
      {rows.map(([token, value, description]) => (
        <div className="beez-token-row" key={token}>
          <code>{token}</code>
          <span className="beez-swatch" style={{ background: value }} />
          <span className="beez-muted">{description}</span>
        </div>
      ))}
    </div>
  )
}

export function ColorsPage() {
  return (
    <>
      <BeezPageHeader
        eyebrow="TOKEN SYSTEM"
        title="A restrained color system for product architecture."
        description="Honey identifica Beez y jerarquia principal. Los acentos de app se usan para contexto operativo, seleccion, estados activos y rutas de producto, no como decoracion masiva."
      />
      <section className="beez-section">
        <div className="beez-section-title"><h2>Base colors</h2></div>
        <TokenTable rows={baseTokens} />
      </section>
      <section className="beez-section">
        <div className="beez-section-title"><h2>Semantic colors</h2></div>
        <TokenTable rows={semanticTokens} />
      </section>
      <section className="beez-section">
        <div className="beez-section-title"><h2>App accents</h2><p>El ADN Beez domina; cada acento solo cambia la senal de producto.</p></div>
        <div className="beez-grid beez-grid-5 colors-app-grid">
          {beezThemes.map((theme) => (
            <BeezCard key={theme.id}>
              <div className="color-pair">
                <span style={{ background: theme.primary }} />
                <span style={{ background: theme.accent }} />
              </div>
              <h3>{theme.name}</h3>
              <p className="beez-muted">{theme.description}</p>
            </BeezCard>
          ))}
        </div>
      </section>
      <section className="beez-section">
        <div className="beez-section-title"><h2>Surface layers</h2><p>Contraste por capas, borde fino y sombra minima.</p></div>
        <div className="beez-grid beez-grid-4">
          {['bg', 'surface', 'elevated', 'muted'].map((item) => <BeezCard key={item} variant={item === 'elevated' ? 'elevated' : 'basic'}>{item}</BeezCard>)}
        </div>
      </section>
    </>
  )
}
