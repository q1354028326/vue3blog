module.exports = {
    publicPath:'./',//静态资源包打包为相对路径
    outputDir:'dist',//输出文件
    devServer: {
        proxy: {
          // 此处应该配置为开发服务器的后台地址
          '/api': {
            // target: 'http://101.33.219.205:7001', // 李加盟
            target: 'http://101.33.219.205:5000', // 李加盟CORE
            // target: 'http://192.168.58.252:7001', // 李加盟
            // target: 'http://58.58.126.250:9016', // 测试库
            changeOrigin: true, //是否跨域
            pathRewrite: {
              '^/api': '/api'
            }
          },
        },
        historyApiFallback: true
      },
}