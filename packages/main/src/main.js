import Vue from 'vue'
import App from './app.vue'
import router from './router/'
import './single-spa-config.js'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
