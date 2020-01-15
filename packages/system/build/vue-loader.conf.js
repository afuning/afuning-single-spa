'use strict'
const utils = require('./utils')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: false,
    extract: isProduction,
    usePostCSS: false
  }),
  cssSourceMap: false,
  cacheBusting: false,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
