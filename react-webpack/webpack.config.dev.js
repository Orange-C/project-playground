const basicConfig = require('./webpack.config.basic')

module.exports = Object.assign(basicConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    compress: true
  }
})
