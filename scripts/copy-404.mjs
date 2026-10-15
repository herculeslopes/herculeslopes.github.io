import { copyFileSync, existsSync } from 'node:fs'

const source = 'dist/client/index.html'
const target = 'dist/client/404.html'

if (!existsSync(source)) {
  console.error(`Static entry not found at ${source}`)
  process.exit(1)
}

copyFileSync(source, target)
console.log(`Copied ${source} -> ${target}`)
