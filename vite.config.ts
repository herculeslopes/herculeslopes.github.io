import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'

// User site: https://herculeslopes.github.io is served from the domain root.
// If this repo is ever published as a project site, change `base` to '/<repo>/'.
export default defineConfig({
  base: '/',
  server: {
    port: 3000,
  },
  plugins: [
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoStaticPathsDiscovery: true,
        failOnError: true,
      },
      pages: [{ path: '/' }],
    }),
    viteReact(),
  ],
})
