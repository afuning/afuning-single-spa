import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../pages/layout'

Vue.use(VueRouter)

const routes = [
  {
    // 子项目history模式下，父项目的模糊匹配。不建议这样做
    // path: '/member*',
    path: '/layout/*',
    name: 'layout',
    component: Layout
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  base: '/'
})

router.beforeEach((to, from, next) => {
  console.log(to)
  next()
})

export default router
