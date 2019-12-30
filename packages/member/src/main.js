import Vue from 'vue'
import router from './router/'
import App from './app.vue'
import singleSpaVue from 'single-spa-vue'

const vueOptions = {
  el: '#single-vue',
  router,
  render: h => h(App)
}

// 判断当前页面使用singleSpa应用,不是就渲染
if (!window.singleSpaNavigate) {
  delete vueOptions.el
  new Vue(vueOptions).$mount('#app')
}

// singleSpaVue包装一个vue微前端服务对象
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: vueOptions
})
console.log(vueLifecycles)
export const bootstrap = vueLifecycles.bootstrap // 启动时
export const mount = vueLifecycles.mount // 挂载时
export const unmount = vueLifecycles.unmount // 卸载时

export default vueLifecycles
