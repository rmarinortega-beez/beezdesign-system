import { useEffect } from 'react'
import { useBeezID } from '@beez-projects/beezid/react'
import { BeezLoadingState } from '../components/ui/BeezLoadingState'
import { redirectToBeezID } from './beezid.config'

export function BeezAuthRedirectPage({ flow }: { flow: 'login' | 'register' }) {
  const { client } = useBeezID()

  useEffect(() => {
    redirectToBeezID(client, flow)
  }, [client, flow])

  return (
    <main className="login-shell" data-theme="beezid">
      <BeezLoadingState label={flow === 'login' ? 'Opening BeezID login' : 'Opening BeezID registration'} />
    </main>
  )
}
