// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Toast, Loading} from './common/plugin'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import store from './vuex/store'
import '../static/css/reset.styl'

fastclick.attach(document.body)

import def_lazy_img from '../static/img/loading.gif'
Vue.use(VueLazyload, {
  loading: def_lazy_img,
})

Vue.use(Toast)
Vue.use(Loading)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
