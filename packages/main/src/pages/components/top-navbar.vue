/**
 * @author: huning
 * @date: 2020-01-14
 */
<template>
  <div class="top-navbar">
    <div
      class="top-navbar__body"
      :style="{
        marginLeft: navConfig.hideLeft ? '0px' : '180px'
      }"
    >
      <div class="top-navbar__left">
        哈哈公司
      </div>
      <div class="top-navbar__right">
        <el-button
          round
          @click="gotoRouteHandle('/main/heatmap')"
        >
          热力图
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { navigateToUrl } from 'single-spa'

export default {
  name: 'TopNavbar',
  props: {
    navType: {
      type: String,
      default: ''
    }
  },
  computed: {
    navConfig () {
      const { navType } = this
      const config = {}
      switch (navType) {
        case 'cash':
          config.hideLeft = true
          break
        default:
          config.hideLeft = false
          break
      }
      return config
    }
  },
  methods: {
    gotoRouteHandle (url) {
      navigateToUrl(url)
    }
  }
}
</script>

<style lang="scss" scoped>
.top-navbar {
  padding-right: 20px;
  height: 58px;
  line-height: 58px;
  &__body {
    display: flex;
  }
  &__left {
    flex: 1;
  }
}
</style>
