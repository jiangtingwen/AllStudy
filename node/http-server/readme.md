- MVVM  前端新贵
Model 数据  Page({data:{
    legends:[]
}})
View 视图
WXML
VM {{}} wx:for等

- MVC 经典的web开发模式
Model =>SQL
View =>静态页面
Controller =>路由

- WebServe  软件程序
Web服务器 硬件运行WebServer程序的
ip http协议
http://127.0.0.1:3000
3000 端口 不止一个服务
3306 MYSQL
80 Web服务
http
    .createServer(function(request,response){
        response.end('Hello World')
    })
    .listen(3000) //监听3000端口

request 用户 N WebServer一直在3000端口号伺服
request 就能找到端口号,每位用户到达，会触发事件，调用createServer 回调函数， 通过request可以得到用户身份
response 响应请求  http 响应后就断开(response.end)