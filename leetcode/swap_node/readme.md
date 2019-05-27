- 无编译 不代码
 webpack 已经成为工作流程的霸主
 vue-cli  
 编译过程和js的promise一样是异步
 1. 代码写在 dev   src/目录下
 2. 上线在 build   dist/目录下
 3. 启动web 服务器  webpack-dev-server

- webpack html template plugin html-webpack-plugin

- log不在根目录下，怎么找到他
    多写点地址？  ./utils/log.js
    alias

resolve .js -> module 
                   rules
                     .js  babel-loader
  

babel-core babel-cli babel-preset-env 
babel-loader 有点兼容性问题
module
rules:[
    {
    test:/\.js$/,
    use:'babel-loader'
    }
   
]
resolve:{
    extensions:['.js']
}
8080 webpack-dev-server html-webpack-plugin template ./src/index.html
为什么 js 运行了
html + js

- webpack 一切皆可打包  打包到js里
css 对于js来说就是个文本
img 对于js 打包成base64
但是css应该独立打包，性能优化的需要
main.js  显示是最慢的
