import { BeezBadge } from '../components/ui/BeezBadge'
import { BeezCard } from '../components/ui/BeezCard'
import { BeezPageHeader } from '../components/ui/BeezPageHeader'
import { beezThemes } from '../theme/themes'

const installExample = `npm install @beez/ui`

const basicUsage = `import '@beez/ui/styles.css';
import { BeezButton, BeezCard, BeezThemeProvider } from '@beez/ui';

export function GravityPanel() {
  return (
    <BeezThemeProvider theme="gravity">
      <BeezCard>
        <BeezButton variant="primary">Empezar</BeezButton>
      </BeezCard>
    </BeezThemeProvider>
  );
}`

const themeSwitch = `<BeezThemeProvider theme="beez | gravity | bmmanager | flow | beezid">
  <App />
</BeezThemeProvider>`

const newTheme = `[data-theme='newapp'] {
  --beez-primary: #14B8A6;
  --beez-primary-hover: #2DD4BF;
  --beez-primary-soft: rgba(20, 184, 166, 0.1);
  --beez-accent: #38BDF8;
  --beez-accent-soft: rgba(56, 189, 248, 0.08);
  --beez-focus: #5EEAD4;
  --beez-glow: rgba(20, 184, 166, 0.1);
}`

function CodeBlock({ code, label }: { code: string; label: string }) {
  return (
    <BeezCard className="integration-code">
      <div className="module-kicker">{label}</div>
      <pre><code>{code}</code></pre>
    </BeezCard>
  )
}

export function IntegrationPage() {
  return (
    <>
      <BeezPageHeader
        eyebrow="INTEGRATION"
        title="Use Beez UI from Gravity, Flow, BMManager or BeezID."
        description="El Design Center sigue siendo la demo visual. Los componentes, temas y estilos quedan preparados para ser consumidos como futura libreria @beez/ui."
      />

      <section className="beez-section beez-grid beez-grid-2">
        <CodeBlock code={installExample} label="Future install" />
        <CodeBlock code={`import '@beez/ui/styles.css';`} label="Styles import" />
      </section>

      <section className="beez-section">
        <CodeBlock code={basicUsage} label="Basic React usage" />
      </section>

      <section className="beez-section beez-grid beez-grid-2">
        <CodeBlock code={themeSwitch} label="Theme prop" />
        <BeezCard className="integration-card">
          <div className="module-kicker">Central themes</div>
          <div className="integration-theme-list">
            {beezThemes.map((theme) => (
              <div key={theme.id}>
                <span className="beez-swatch" style={{ background: theme.primary }} />
                <div>
                  <strong>{theme.id}</strong>
                  <p>{theme.useCase}</p>
                </div>
                <BeezBadge>{theme.name}</BeezBadge>
              </div>
            ))}
          </div>
        </BeezCard>
      </section>

      <section className="beez-section beez-grid beez-grid-2">
        <CodeBlock code={newTheme} label="New theme CSS" />
        <BeezCard className="integration-card">
          <div className="module-kicker">Add a theme</div>
          <ol className="integration-steps">
            <li>Add a <code>[data-theme='newapp']</code> block in <code>src/styles/themes.css</code>.</li>
            <li>Add metadata in <code>src/theme/themes.ts</code> with id, name, description, primary, accent and useCase.</li>
            <li>Use <code>{'<BeezThemeProvider theme="newapp">'}</code> in the consuming app.</li>
          </ol>
        </BeezCard>
      </section>
    </>
  )
}
