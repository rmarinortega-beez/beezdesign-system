import { AlertTriangle, CheckCircle2, LockKeyhole } from 'lucide-react'
import { BeezCard } from '../components/ui/BeezCard'
import { BeezEmptyState } from '../components/ui/BeezEmptyState'
import { BeezLoadingState } from '../components/ui/BeezLoadingState'
import { BeezPageHeader } from '../components/ui/BeezPageHeader'

export function StatesPage() {
  return (
    <>
      <BeezPageHeader eyebrow="States" title="Reusable state language for empty, loading and blocked flows." description="Estados sin logica real, listos para integrarse con aplicaciones React." />
      <section className="beez-section beez-grid beez-grid-2">
        <BeezEmptyState title="No modules yet" description="Create the first visual module for this workspace." actionLabel="Create module" />
        <BeezLoadingState label="Loading design tokens" />
        <BeezCard className="state-card state-card--danger"><AlertTriangle size={28} /><h3>Something failed</h3><p>We could not load this visual dataset. Try again later.</p></BeezCard>
        <BeezCard className="state-card state-card--success"><CheckCircle2 size={28} /><h3>Configuration saved</h3><p>The app shell accepted the visual settings.</p></BeezCard>
        <BeezCard className="state-card"><LockKeyhole size={28} /><h3>Permission denied</h3><p>This preview is reserved for workspace administrators.</p></BeezCard>
      </section>
    </>
  )
}
