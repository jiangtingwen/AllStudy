import Vue from 'vue'
import Router from 'vue-router'
const Recommend = () => import('@/views/Recommend')
const Movie = () => import('@/views/Movie')
const Rank = () => import('@/components/Rank')
const Search =() => import('@/views/Search')
const List = () => import('@/components/List')
const User = () => import('@/components/user')
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'recommend'
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/movie/:id',  //知道movie后面是个参数
      name: 'Movie',
      component: Movie
    },
    {
      path:'/list/:type',
      name:'List',
      component:List
    },
    {
      path:'/rank',
      name:Rank,
      component:Rank
    },
    {
      path:'/search',
      name:Search,
      component:Search
    },
    {
      path:'/user',
      name:User,
      component:User
    }
   
  ]
})
