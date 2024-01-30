import { resolve } from 'pathe'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    // viteStaticCopy({
    //   targets: [
    //     {
    //       src: `${resolve(__dirname, '/public')}/[!.]*`,
    //       dest: './',
    //     },
    //   ],
    // }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'CookiesConsent',
      fileName: 'index',
      // formats: ['cjs', 'es', 'iife', 'umd'],
    },
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@public': resolve(__dirname, './public'),
    },
  },
})
