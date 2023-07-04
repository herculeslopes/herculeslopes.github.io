import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     {enforce: 'pre', ...mdx(/* jsxImportSource: …, otherOptions… */)},
//     react()
//   ],
// })

export default defineConfig(({ command }) => {
  const config = {
    plugins: [
      { enforce: 'pre', ...mdx(/* jsxImportSource: …, otherOptions… */) },
      react()
    ],
    base: '/',
  }

  if (command !== 'serve') {
    config.base = '/herculeslopes.github.io/'
  }

  return config;
})

// if (command !== 'serve') {
//   config.base = '/react-vite-gh-pages/'
// }