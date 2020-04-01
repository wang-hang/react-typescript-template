const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const merge = require('webpack-merge')
const webpack = require('webpack')

const paths = require('./paths')
const config = require('./config')
const baseConfig = require('./webpack.base')

const devConfig = {
  mode: 'development',
  entry: ['webpack-hot-middleware/client',paths.entry ],
  output:{
    filename: '[name].js'
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`Your Application is running here http://localhost:${config.port}`],
      }
    }),
  ]
}

module.exports = merge(baseConfig, devConfig)

