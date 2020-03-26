const app = require('express')()
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const config = require('./config')
const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')

const isProd = process.NODE_ENV === 'production'
const webpackConfig = isProd ? prodConfig : devConfig

const compiler = webpack(webpackConfig)
if(!isProd){
  app.use(webpackDevMiddleware(compiler, {
    writeToDisk: true,
  }))
  app.use(webpackHotMiddleware(compiler, {
    reload: true,
  }))
}

app.listen(config.port, () => {
  console.log(`Server is listening ai http://localhost:${config.port}`)
})