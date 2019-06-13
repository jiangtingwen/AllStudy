const router = require('koa-router')();

router.get('/signin',  async (ctx) => {
  // ctx.body = 'signin page';
  await ctx.render('signin');
})
router.post('/signin', async (ctx) => {
  ctx.body = { code: 200 };
})
module.exports = router;
