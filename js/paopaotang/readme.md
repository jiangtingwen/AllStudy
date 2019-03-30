js也有class类
es5中没有class关键字，怎样实现面向对象
js是面向对象的,function 是一等对象
普通函数 Player()
new player();作为类的构造函数被运行
function Player(){this }
this 一直都在，函数里的一个常在，指针，
会指向一个object{} this.name=name

函数运行方式的不同，里面this指向不同：
普通函数被运行时，this指针没有使命，指向全局 在前端指向window,在node 指向global   undefined
函数作为构造函数被运行时 newPlayer();
this会指向实例化的对象，   构造函数需要的过程，

- 函数可以用来构造类 js 通过this， 
- this 一直存在,指针
如果代码启动严格模式(use strict),undefined

- new过程中发生了什么
new Player(); 将函数作为构造函数运行
this指向object{}
  this=>{} constructor
  this.name=name
  - 构造函数(constructor)