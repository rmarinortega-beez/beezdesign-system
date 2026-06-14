import { type BeezContext, type BeezIDClient } from '@beez-projects/beezid'

export const DESIGN_SYSTEM_APP_ID = 'design-system'
export const DESIGN_SYSTEM_ACCESS_PERMISSION = 'design-system.access'

export const DESIGN_SYSTEM_PERMISSIONS = [
  DESIGN_SYSTEM_ACCESS_PERMISSION,
  'design-system.view',
  'design-system.components.read',
  'design-system.tokens.read',
  'design-system.themes.read',
  'design-system.manage',
]

export const BEEZ_ID_URL = import.meta.env.VITE_BEEZ_ID_URL ?? 'https://id.beezprojects.com'

export function getDesignAppOrigin() {
  if (typeof window === 'undefined') {
    return import.meta.env.VITE_DESIGN_APP_URL ?? 'https://design.beezprojects.com'
  }

  return import.meta.env.VITE_DESIGN_APP_URL ?? window.location.origin
}

export function getBeezIDRedirectUri() {
  return `${getDesignAppOrigin().replace(/\/$/, '')}/auth/callback`
}

export function getBeezIDClientConfig() {
  return {
    appId: DESIGN_SYSTEM_APP_ID,
    beezIdUrl: BEEZ_ID_URL,
    redirectUri: getBeezIDRedirectUri(),
    minimumPermissions: [DESIGN_SYSTEM_ACCESS_PERMISSION],
  }
}

export function buildBeezIDUrl(client: BeezIDClient, flow: 'login' | 'register') {
  const url = new URL(flow === 'login' ? client.buildLoginUrl() : client.buildRegisterUrl())

  url.searchParams.set('app', DESIGN_SYSTEM_APP_ID)
  url.searchParams.set('origin', getDesignAppOrigin())
  url.searchParams.set('redirect_uri', getBeezIDRedirectUri())

  return url.toString()
}

export function redirectToBeezID(client: BeezIDClient, flow: 'login' | 'register') {
  window.location.assign(buildBeezIDUrl(client, flow))
}

export function hasDesignSystemAccess(context: BeezContext | null) {
  return Boolean(context?.apps.some((app) => app.slug === DESIGN_SYSTEM_APP_ID))
}

export function hasDesignSystemPermission(context: BeezContext | null) {
  return Boolean(
    context?.permissions.some(
      (permission) =>
        permission === DESIGN_SYSTEM_ACCESS_PERMISSION ||
        permission === 'design-system.*' ||
        permission === 'beez.*',
    ),
  )
}
