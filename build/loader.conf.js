var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  // css加载器
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  // 编译css之后自动添加前缀
  postcss: [
    require('autoprefixer')({
      browsers: ['last 2 versions']
    })
  ]
}
