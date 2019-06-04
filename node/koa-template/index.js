const Koa = require('koa');
//Koa构造函数

//应用的实例
const app = new Koa();
//ctx 封装了req,res
app.use(async(ctx,next)=>{
    console.log(1);
    //no    Koa 没有回应  自己处理了not Found

    //交给下一个中间件
    await next();  
    console.log(2);
})
app.use(async (ctx,next)=>{
    await next();
    console.log(4);
    
})
app.use(async(ctx)=>{
    console.log(3);
    ctx.body = `hello Koa`;
})
//可以生成很多个实例
const admin = new Koa();
app.listen(3000,()=>{
    console.log('server is running 3000');
});
admin.listen(4000,()=>{
    // console.log('server is running 4000');
})