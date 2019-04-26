- wxml 是模板，{{}} 是要被编译的
用户看到的不是wxml,而是wxml被js data 填充编译后的页面  
看到的页面是Page 不是wxml  是 wxml+js+wxss 合体 conpile

- setData({
    相应数据时
}) 触发重新compile

- 我们会在wxml里把所有的逻辑及对数据的渴求都表达出来，在某一刻页面只会显示当前页面状态的页面状态  跟数据相关
状态由数据决定
改变数据，setdata 后  界面自动变，
数据驱动的界面  MVVM
数据要和页面状态一一对应

- todos
  健身
  表单
  data:{
      todos:[]
  }
  form sumbit this.setData({

  })
- {{js运行区域}}
  