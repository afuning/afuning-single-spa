/**
 * @author: huning
 * @date: 2020-01-14
 */
<template>
  <div id="layout-app" />
</template>

<script>
import { navigateToUrl } from 'single-spa'
export default {
  name: 'Main',
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
.main {}
</style>
