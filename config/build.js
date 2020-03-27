const app = require('express')()
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const config = require('./config')
const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')

const isProd = process.env.NODE_ENV === 'production'
const webpackConfig = isProd ? prodConfig : devConfig

const compiler = webpack(webpackConfig)
if(!isProd){
  app.use(webpackDevMiddleware(compiler, {
    writeToDisk: true,
    logLevel: 'silent',
  }))
  app.use(webpackHotMiddleware(compiler, {
    reload: true,
    log: false,
  }))
  app.listen(config.port, (err) => {
    if(err) console.error(err)
  })
}else {
  compiler.run((err, stats) => {
    if(err || stats.hasErrors()){
      console.error(err)
    }else {
      console.log(stats.toString({colors: true}))
    }
  })
}
