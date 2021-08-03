import Vue from 'vue'
import App from './App.vue'
//引用router.js
import router from './router'
import store from './store'
import '../src/assets/css/base.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
