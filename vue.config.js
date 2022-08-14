const { defineConfig } = require('@vue/cli-service')
const fs = require('fs')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  productionSourceMap: false,
  pwa: {
    name: '网址收藏',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true
    }
  },
  devServer: {
    https: {
      key: fs.readFileSync('/Users/lijingchen/Github/testCA/cert.key'),
      cert: fs.readFileSync('/Users/lijingchen/Github/testCA/cert.crt'),
      ca: fs.readFileSync('/Users/lijingchen/Github/testCA/ca.crt')
    }
  }
})
