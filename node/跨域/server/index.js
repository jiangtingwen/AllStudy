const Koa = require('koa');
const app = new Koa()
const koaStatic = require('koa-static');
const path = require('path');
const router = require('koa-router')();
app.use(async (ctx,next) => {
    //允许哪个域名访问资源 
    //也可以用*代替域名,意味着允许所有的源访问
    ctx.set('Access-Control-Allow-Origin','http://localhost:8080');//允许跨域的源
    ctx.set('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS') //允许跨域的方法
    ctx.set('Access-Control-allow-Headers','X-custom') //允许跨域的头
    //cookie
    //是否允许携带cookie
    //当设为rrue
    //Access-Control-Allow-Origin 需要一个详细的域名  而不是*
    ctx.set('Access-Control-Allow-Credentials',true) //允许携带cookie
    await next();
})
router.get('/api/post', async function (ctx) {
  console.log('cookie',ctx.cookies.get('name'))
  ctx.body = [
    { title: 'node.js 入门到精通', createTime: '2018-12-12' },
    { title: 'php 入门到精通', createTime: '2018-11-11' },
  ]
});
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(9999, () => {
  console.log('server is running 9999');
});