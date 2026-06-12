export type BeezThemeId = 'beez' | 'gravity' | 'bmmanager' | 'flow' | 'beezid' | (string & {})

export interface BeezTheme {
  id: BeezThemeId
  name: string
  description: string
  primary: string
  accent: string
  useCase: string
  app?: string
}
