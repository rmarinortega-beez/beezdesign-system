import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'
import { fileURLToPath } from 'node:url'

const libraryEntry = fileURLToPath(new URL('./src/index.ts', import.meta.url))
const stylesEntry = fileURLToPath(new URL('./src/styles-entry.ts', import.meta.url))

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      insertTypesEntry: true,
      outDirs: ['dist'],
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: {
        index: libraryEntry,
        styles: stylesEntry,
      },
      cssFileName: 'styles',
      formats: ['es', 'cjs'],
      name: 'BeezUI',
      fileName: (format, entryName) => {
        if (entryName === 'index') return format === 'es' ? 'index.js' : 'index.cjs'
        return format === 'es' ? `${entryName}.js` : `${entryName}.cjs`
      },
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'lucide-react'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
          'lucide-react': 'LucideReact',
        },
      },
    },
  },
})
