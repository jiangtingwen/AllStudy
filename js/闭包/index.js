// 　function f1(){

//     　　　　var n=999;
    
//     　　　　nAdd=function(){n+=1}
    
//     　　　　function f2(){
//     　　　　　　console.log(n);
//     　　　　}
    
//     　　　　return f2;
    
//     　　}
    
//     　　var result=f1();
    
//     　　result(); // 999
    
//     　　nAdd();
    
//     　　result(); // 1000
function outerFun()
{
 var  a =0;
 console.log(a);  
}
var a=4;
outerFun();
console.log(a);  