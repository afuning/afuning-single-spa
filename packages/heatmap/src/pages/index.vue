<template>
  <div class="export-record">
    热力图
    <a
      href="/layout"
      @click="goToChildRoute"
    >
      管理后台
    </a>
  </div>
</template>

<script>
import { navigateToUrl } from 'single-spa'
export default {
  name: 'ExportRecord',
  methods: {
    goToChildRoute (e) {
      // 官方指定跳转
      e.preventDefault()
      navigateToUrl('/layout/system')
    }
  }
}
</script>

<style lang="scss" scoped>
.export-record {}
</style>
