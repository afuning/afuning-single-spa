<template>
  <div class="app">
    <a
      href="/member#"
      @click="goToChildRoute"
    >
      Home
    </a>
    <div
      id="single-vue"
      class="single-spa-vue"
    >
      <div id="vue">
        111
      </div>
    </div>
  </div>
</template>

<script>
import { navigateToUrl } from 'single-spa'

export default {
  name: 'App',

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
.app {}
</style>
