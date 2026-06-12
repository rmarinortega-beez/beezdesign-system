import { createContext } from 'react'
import type { BeezTheme, BeezThemeId } from './theme-types'

export interface ThemeContextValue {
  theme: BeezTheme
  setTheme: (themeId: BeezThemeId) => void
  themes: BeezTheme[]
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)
