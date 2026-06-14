import { useEffect, useState } from 'react'
import { BeezIDProvider } from '@beez-projects/beezid/react'
import { routeFromPath } from './routes'
import { AuthGate } from '../auth/AuthGate'
import { AuthCallbackPage } from '../auth/AuthCallbackPage'
import { BeezAuthRedirectPage } from '../auth/BeezAuthRedirectPage'
import { getBeezIDClientConfig } from '../auth/beezid.config'
import { NotAuthorizedPage } from '../auth/NotAuthorizedPage'
import { PublicLandingPage } from '../auth/PublicLandingPage'
import { BeezAppShell, type BeezNavItem, type BeezPageId } from '../components/ui/BeezAppShell'
import { ThemeProvider } from '../theme/ThemeProvider'
import { AppPreviewsPage } from '../pages/AppPreviewsPage'
import { ButtonsPage } from '../pages/ButtonsPage'
import { CardsPage } from '../pages/CardsPage'
import { ColorsPage } from '../pages/ColorsPage'
import { DataVizPage } from '../pages/DataVizPage'
import { FormsPage } from '../pages/FormsPage'
import { IntegrationPage } from '../pages/IntegrationPage'
import { OverviewPage } from '../pages/OverviewPage'
import { StatesPage } from '../pages/StatesPage'

const navItems: BeezNavItem[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'colors', label: 'Colors / Tokens' },
  { id: 'buttons', label: 'Buttons' },
  { id: 'cards', label: 'Cards' },
  { id: 'forms', label: 'Forms' },
  { id: 'previews', label: 'App previews' },
  { id: 'dataviz', label: 'Data visualization' },
  { id: 'states', label: 'States' },
  { id: 'integration', label: 'Integration' },
]

function renderPage(page: BeezPageId) {
  switch (page) {
    case 'colors':
      return <ColorsPage />
    case 'buttons':
      return <ButtonsPage />
    case 'cards':
      return <CardsPage />
    case 'forms':
      return <FormsPage />
    case 'previews':
      return <AppPreviewsPage />
    case 'dataviz':
      return <DataVizPage />
    case 'states':
      return <StatesPage />
    case 'integration':
      return <IntegrationPage />
    case 'overview':
    default:
      return <OverviewPage />
  }
}

export default function App() {
  const [activePage, setActivePage] = useState<BeezPageId>('overview')
  const [pathname, setPathname] = useState(() => window.location.pathname)
  const route = routeFromPath(pathname)

  useEffect(() => {
    const handleNavigation = () => setPathname(window.location.pathname)

    window.addEventListener('popstate', handleNavigation)
    return () => window.removeEventListener('popstate', handleNavigation)
  }, [])

  const designCenter = (
    <AuthGate>
      {(topbarActions) => (
        <BeezAppShell
          activePage={activePage}
          navItems={navItems}
          onPageChange={setActivePage}
          topbarActions={topbarActions}
        >
          {renderPage(activePage)}
        </BeezAppShell>
      )}
    </AuthGate>
  )

  return (
    <ThemeProvider>
      <BeezIDProvider {...getBeezIDClientConfig()} autoLoadContext={false}>
        {route.id === 'callback' ? <AuthCallbackPage /> : null}
        {route.id === 'not-authorized' ? <NotAuthorizedPage /> : null}
        {route.id === 'login' ? <BeezAuthRedirectPage flow="login" /> : null}
        {route.id === 'register' ? <BeezAuthRedirectPage flow="register" /> : null}
        {route.id === 'app' ? designCenter : null}
        {route.id === 'landing' ? <PublicLandingPage /> : null}
      </BeezIDProvider>
    </ThemeProvider>
  )
}
