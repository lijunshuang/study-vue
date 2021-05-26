import Vue from 'vue'
// import Vue from '../kvue/kvue'
import App from './App.vue'
// import router from './router'
import router from './krouter'
// import store from './store'
import store from './kstore'

Vue.config.productionTip = false
// 事件总线
Vue.prototype.$bus = new Vue()

Vue.use(router)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
