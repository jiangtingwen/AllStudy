dom event(事件)
- dom
onclick 事件注册只有一个 dom-0
addEventListenter 不限  dom-2
addEventListener("keyup") 不限 dom-3
- dom 事件流
事件捕获(capture)
true
window->document(documentElement)->body->父级->目标元素

事件冒泡（bubble）
false
window<-document(documentElement)<-body<-父级<-目标元素

选中html：document.documentElement
选中body：document.body
事件按照 dom流 的顺序执行我们的事件回调（在函数里调用另一个函数）
处于目标阶段的时候，事件调用的顺序，取决于事件注册(编写语句前后的顺序)的顺序
- 事件代理（事件委托）
event-question.html
原理：事件冒泡