import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: [
    './src/index',
  ],
  externals: [
    '@own-basic-business/base-business',
    '@own-basic-component/config',
    '@own-basic-component/request',
    '@own-basic-component/util',
  ],
  rollup: {
    emitCJS: true,
  },
})
