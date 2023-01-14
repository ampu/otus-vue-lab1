const {defineConfig} = require('@vue/cli-service')

const publicPath = process.env.PUBLIC_PATH || ``

module.exports = defineConfig({
  publicPath,
  outputDir: `build`,
  filenameHashing: true,
  pages: {
    index: `src/main.ts`
  },
  lintOnSave: `default`,
  runtimeCompiler: true,
  transpileDependencies: false,
  productionSourceMap: false,
  crossorigin: undefined,
  integrity: false,
  configureWebpack: {},
  css: {
    sourceMap: true,
    loaderOptions: {},
  },
  devServer: {},
  pluginOptions: {},
})
