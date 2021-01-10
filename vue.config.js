const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);
console.log("当前环境为：",process.env.NODE_ENV, process.env.VUE_APP_URLAPI)
module.exports = {
  lintOnSave: false,
  // 输出 
  publicPath: '',
  // 别名配置
  chainWebpack: config => {
    config.plugin('webpack-bundle-analyzer')
      .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@utils', resolve('src/utils'))
      .set('Components', resolve('src/components'))
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  },
  // webpack-dev-server 相关配置
  devServer: {
    proxy: {
      '/proxyApi': {
        target: 'localhost:3030',
        changeOrigin: true,
        pathRewrite: { // 重写地址
          '^/proxyApi': ''
        }
      }
    }
  },
  indexPath: 'index.html',
  pages: {
    index: {
      entry: ["src/main.js"], // page 的入口,每个“page”应该有一个对应的 JavaScript 入口文件
      title: '丰链云'
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
        patterns: [path.resolve(__dirname, "src/assets/less/variable.less")] // 引入全局样式变量
    }
  }
}
