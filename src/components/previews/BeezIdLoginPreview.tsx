import { Fingerprint, ShieldCheck } from 'lucide-react'
import { BeezButton } from '../ui/BeezButton'
import { BeezCard } from '../ui/BeezCard'
import { BeezInput } from '../ui/BeezInput'

export function BeezIdLoginPreview() {
  return (
    <div className="preview preview--login" data-theme="beezid">
      <BeezCard variant="elevated">
        <div className="preview__brand">
          <div className="preview__mark"><Fingerprint size={20} /></div>
          <span>BeezID</span>
        </div>
        <div className="module-kicker">Identity layer</div>
        <h3>Access gateway</h3>
        <p>Secure entry point for shared Beez platform modules.</p>
        <BeezInput label="Workspace email" placeholder="admin@beezprojects.com" type="email" />
        <BeezInput label="Access key" placeholder="••••••••••" type="password" />
        <BeezButton className="preview__full">Verify access</BeezButton>
        <div className="preview__inline">
          <ShieldCheck size={16} />
          <span>SSO ready visual state. No real auth.</span>
        </div>
      </BeezCard>
    </div>
  )
}
