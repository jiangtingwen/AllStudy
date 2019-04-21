
// 求函数里的参数的累乘(函数里的形参不确定)
//一般写法
// function mult(){
//     let a = 1;
//     for(let  i = 0,l = arguments.length;i < l;i++){ //arguments 形参的数量,  arguments为类数组
//         a = a*arguments[i];
//     }
//     return a;
// }

//es6写法
// function mult(...args){   //...args 将余下的参数都装在args里
//     let a = 1;
//     // console.log(args.length);
//     for(let i = 0,l = args.length;i < l;i++){
//         a = a*args[i];
//     }
//     return a;
// }

//将结果存入缓存中，当再一次运行相同参数取结果时，从缓存中取，不用再进行计算
//利用json对象,查找json对象中有没有，对应的key值，如果有，则进入json中取数据结果；

    let cache = {};
function mult(){
    let a = 1;
    let  key = Array.prototype.join.call(arguments,',');
    
    if(cache[key]){
        console.log('从缓存中取');
        return  cache[key];
    }
    for(var i = 0,l=arguments.length;i < l;i++){
        a = a*arguments[i];
    } 
    cache[key] = a;
    return a;
}


console.log(mult(1,2,3,4,5,6));
console.log(mult(1,2,3,4,5,6,7));
console.log(mult(1,2,3,4,5,6));
console.log(mult(1,2,3,4,5,6,7));
console.log(mult(1,2,3,4,5,6));
console.log(mult(1,2,3,4,5,6));
console.log(mult(1,2,3,4,5,6,7));
console.log(mult(1,2,3,4,5,6));
console.log(mult(1,2,3,4,5,6,7));
console.log(mult(1,2,3,4,5,6));