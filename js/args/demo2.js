// 1. userObj 一个参数带来了新的问题
//代码的函数编写者，user  里面的key 要去了解
//只需要用一部分，解构可以帮助提高代码的可读性

function infomation({name,age,height}){
    console.log(name,age,height);
}
const user = {
    name:'滴滴',
    age:22,
    height:1.8,
    sex:'男',
    hobbies:['打游戏']
}
console.log(infomation(user));