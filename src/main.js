import Vue from 'vue'
import App from './App.vue'
//引用router.js
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
