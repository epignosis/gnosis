import { defineConfig } from 'vite'
import veauryVitePlugins from 'veaury/vite/index.js'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    veauryVitePlugins({
      type: 'vue',
    }),
    dts({
      insertTypesEntry: true,
      outDir: 'dist/types',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'GnosisVue',
      fileName: 'gnosis-vue',
    },
    rollupOptions: {
      external: ['vue', 'react', 'react-dom', '@epignosis_llc/gnosis'],
      output: {
        globals: {
          vue: 'Vue',
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
