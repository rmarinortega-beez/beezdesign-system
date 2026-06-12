import { useState } from 'react'
import { AuthGate } from '../auth/AuthGate'
import { AuthProvider } from '../auth/AuthProvider'
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

  return (
    <ThemeProvider>
      <AuthProvider>
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
      </AuthProvider>
    </ThemeProvider>
  )
}
