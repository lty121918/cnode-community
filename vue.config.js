const path = require('path')
function resolve (dir) {
  //此处可使用 path.resolve 或 path.join
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
    // 自定义key,value，如.set('@assets', resolve('src/assets'))
    .set('@',resolve('src'))
    .set('@assets',resolve('src/assets'))
  }
}