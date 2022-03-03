let CopyPlugin = require('copy-webpack-plugin')
let CompressionPlugin = require('compression-webpack-plugin')
let path = require('path')

module.exports = {
  publicPath: './',
  configureWebpack: (config) => {
    console.log(process.env.NODE_ENV, config.mode)
    config.mode = process.env.NODE_ENV
    return {
      plugins: [
        new CopyPlugin({
          patterns: [
            {
              from: path.resolve(__dirname, './src/sw.js'),
              to: path.resolve(__dirname, './dist')
            },
            {
              from: path.resolve(__dirname, './node_modules/sw-toolbox/sw-toolbox.js'),
              to: path.resolve(__dirname, './dist')
            }
          ]
        }),
        new CompressionPlugin({
          test: /\.js$|\.html$|\.css/,
          threshold: 1024 * 1,
          deleteOriginalAssets: false
        })
      ]
    }
  }
}
