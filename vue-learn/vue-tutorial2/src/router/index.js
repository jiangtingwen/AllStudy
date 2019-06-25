import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TimeEntries from '@/components/TimeEntries'
import LogTime from '@/components/LogTime'
import NotFound from '@/components/404'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: Home,
    component: Home
  }, {
    path: '/home',
    name: Home,
    component: Home
  }, {
    path: '/time-entries',
    name: TimeEntries,
    component: TimeEntries,
    children: [{
      path: 'log-time',
      name: LogTime,
      component: LogTime,
    }]
  }, {
    path: '*',
    component: NotFound
  }]
})