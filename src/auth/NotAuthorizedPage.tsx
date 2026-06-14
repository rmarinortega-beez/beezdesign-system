import { useBeezID } from '@beez-projects/beezid/react'
import { BeezBadge } from '../components/ui/BeezBadge'
import { BeezButton } from '../components/ui/BeezButton'
import { BeezCard } from '../components/ui/BeezCard'
import { redirectToBeezID } from './beezid.config'

export function NotAuthorizedPage() {
  const { client, logout } = useBeezID()

  async function handleSwitchAccount() {
    await logout()
    redirectToBeezID(client, 'login')
  }

  return (
    <main className="login-shell" data-theme="beezid">
      <BeezCard className="login-card" variant="elevated">
        <BeezBadge intent="danger">BeezID access</BeezBadge>
        <h1>Design Center no está activado para esta cuenta</h1>
        <p className="beez-muted">
          Tu sesión BeezID es válida, pero no tiene la aplicación design-system o el permiso
          design-system.access asignado.
        </p>
        <div className="login-form">
          <BeezButton type="button" onClick={handleSwitchAccount}>
            Cambiar cuenta
          </BeezButton>
          <BeezButton type="button" variant="secondary" onClick={() => redirectToBeezID(client, 'register')}>
            Solicitar acceso
          </BeezButton>
        </div>
      </BeezCard>
    </main>
  )
}
