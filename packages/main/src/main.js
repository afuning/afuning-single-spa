import './single-spa-config.js'
import Vue from 'vue'
import App from './app.vue'
import router from './router/'
new Vue({
  router,
  render: h => h(App)
}).$mount('#single-app')
