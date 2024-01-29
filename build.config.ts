import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
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
