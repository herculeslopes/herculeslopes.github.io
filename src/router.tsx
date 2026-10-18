import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

function basepath() {
  if (typeof window === 'undefined') return '/'
  const { pathname, search, hash } = window.location
  let path = pathname
  if (path.endsWith('/index.html')) {
    path = path.slice(0, -'/index.html'.length)
    const next = `${path}${search}${hash}`
    if (`${pathname}${search}${hash}` !== next) {
      window.history.replaceState(window.history.state, '', next)
    }
  }
  if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1)
  return path || '/'
}

export function getRouter() {
  return createRouter({
    routeTree,
    scrollRestoration: true,
    basepath: basepath(),
  })
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}
