import { useContext } from 'react'
import { ThemeContext } from './theme-context'

export function useBeezTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useBeezTheme must be used inside ThemeProvider')
  }

  return context
}
