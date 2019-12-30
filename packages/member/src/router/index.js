import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "member-home" */ '../pages/home.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "member-about" */ '../pages/about.vue')
  }
]
const router = new VueRouter({
  // 子项目设置history，base设置为父项目的一级路由。
  base: '/member/',
  // mode: 'history',
  routes
})

export default router
