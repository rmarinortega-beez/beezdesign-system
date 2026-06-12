import { Download, Plus } from 'lucide-react'
import { BeezButton } from '../components/ui/BeezButton'
import { BeezCard } from '../components/ui/BeezCard'
import { BeezPageHeader } from '../components/ui/BeezPageHeader'

export function ButtonsPage() {
  return (
    <>
      <BeezPageHeader eyebrow="Buttons" title="Action controls with clear hierarchy." description="Variantes para acciones primarias, secundarias, discretas y estados semanticos." />
      <section className="beez-section">
        <BeezCard>
          <div className="button-demo">
            <BeezButton leftIcon={<Plus size={16} />}>Primary</BeezButton>
            <BeezButton variant="secondary">Secondary</BeezButton>
            <BeezButton variant="ghost">Ghost</BeezButton>
            <BeezButton variant="danger">Danger</BeezButton>
            <BeezButton variant="success">Success</BeezButton>
            <BeezButton disabled>Disabled</BeezButton>
            <BeezButton loading>Loading</BeezButton>
          </div>
        </BeezCard>
      </section>
      <section className="beez-section beez-grid beez-grid-3">
        <BeezCard><BeezButton size="sm" rightIcon={<Download size={14} />}>Small</BeezButton></BeezCard>
        <BeezCard><BeezButton size="md" rightIcon={<Download size={16} />}>Medium</BeezButton></BeezCard>
        <BeezCard><BeezButton size="lg" rightIcon={<Download size={18} />}>Large</BeezButton></BeezCard>
      </section>
    </>
  )
}
