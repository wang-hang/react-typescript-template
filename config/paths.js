const path = require('path')
const config = require('./config')

const resolve = (value) => path.resolve(__dirname, '../', value)

module.exports = {
  entry: resolve('src/index.tsx'),
  src: resolve('src'),
  templateHtml: resolve('index.html'),
  styles: resolve('src/css'),
  images: resolve('src/img'),
  outputDir: resolve('dist')
}