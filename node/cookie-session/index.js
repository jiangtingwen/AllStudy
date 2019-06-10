const Koa = require('koa');
const Router = require('koa-router');  //路由
const koaSession = require('koa-session');
const app = new Koa();
const router = new Router();
const sessionConfig = {
    key:'sessionID' , //放在 cookie 里面
    maxAge: 1000 * 60,
    rolling:true  //每次响应的时候  刷新有效期
}
const session = koaSession(sessionConfig,app);
app.use(session);
//  /user 用户页面
//  /post
//localhost:9999  /
router.get('/',async (ctx) => {
    ctx.type = 'html'
    ctx.body = `<a href="/user">/user</a>
                <a href="/post">/post</a>`
})
router.get('/user',async (ctx) => {
    ctx.cookies.set('name','value',{
        path:'/user',
        httpOnly:false
    })
    ctx.cookies.set('name1','value1')
    ctx.cookies.set('name2','value2',{
        path:'/user/abc'
    })
    ctx.body = 'user';
})
router.get('/post',async (ctx) => {
    ctx.body = 'post';
})
router.get('/user/abc',async(ctx)=>{
    ctx.body = '/user/abc';
})
app.use(router.routes());
app.listen(9999,()=>{
    console.log('server is running 9999');
})