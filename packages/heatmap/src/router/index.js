import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'Index',
    component: Index
  }
]
const router = new VueRouter({
  // 子项目设置history，base设置为父项目的一级路由。
  mode: 'history',
  base: '/heatmap/',
  routes
})

export default router
