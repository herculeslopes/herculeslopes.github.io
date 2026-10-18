import type { ReactNode } from 'react'
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from '@tanstack/react-router'
import appCss from '../styles.css?url'
import { site } from '../site'
import { themeBootScript } from '../theme'
import { ThemeProvider } from '../components/theme-provider'
import { BackgroundShapes } from '../components/background-shapes'

const title = `${site.name} — Desenvolvedor`
const description =
  'Portfólio de Hércules Lopes, desenvolvedor.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: site.url },
      { property: 'og:locale', content: 'pt_BR' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: './favicon.svg', type: 'image/svg+xml' },
      { rel: 'canonical', href: site.url },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
})

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang={site.locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function RootComponent() {
  return (
    <ThemeProvider>
      <BackgroundShapes />
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <div className="shell">
        <Outlet />
      </div>
    </ThemeProvider>
  )
}

function NotFound() {
  return (
    <main id="conteudo" className="wrap not-found">
      <h1>Página não encontrada</h1>
      <p>Esse endereço não faz parte do portfólio.</p>
      <a href="./">Voltar ao início</a>
    </main>
  )
}
