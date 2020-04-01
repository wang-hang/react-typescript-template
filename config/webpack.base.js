const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

const paths = require('./paths')
const config = require('./config')

module.exports = {
  output:{
    filename: paths.outputFileName,
    publicPath: paths.publicPath,
    path: paths.outputDir,
  },
  resolve:{
    alias: config.alias,
    extensions: config.extensions,
  },
  module:{
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.styl$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader'],
      },
      {
        test: /\.ts(x?)$/,
        use:['ts-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader',
        options:{
          name: '[name].[ext]'
        }
      },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: paths.templateHtml,
      // filename: paths.outputHtml,
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new ProgressBarPlugin(),
  ]
}