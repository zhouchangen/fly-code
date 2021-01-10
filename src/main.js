import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/less/base.less'
// import './assets/iconfont/iconfont.css'
// import Cookie from "js-cookie";
if (process.env.NODE_ENV !== 'production') require('./mock')

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
