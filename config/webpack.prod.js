const merge = require('webpack-merge')

const baseConfig = require('./webpack.base')
const paths = require('./paths')

const prodConfig = {
  mode: 'production',
  entry: paths.entry,
  output:{
    filename: '[name]-[contenthash].js'
  },
  stats: 'normal',
}
module.exports = merge(baseConfig, prodConfig)