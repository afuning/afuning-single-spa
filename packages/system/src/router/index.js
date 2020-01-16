import Vue from 'vue'
import VueRouter from 'vue-router'
import ExportRecord from '../pages/export-record.vue'
import Device from '../pages/device.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'entry',
    redirect: '/export-record'
  },
  {
    path: '/export-record',
    name: 'ExportRecord',
    component: ExportRecord
  },
  {
    path: '/device',
    name: 'Device',
    component: Device
  }
]
const router = new VueRouter({
  // 子项目设置history，base设置为父项目的一级路由。
  mode: 'history',
  base: '/layout/system/',
  routes
})

router.beforeEach((to, form, next) => {
  console.log(to)
  next()
})

export default router
