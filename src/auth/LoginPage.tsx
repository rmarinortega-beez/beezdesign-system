import { useState, type FormEvent } from 'react'
import { Fingerprint, LockKeyhole, ShieldCheck } from 'lucide-react'
import { BeezBadge } from '../components/ui/BeezBadge'
import { BeezButton } from '../components/ui/BeezButton'
import { BeezCard } from '../components/ui/BeezCard'
import { BeezInput } from '../components/ui/BeezInput'
import { BeezToggle } from '../components/ui/BeezToggle'
import { useAuth } from './useAuth'

export function LoginPage() {
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setLoading(true)

    const { error: authError } = await signIn(email, password)

    setLoading(false)

    if (authError) {
      setError(authError.message)
    }
  }

  return (
    <main className="login-shell" data-theme="beezid">
      <section className="login-panel">
        <div className="login-copy">
          <div className="module-kicker">
            <ShieldCheck size={14} />
            Identity layer
          </div>
          <h1>Beez Design Center access</h1>
          <p>
            Secure entry point for the shared design system control plane. Authentication is handled
            with the same Supabase project configuration used by routines.
          </p>
          <div className="login-signal-row">
            <span>01</span>
            <i />
            <span>AUTH</span>
            <i />
            <span>DESIGN SYSTEM</span>
          </div>
        </div>

        <BeezCard className="login-card" variant="elevated">
          <div className="preview__brand">
            <div className="preview__mark">
              <Fingerprint size={18} />
            </div>
            <span>BeezID</span>
          </div>
          <div>
            <BeezBadge intent="info">Access gateway</BeezBadge>
            <h2>Sign in</h2>
            <p className="beez-muted">Use your BeezProjects credentials.</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <BeezInput
              autoComplete="email"
              label="Workspace email"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@beezprojects.com"
              required
              type="email"
              value={email}
            />
            <BeezInput
              autoComplete="current-password"
              label="Access key"
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              required
              type="password"
              value={password}
            />
            <BeezToggle label="Trusted device" description="Session persistence is managed by Supabase." defaultChecked />
            {error ? (
              <div className="login-error" role="alert">
                <LockKeyhole size={16} />
                <span>{error}</span>
              </div>
            ) : null}
            <BeezButton className="preview__full" loading={loading} type="submit">
              Verify access
            </BeezButton>
          </form>
        </BeezCard>
      </section>
    </main>
  )
}
