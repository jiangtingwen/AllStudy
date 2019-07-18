import Vue from 'vue'
import Router from 'vue-router'
import {Toast} from 'mand-mobile'
import User from './module/user'
Vue.use(Router)

const commonRoutes = [
    {
      path:'/404',
      component: () => import('@/components/RouterError/404')
    },
    {
      path:'/401',
      component: () => import('@/components/RouterError/401')
    },
    {
      path:'*',
      redirect:'/404'   //重定向到404页面
    },
    {
      path:'/',
      redirect: '/401'
    }
]

//分模块的路由,合并传入Router
let router = new Router({
  base:process.env.BASE_URL,
  routes:commonRoutes.concat(User)

})

// 导航守卫,非登录状态先登录

router.beforeEach((to,from,next) => {
  let tmp = localStorage.getItem('user')
  if(!tmp && to.name !== 'Login') { //如果用户没有登录就想去别的地方
    Toast.succeed('您需要先登录哦',1500)
    next({ path:'/login' })
    return 
  }
  next()
})
export default router
