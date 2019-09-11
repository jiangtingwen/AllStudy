//会报错
var b = 10;
(function b() {
   b = 20
   console.log(b)
})()

//函数表达式与函数声明不同,函数声明只在函数内部有效，并且此绑定是常量
//不能对常量进行赋值

// function b 相当于 const b
// const b = function() {}
// b = 20
// console.log(b)

// 将 b = 20 改成 let b = 20  就可以输出20

