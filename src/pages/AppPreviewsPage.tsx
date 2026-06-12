import { BMManagerPreview } from '../components/previews/BMManagerPreview'
import { BeezIdLoginPreview } from '../components/previews/BeezIdLoginPreview'
import { FlowPreview } from '../components/previews/FlowPreview'
import { GenericAppPreview } from '../components/previews/GenericAppPreview'
import { GravityPreview } from '../components/previews/GravityPreview'
import { BeezPageHeader } from '../components/ui/BeezPageHeader'

export function AppPreviewsPage() {
  return (
    <>
      <BeezPageHeader eyebrow="PRODUCT ECOSYSTEM" title="One Beez architecture, product-specific operational signals." description="Las previews comparten surfaces, bordes, densidad, tipografia y estructura. El acento identifica contexto, no decora toda la pantalla." />
      <section className="beez-section beez-grid beez-grid-2">
        <BeezIdLoginPreview />
        <GravityPreview />
        <BMManagerPreview />
        <FlowPreview />
        <GenericAppPreview />
      </section>
    </>
  )
}
