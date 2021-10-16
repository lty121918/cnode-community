const path = require('path')

function resolve(dir) {
  //此处可使用 path.resolve 或 path.join
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'utils':"@/utils",
        'assets':"@/assets"
      }

    }

  }

}