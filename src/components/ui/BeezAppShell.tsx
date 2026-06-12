import type { ReactNode } from 'react'
import { Box, CircleDot, Code2, Component, FileInput, GalleryVerticalEnd, LayoutDashboard, Palette, PanelsTopLeft, Shapes, Signal } from 'lucide-react'
import { BeezThemeSwitcher } from './BeezThemeSwitcher'

export type BeezPageId = 'overview' | 'colors' | 'buttons' | 'cards' | 'forms' | 'previews' | 'dataviz' | 'states' | 'integration'

export interface BeezNavItem {
  id: BeezPageId
  label: string
}

interface BeezAppShellProps {
  activePage: BeezPageId
  children: ReactNode
  navItems: BeezNavItem[]
  onPageChange: (page: BeezPageId) => void
  topbarActions?: ReactNode
}

const icons: Record<BeezPageId, ReactNode> = {
  overview: <LayoutDashboard size={18} />,
  colors: <Palette size={18} />,
  buttons: <Component size={18} />,
  cards: <PanelsTopLeft size={18} />,
  forms: <FileInput size={18} />,
  previews: <GalleryVerticalEnd size={18} />,
  dataviz: <Signal size={18} />,
  states: <Shapes size={18} />,
  integration: <Code2 size={18} />,
}

export function BeezAppShell({ activePage, children, navItems, onPageChange, topbarActions }: BeezAppShellProps) {
  return (
    <div className="beez-shell">
      <aside className="beez-sidebar">
        <div className="beez-brand">
          <div className="beez-brand__mark">
            <Box size={22} />
          </div>
          <div>
            <strong>Beez</strong>
            <span>Control plane</span>
          </div>
        </div>
        <nav className="beez-nav" aria-label="Design Center">
          {navItems.map((item) => (
            <button
              aria-current={activePage === item.id ? 'page' : undefined}
              className="beez-nav__item"
              key={item.id}
              onClick={() => onPageChange(item.id)}
              type="button"
            >
              {icons[item.id]}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="beez-sidebar__footer">
          <CircleDot size={16} />
          <span>React foundation for @beez/ui</span>
        </div>
      </aside>
      <main className="beez-main">
        <div className="beez-topbar">
          {topbarActions}
          <BeezThemeSwitcher />
        </div>
        {children}
      </main>
    </div>
  )
}
