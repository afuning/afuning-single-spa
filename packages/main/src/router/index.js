import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    // 子项目history模式下，父项目的模糊匹配。不建议这样做
    // path: '/vue*',
    path: '/member',
    name: 'member',
    component: () => import(/* webpackChunkName: "member" */ '../pages/member')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
