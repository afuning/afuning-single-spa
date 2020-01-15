/**
 * @author: huning
 * @date: 2020-01-14
 */
<template>
  <div class="layout-wrapper">
    <top-navbar />
    <side-navbar />
    <!-- <a
      href="/layout/member"
      @click="goToChildRoute"
    >
      Home
    </a> -->

    <div class="layout-wrapper__content">
      <div id="layout-app" />
    </div>
  </div>
</template>

<script>
import SideNavbar from './components/side-navbar'
import TopNavbar from './components/top-navbar'
import { navigateToUrl } from 'single-spa'
export default {
  name: 'LayOut',
  components: {
    TopNavbar,
    SideNavbar
  },
  mounted () {
    console.log(111)
  },
  methods: {
    goToChildRoute (e) {
      // 官方指定跳转
      e.preventDefault()
      navigateToUrl(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-wrapper {
  &__content {
    height: calc(100vh - 58px);
    margin-left: 180px;
    overflow: auto;
    background-color: #f8fafc;
  }
}
</style>
