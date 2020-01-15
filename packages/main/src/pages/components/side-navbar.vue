/**
 * @author: huning
 * @date: 2020-01-14
 */
<template>
  <div class="side-navbar">
    <el-scrollbar
      style="height:100%"
      :native="false"
    >
      <el-menu
        unique-opened
        background-color="#22253b"
        text-color="#fff"
        class="side-navbar__menu"
      >
        <sub-menu
          v-for="menu in menuList"
          :key="menu.menuId"
          :menu="menu"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import SubMenu from './sub-menu'
export default {
  name: 'SideNavbar',
  components: {
    SubMenu
  },
  data () {
    return {
      menuList: [{
        name: '系统管理',
        menuId: 509,
        list: [
          {
            menuId: 514,
            parentId: 509,
            name: '下载中心',
            url: '/layout/system/export-record'
          }
        ]
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.side-navbar {
  position: fixed;
  top: 58px;
  left: 0;
  bottom: 0;
  z-index: 1020;
  width: 180px;
  overflow: hidden;
  background-color: #22253b;
  ::v-deep .el-menu {
    border-right: none;
  }
}
</style>
