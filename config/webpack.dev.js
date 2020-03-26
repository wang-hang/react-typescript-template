const merge = require('webpack-merge')
const webpack = require('webpack')

const config = require('./config')
const paths = require('./paths')
const baseConfig = require('./webpack.base')

const devConfig = {
  mode: 'development',
  entry: ['webpack-hot-middleware/client',paths.entry ],
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
  ]
}

module.exports = merge(baseConfig, devConfig)

