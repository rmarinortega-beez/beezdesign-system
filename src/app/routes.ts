export type RouteId = 'landing' | 'login' | 'register' | 'callback' | 'app' | 'not-authorized'

export interface RouteDefinition {
  id: RouteId
  path: string
}

export const routes: RouteDefinition[] = [
  { id: 'landing', path: '/' },
  { id: 'login', path: '/login' },
  { id: 'register', path: '/register' },
  { id: 'callback', path: '/auth/callback' },
  { id: 'app', path: '/app' },
  { id: 'app', path: '/design-center' },
  { id: 'not-authorized', path: '/not-authorized' },
]

export function routeFromPath(pathname: string): RouteDefinition {
  return routes.find((route) => route.path === pathname) ?? routes[0]
}

export function navigateTo(path: string, replace = false) {
  if (replace) {
    window.history.replaceState({}, '', path)
  } else {
    window.history.pushState({}, '', path)
  }

  window.dispatchEvent(new PopStateEvent('popstate'))
}
