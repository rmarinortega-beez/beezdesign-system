import type { ReactNode } from 'react'
import { useMemo, useState } from 'react'
import { ThemeContext } from './theme-context'
import { beezThemes, defaultTheme } from './themes'
import type { BeezThemeId } from './theme-types'
import type { ThemeContextValue } from './theme-context'

export interface BeezThemeProviderProps {
  children: ReactNode
  className?: string
  theme?: BeezThemeId
}

function resolveTheme(themeId: BeezThemeId) {
  return beezThemes.find((item) => item.id === themeId) ?? {
    ...defaultTheme,
    id: themeId,
    name: String(themeId),
    description: 'Custom Beez-compatible theme.',
    useCase: 'Custom product theme.',
  }
}

export function BeezThemeProvider({ children, className = '', theme: controlledTheme }: BeezThemeProviderProps) {
  const [internalThemeId, setInternalThemeId] = useState<BeezThemeId>(controlledTheme ?? defaultTheme.id)
  const themeId = controlledTheme ?? internalThemeId
  const theme = resolveTheme(themeId)

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      setTheme: setThemeId,
      themes: beezThemes,
    }),
    [theme],
  )

  function setThemeId(nextThemeId: BeezThemeId) {
    setInternalThemeId(nextThemeId)
  }

  return (
    <ThemeContext.Provider value={value}>
      <div className={className} data-theme={theme.id}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export const ThemeProvider = BeezThemeProvider
