import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    {
      builder: 'rollup',
      input: 'src/modules/cc-ga.ts',
    },
    {
      builder: 'rollup',
      input: 'src/modules/cc-gtm.ts',
    },
    {
      builder: 'mkdist',
      input: './src/styles/',
      outDir: './dist/styles/',
    },
    {
      builder: 'mkdist',
      input: './src/themes/',
      outDir: './dist/themes/',
    },
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
})
