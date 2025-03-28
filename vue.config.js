const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: 'dist', // Ensure this is 'dist'
  assetsDir: 'assets',
  productionSourceMap: false,


})
