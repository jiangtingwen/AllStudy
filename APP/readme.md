- 小程序开发工具，初始化了一个项目框架
- 小程序是架构在微信（原生APP），使用前端技术和思想，来快速开发，一份代码，到处运行。
不用下载，
不用写两次
快速高效
- html  => wxml(标签)
    weixin wxml xml  为了他的性能优化以及新功能
    有些新的标签  view = div
  css   => wxss(样式)
  js    => js   bindtap => onclick
  page = wxml + wxss + js
  小程序由一个个page组成，每个page由三个部分组成
  app.josn是项目描述文件 添加的page要在app.json里声明
  切页面时，wx.navigateTo()
  - MVVM
  只要你有了数据，Model 模型,在js中用data声明
  Page({
      data:{
          legends:[]
      }
  })
  View 视图层 WXML 等待着数据编译输出的html模板 {{}}
  指令, wx:for
