import { Loader2 } from 'lucide-react'

export interface BeezLoadingStateProps {
  label?: string
}

export function BeezLoadingState({ label = 'Cargando modulo' }: BeezLoadingStateProps) {
  return (
    <div className="beez-state">
      <div className="beez-state__icon">
        <Loader2 className="beez-spin" size={28} />
      </div>
      <h3>{label}</h3>
      <p>Sincronizando tokens, superficies y estados visuales.</p>
    </div>
  )
}
