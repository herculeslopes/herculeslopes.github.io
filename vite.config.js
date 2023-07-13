import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import path from 'path'
// import * as path from 'path'

export default defineConfig({
  plugins: [
    {enforce: 'pre', ...mdx(/* jsxImportSource: …, otherOptions… */)},
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src/'),
    }
  }
})
