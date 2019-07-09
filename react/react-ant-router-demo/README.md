##
静态路由  vue-router 一样配置 []
动态路由  3.0
一切皆组件
4.0之后  组件化四期   路由也是一个组件


## vs
hashRouter   #    通过hashchange事件
historyRouter  不带#  通过h5 history api 实现
刷新这个行为
/#a -> /#b  js控制   刷新时 /#b
/a -> /b  js控制   刷新时   相当于会请求后端的/b   后端没有 /b
后端再次交给前端处理
1. nginx
2. 后端代码  