import * as fs from 'node:fs'
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
    {
      name: 'emit-index',
      generateBundle() {
        this.emitFile({
          type: 'asset',
          fileName: 'index.html',
          source: fs.readFileSync(
            resolve(__dirname, 'index.dist.html'),
            'utf-8',
          ),
        })
      },
    },
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'CookiesConsent',
      fileName: 'cookies-consent',
      formats: ['cjs', 'es', 'iife', 'umd'],
    },
    // sourcemap: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@public': resolve(__dirname, './public'),
    },
  },
})
