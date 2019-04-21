//此方法不可取，全局变量太多，而cache 只为mult服务，
//会造成空间污染，浪费资源
// const cache = {};
// const mult = ()=> {


// }

//此方法不能求得累乘积，因为普通函数里内部的变量运行结束后会消失
// const mult = ()=> {
//     const cache = {};
// }
// console.log(mult(1,2,3));

//利用闭包的概念
const mult = (function(){
    const cache = {};
    return function(...args){
        let key = Array.prototype.join.call(args,',');
        if(key in cache){
            console.log('从缓存中取已经计算过的结果:');
            return cache[key];
        }else{
            let a = 1;
            for (let i = 0,l = args.length;i<l;i++){
                a = a*args[i];
            }
            cache[key] = a;
            return a;
        }

    }
})()
console.log(mult(1,2,3));
console.log(mult(1,2,3));
console.log(mult(1,2,3));
console.log(mult(1,2,3,4));
console.log(mult(1,2,3,4,5));