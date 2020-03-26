const paths = require('./paths')

module.exports = {
  port: 8080,
  extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.styl'],
  alias:{
    '@': paths.src,
    'img': paths.images,
    'style': paths.styles,
  },
}