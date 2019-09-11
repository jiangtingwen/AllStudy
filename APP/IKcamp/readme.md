## h5   vs  小程序
- 小程序有更好的体验(更快的加载)
- 更强大的能力(小程序可以调用到原生APP更多的功能)

## 设计一个项目
1. 配置 
   - 写死的常量
2. 多处公用的方法
    1. (防抖)  util
3. 环境的区分
    1. 开发环境
       1. 错误提示,日志打印,更好的开发体验
    2. 测试环境
    3. 线上环境
4. CSS划分
   - reset.css 重置
   - base.css  公用的CSS
5. 请求封装
   - header:
   {
       content-type: x-abc
   }
   wx.request({content})
