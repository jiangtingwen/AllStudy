// function Person(name) {
//     this.name = name
//     return {}
// }
// let p = new Person('wn')
// console.log(p) // {}

//------构造函数是不需要返回值的,使用new来创建对象时，如果return的是非对象类型,会忽略返回值
// 如果return的是对象,则返回该对象(若 return null 也会忽略返回值)

//1. p.__proto__等于什么 Person.prototype
//2. Person.__proto__ == Function.prototype
//实例的__proto__ 等于其构造函数的prototype
// 原型链只能往下继承，不能往上传
// var foo = {},
//     F = function() {    
//     }
//     Object.prototype.a = 'valA'
//     Function.prototype.b = 'valB'
//     console.log(foo.a)  //valA
//     console.log(foo.b)  //undefinded
//     console.log(F.a) //valA
//     console.log(F.b) //valB

// function Person(name) {
//     this.name = name
// }
// function Student() {

// }
// Student.prototype = Person.prototype
// Student.prototype.constructor = Student
// let s = new Student('wn')
// console.log(s instanceof Person)  //true

// for (let i = 0; i < 10; i++) {
//     setTimeout(() => {
//      console.log(i) //0-9  
//     },0)
// }
// -----------let 每次循环会生成一个封闭的作用域和setTimeout绑定,
// var每次循环会覆盖掉上一次的作用域

//--------------使用闭包

// for (let i = 0; i < 10; i++) {
//    (function(i){
//        setTimeout(()=>{
//            console.log(i)
//        },0);
//    })(i)
// }

//1.for in 遍历的是数组的索引  index索引为字符串型的数字,不能进行几何运算
//2.for in 遍历数组时,遍历顺序有可能不是按照内部顺序进行的
//3.使用for in会遍历数组所有可枚举属性,包括原型链，所以for in 更适合遍历对象

//for of 遍历的是数组的每一个元素
//for of 遍历的知识数组内的元素，而不包括数组原型属性和索引

// var myArry = [1,2,3,4,5,6,7]
// // for (let index in myArry) {
// //     console.log(index) //0 1 2 3 4 5 6 
// // }
// for (let index of myArry) {
//     console.log(myArry[index]) // 1 2 3 4 5 6 7
// }

let gArr = [1,2,[3,4],5,[2,7,[3,9]]]
let oArr = [1,2,3,4,5,2,7,3,9]
// function outputArr(arr) {
//     let res = []
//     for (let i = 0; i < arr.length; i++ ) {
//         if (Array.isArray(arr[i])) {
//             res = res.concat(outputArr(arr[i]))
//         }else {
//             res.push(arr[i])
//         }
//     }
//     return res
// }
function outputArr(arr) {
    return arr.reduce(function(pre,item){
        return pre.concat(Array.isArray(item) ? outputArr(item) : item)
    },[])
}
console.log(outputArr(gArr))