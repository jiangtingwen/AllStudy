# q1: js全局执行上下文为我们创建了两个东西:  全局对象 和 this关键字
  new 的实现原理:
    1. 创建一个空对象，构造函数的this指向这个空对象
    2. 这个新对象被执行[原型]连接
    3. 执行构造函数，将属性或方法添加到this引用的对象上
    4. 如果构造函数中没有返回其他对象，那么返回this，即创建新对象，
       否则，返回构造函数返回的对象

# q2: call, bind, apply
  1. b.call(a) 就相当于把b里面的作用域强行指向到a里面去,
     第一个参数一定是this作用域要去到的地方，第二三四...个参数是该作用域里用到的值
  2. b.apply(a, [0,2]) 就相当于把b里面的作用域强行指向到a里面去,
     第一个参数一定是this作用域要去到的地方，第二三四...个参数是该作用域里用到的值，
     但是需要用数组[]类型
  3. b.call() || b.apply() 此时this的作用域会指向window
  4. c = b.bind(a)
     c() 
     bind方法返回的是一个修改过的函数，所以该用函数该有的姿态去调用
     bind方法接收的参数是按照形参的顺序进行的

# q3: 浅拷贝 和  深拷贝
1. 数组解构:
   let [x,y] = [1,2]
   // x= 1
   // y= 2
2. let {foo, bar} = {foo:"aaa",bar:"bbb"}
   //foo = "aaa"
   //bar = "bbb"
   另:(允许给赋值的变量重命名)
   let {foo:baz} = {foo:"abc"}
   //baz = "abc"
   解析:
   1. foo 是用来做匹配的,用来取解构对象里面寻找值的
   2. baz 才是变量名, baz='abc'
3. 浅拷贝只是第一层属性进行拷贝，当第一层属性为基本数类型时,新对象和原对象互不影响
   但是如果第一层的属性值是 #复杂数据类型# 那么新对象和原对象的属性值其指向的是同一块内存地址

   深拷贝是将对象及值赋值过来，两个对象修改修改其中任意一个的值，其中一个不会改变

##q4 闭包
   闭包是指有权限访问另一个函数作用域中的变量的函数
   特点:
   1.能够访问函数定义时所在的词法作用域(阻止被其回收)
   2.私有化变量
   3.模拟块级作用域

##q5 数组去重
      Set  indexOf includes map reduce

##q6  防抖节流函数原理