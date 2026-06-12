import { BeezButton } from '../components/ui/BeezButton'
import { BeezCard } from '../components/ui/BeezCard'
import { BeezInput } from '../components/ui/BeezInput'
import { BeezPageHeader } from '../components/ui/BeezPageHeader'
import { BeezSelect } from '../components/ui/BeezSelect'
import { BeezTextarea } from '../components/ui/BeezTextarea'
import { BeezToggle } from '../components/ui/BeezToggle'

export function FormsPage() {
  return (
    <>
      <BeezPageHeader eyebrow="PLATFORM FORMS" title="Technical forms for access, setup and product configuration." description="Inputs compactos, labels tecnicos y estados discretos. BeezID se presenta como puerta segura a la plataforma, sin patrones consumer." />
      <section className="beez-section beez-grid beez-grid-3">
        <BeezCard className="form-card" data-theme="beezid" variant="elevated">
          <div className="module-kicker">Identity/access module</div>
          <h3>BeezID gateway</h3>
          <BeezInput label="Workspace email" placeholder="you@company.com" type="email" />
          <BeezInput error="Minimum 12 characters." label="Access key" placeholder="Password" type="password" />
          <BeezToggle label="Trusted device" description="Visual-only platform flag." defaultChecked />
          <BeezButton>Verify access</BeezButton>
        </BeezCard>
        <BeezCard className="form-card">
          <div className="module-kicker">Company layer</div>
          <h3>Create organization</h3>
          <BeezInput label="Organization name" placeholder="BeezProjects Lab" success="Name available." />
          <BeezSelect label="Cloud region" options={[{ label: 'Europe', value: 'eu' }, { label: 'United States', value: 'us' }]} />
          <BeezTextarea helpText="Short operational context." label="Collaboration scope" placeholder="Internal product workspace..." />
          <BeezButton variant="secondary">Create draft</BeezButton>
        </BeezCard>
        <BeezCard className="form-card">
          <div className="module-kicker">Product module</div>
          <h3>App configuration</h3>
          <BeezSelect label="Theme" options={[{ label: 'Beez Core', value: 'beez' }, { label: 'Gravity', value: 'gravity' }, { label: 'Flow', value: 'flow' }]} />
          <BeezInput helpText="Used only as display metadata." label="Module code" placeholder="OPS-CORE" />
          <BeezToggle label="Enable telemetry view" />
          <BeezButton variant="ghost">Save visual config</BeezButton>
        </BeezCard>
      </section>
    </>
  )
}
