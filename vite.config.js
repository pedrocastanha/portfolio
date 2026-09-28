import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `vite preview` serves the prerendered page of each clean URL
// (/projetos/x -> dist/projetos/x/index.html), matching production hosting.
function cleanUrls() {
  return {
    name: 'clean-urls-preview',
    configurePreviewServer(server) {
      const outDir = join(server.config.root, server.config.build.outDir)
      server.middlewares.use((req, _res, next) => {
        const [path, query = ''] = req.url.split('?')
        if (!path.includes('.')) {
          const candidate = join(path, 'index.html')
          const file = existsSync(join(outDir, candidate)) ? candidate : '/404.html'
          req.url = file + (query ? `?${query}` : '')
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), cleanUrls()],
})
