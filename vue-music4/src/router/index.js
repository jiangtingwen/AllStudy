import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Search from '@/components/pages/search'
import My from '@/components/pages/my'
import Listen from '@/components/pages/listen'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path:'/my',
      name:'My',
      component:My
    },
    {
      path:'/listen',
      name:'Listen',
      component:Listen
    }
  ]
})
