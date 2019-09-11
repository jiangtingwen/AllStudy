// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import globalComponents from './common/js/components'
import VueLazyload from 'vue-lazyload'
import './common/styles/reset.styl'
Vue.use(globalComponents)
Vue.use(VueLazyload,{
  loading:require('@/common/images/loading.png')
})
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
