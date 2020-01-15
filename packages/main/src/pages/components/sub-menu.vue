/**
 * @author: huning
 * @date: 2020-01-14
 */
<template>
  <el-submenu
    v-if="menu.list && menu.list.length >= 1"
    :index="String(menu.menuId)"
  >
    <template slot="title">
      <span>{{ menu.name }}</span>
    </template>
    <sub-menu
      v-for="item in menu.list"
      :key="item.menuId"
      :menu="item"
    />
  </el-submenu>
  <el-menu-item
    v-else
    :index="String(menu.menuId)"
    @click="gotoRouteHandle(menu)"
  >
    <span>{{ menu.name }}</span>
  </el-menu-item>
</template>

<script>
import { navigateToUrl } from 'single-spa'

export default {
  name: 'SubMenu',
  props: {
    menu: {
      type: Object,
      required: true
    }
  },
  methods: {
    gotoRouteHandle (menu) {
      navigateToUrl(menu.url)
    }
  }
}
</script>

<style lang="scss" scoped>
.sub-menu {}
</style>
