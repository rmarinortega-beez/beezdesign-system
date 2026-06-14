import { useEffect, useState } from 'react'
import { BeezButton } from '../components/ui/BeezButton'
import { BeezCard } from '../components/ui/BeezCard'
import { BeezLoadingState } from '../components/ui/BeezLoadingState'
import { useBeezID } from '@beez-projects/beezid/react'
import { navigateTo } from '../app/routes'
import {
  DESIGN_SYSTEM_APP_ID,
  hasDesignSystemAccess,
  hasDesignSystemPermission,
  redirectToBeezID,
} from './beezid.config'

type CallbackState = 'processing' | 'error'

export function AuthCallbackPage() {
  const { client, refreshContext } = useBeezID()
  const [state, setState] = useState<CallbackState>('processing')
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    async function processCallback() {
      try {
        if (client.getSession()?.status === 'authenticated') {
          const context = await refreshContext()

          if (!hasDesignSystemAccess(context) || !hasDesignSystemPermission(context)) {
            navigateTo('/not-authorized', true)
            return
          }

          navigateTo('/app', true)
          return
        }

        const result = client.handleCallback(window.location.href)

        if (result.app && result.app !== DESIGN_SYSTEM_APP_ID) {
          throw new Error('BeezID returned a callback for another app.')
        }

        if (result.status === 'cancelled') {
          navigateTo('/', true)
          return
        }

        if (result.status === 'not_authorized') {
          navigateTo('/not-authorized', true)
          return
        }

        if (result.status !== 'authenticated') {
          throw new Error(result.error ?? 'BeezID did not authenticate the session.')
        }

        const context = await refreshContext()

        if (!hasDesignSystemAccess(context) || !hasDesignSystemPermission(context)) {
          navigateTo('/not-authorized', true)
          return
        }

        navigateTo('/app', true)
      } catch (error) {
        if (!isMounted) return
        setMessage(error instanceof Error ? error.message : 'Could not complete BeezID authentication.')
        setState('error')
      }
    }

    void processCallback()

    return () => {
      isMounted = false
    }
  }, [client, refreshContext])

  if (state === 'processing') {
    return (
      <main className="login-shell" data-theme="beezid">
        <BeezLoadingState label="Connecting Design Center with BeezID" />
      </main>
    )
  }

  return (
    <main className="login-shell" data-theme="beezid">
      <BeezCard className="login-card" variant="elevated">
        <h1>BeezID connection failed</h1>
        <p className="beez-muted">{message ?? 'Design Center could not validate your BeezID session.'}</p>
        <div className="login-form">
          <BeezButton type="button" onClick={() => redirectToBeezID(client, 'login')}>
            Try again
          </BeezButton>
          <BeezButton type="button" variant="secondary" onClick={() => window.location.assign('/')}>
            Back to Design Center
          </BeezButton>
        </div>
      </BeezCard>
    </main>
  )
}
