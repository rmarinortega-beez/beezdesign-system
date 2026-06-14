import { useEffect, useRef, useState, type ReactNode } from 'react'
import { LogOut } from 'lucide-react'
import { useBeezID } from '@beez-projects/beezid/react'
import { BeezBadge } from '../components/ui/BeezBadge'
import { BeezButton } from '../components/ui/BeezButton'
import { BeezCard } from '../components/ui/BeezCard'
import { BeezLoadingState } from '../components/ui/BeezLoadingState'
import { navigateTo } from '../app/routes'
import {
  DESIGN_SYSTEM_ACCESS_PERMISSION,
  DESIGN_SYSTEM_APP_ID,
  redirectToBeezID,
} from './beezid.config'

export function AuthGate({ children }: { children: (actions: ReactNode) => ReactNode }) {
  const beezId = useBeezID()
  const hasRedirectedToLogin = useRef(false)
  const hasRequestedContext = useRef(false)
  const [contextError, setContextError] = useState<string | null>(null)

  useEffect(() => {
    if (!beezId.isLoading && !beezId.session && !hasRedirectedToLogin.current) {
      hasRedirectedToLogin.current = true
      redirectToBeezID(beezId.client, 'login')
    }
  }, [beezId.client, beezId.isLoading, beezId.session])

  useEffect(() => {
    if (beezId.isLoading || !beezId.session || beezId.context || hasRequestedContext.current) {
      return
    }

    hasRequestedContext.current = true
    setContextError(null)

    const timeout = new Promise<null>((resolve) => {
      window.setTimeout(() => resolve(null), 10000)
    })

    Promise.race([beezId.refreshContext(), timeout])
      .then((context) => {
        if (!context) {
          setContextError('BeezID no devolvió el contexto de acceso del Design Center.')
        }
      })
      .catch((error) => {
        setContextError(error instanceof Error ? error.message : 'No se pudo cargar el contexto de acceso de BeezID.')
      })
  }, [beezId])

  if (contextError || beezId.error) {
    const message = contextError ?? beezId.error?.message ?? 'No se pudo validar el acceso con BeezID.'

    return (
      <main className="login-shell" data-theme="beezid">
        <BeezCard className="login-card" variant="elevated">
          <BeezBadge intent="danger">BeezID access</BeezBadge>
          <h1>No se pudo cargar el Design Center</h1>
          <p className="beez-muted">{message}</p>
          <div className="login-form">
            <BeezButton
              type="button"
              onClick={() => {
                hasRequestedContext.current = false
                setContextError(null)
                void beezId.refreshContext()
              }}
            >
              Reintentar
            </BeezButton>
            <BeezButton type="button" variant="secondary" onClick={() => redirectToBeezID(beezId.client, 'login')}>
              Volver a BeezID
            </BeezButton>
          </div>
        </BeezCard>
      </main>
    )
  }

  if (beezId.isLoading || !beezId.session || !beezId.context) {
    return (
      <main className="login-shell">
        <BeezLoadingState label="Checking BeezID session" />
      </main>
    )
  }

  if (!beezId.hasAppAccess(DESIGN_SYSTEM_APP_ID) || !beezId.hasPermission(DESIGN_SYSTEM_ACCESS_PERMISSION)) {
    navigateTo('/not-authorized', true)
    return null
  }

  async function signOut() {
    await beezId.logout()
    window.location.assign('/')
  }

  const actions = (
    <div className="auth-topbar-actions">
      <BeezBadge intent="success">{beezId.context.user?.email ?? 'Authenticated'}</BeezBadge>
      <BeezButton aria-label="Sign out" leftIcon={<LogOut size={15} />} onClick={signOut} size="sm" variant="secondary">
        Sign out
      </BeezButton>
    </div>
  )

  return <>{children(actions)}</>
}
