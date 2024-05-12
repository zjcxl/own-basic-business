import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: [
    './src/index',
  ],
  externals: [
    '@own-basic-component/config',
    '@own-basic-component/request',
    '@own-basic-component/util',
    'date-fns',
  ],
  rollup: {
    emitCJS: true,
  },
})
