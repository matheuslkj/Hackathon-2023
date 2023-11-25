import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  resolve: {
    alias: [{find: '@', replacement: '/src'}]
  },
  build: {
    outDir: 'dist',
  },
  plugins: [
    react({
      include: "**/*.tsx"
    }),
  ],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    port: 5173
  }
})
