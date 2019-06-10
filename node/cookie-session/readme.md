## why
http 是无状态的
客户端 服务器 再次请求的时候 知道客户端是谁
npm i koa koa-router -S
npm i koa-session -S
cnpm i koa-static -S   静态资源
## -S
--save
  将依赖放在"dependencies":{}
  执行 npm i 就会在json文件里面寻找各个依赖并安装
  在本地开发安装的node_modules
  服务器上面 只需要写的代码  不需要上传node_modules
## cookie
存在客户端:
js 操作:
documnent.cookie

后端: 响应头 
Set-Cookie: name1=value1;path=/; httponly

浏览器检查所有存储的 cookie,把符合当前作用范围的cookie 放在http请求头发给服务器
cookie有可能被用户禁用
内容:
name:
value:
path: 规定cookie生效的路径
/        所有的路径
/user    /user 以及 /user/xxx
/user/xxx   /user/xxx 以及下面的/user/xx/xx
httpOnly: true / false   为true时 就不能通过js 获取cookies
max-age:在几秒后过期
作用范围:
path
domain
用途:  会话状态管理，保存用户的个性化设置.

##session
靠后台语言实现,
有很多个session
很多个用户  sessionID

## koa 第三方中间件 
ctx req + res 
ctx:{
    req,
    res,
}
koa-views ejs 
往ctx上面扩展  80%
ctx:{
    req,
    res,
    render: () => {}
}
调用 他提供的 render()
##localStorage  sessionStorage cookie  session 