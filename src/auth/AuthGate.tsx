import type { ReactNode } from 'react'
import { LogOut } from 'lucide-react'
import { BeezBadge } from '../components/ui/BeezBadge'
import { BeezButton } from '../components/ui/BeezButton'
import { BeezLoadingState } from '../components/ui/BeezLoadingState'
import { useAuth } from './useAuth'
import { LoginPage } from './LoginPage'

export function AuthGate({ children }: { children: (actions: ReactNode) => ReactNode }) {
  const { loading, session, signOut, user } = useAuth()

  if (loading) {
    return (
      <main className="login-shell">
        <BeezLoadingState label="Checking BeezID session" />
      </main>
    )
  }

  if (!session) {
    return <LoginPage />
  }

  const actions = (
    <div className="auth-topbar-actions">
      <BeezBadge intent="success">{user?.email ?? 'Authenticated'}</BeezBadge>
      <BeezButton aria-label="Sign out" leftIcon={<LogOut size={15} />} onClick={signOut} size="sm" variant="secondary">
        Sign out
      </BeezButton>
    </div>
  )

  return <>{children(actions)}</>
}
