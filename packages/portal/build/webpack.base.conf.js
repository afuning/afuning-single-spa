'use strict'
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const baseWebpackConfig = {
  context: resolve('./'),
  entry: {
    portal: ['./src/index.js']
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? './'
      : '/',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  externals: {
    System: 'SystemJs'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')],
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        )
      }
    ]
  },
  plugins: [],
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}

module.exports = baseWebpackConfig
