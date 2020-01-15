import Vue from 'vue'
import VueRouter from 'vue-router'

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
    component: () => import(/* webpackChunkName: "system-export-record" */ '../pages/export-record.vue')
  }
]
const router = new VueRouter({
  // 子项目设置history，base设置为父项目的一级路由。
  mode: 'history',
  base: '/layout/system/',
  routes
})

export default router
