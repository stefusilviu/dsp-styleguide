<template>
  <el-menu class="side-menu" :collapse="sidebarCollapsed" :router="true" :unique-opened="true" :default-active="$nuxt.$route.path" active-text-color="#04816A">

    <el-menu-item index="/">
      <img src="~/assets/img/home-alt.svg" width="30" alt="">
      <span>Home</span>
    </el-menu-item>

    <el-submenu index="base-sub">
      <template slot="title">
        <img src="~/assets/img/apps.svg" width="30" alt="">
        <span>Base</span>
      </template>
      <el-menu-item index="/base">Base</el-menu-item>
      <el-menu-item index="/base/colors">Colors</el-menu-item>
      <el-menu-item index="/base/fonts">Fonts</el-menu-item>
      <el-menu-item index="/base/variables">Variables</el-menu-item>
    </el-submenu>

    <el-submenu index="atoms-sub">
      <template slot="title">
        <img src="~/assets/img/atom.svg" width="30" alt="">
        <span>Atoms</span>
      </template>
      <el-menu-item index="/atoms">Atoms</el-menu-item>
      <el-menu-item index="/atoms/button">Button</el-menu-item>
      <el-menu-item index="/atoms/typography">Typography</el-menu-item>
      <el-menu-item index="/atoms/card">Card</el-menu-item>
      <el-menu-item index="/atoms/morelink">More link</el-menu-item>
      <el-menu-item index="/atoms/list">List</el-menu-item>
    </el-submenu>

    <el-submenu index="3">
      <template slot="title">
        <img src="~/assets/img/cell.svg" width="30" alt="">
        <span>Molecules</span>
      </template>
      <el-menu-item index="/molecules">Molecules</el-menu-item>
    </el-submenu>

    <el-submenu index="4">
      <template slot="title">
        <img src="~/assets/img/web-grid.svg" width="30" alt="">
        <span>Modules</span>
      </template>
      <el-menu-item index="/modules">Modules</el-menu-item>
    </el-submenu>

    <menu-toggle :collapse="sidebarCollapsed"></menu-toggle>

    {{sidebarCollapsed}}

  </el-menu>
</template>

<script>
import { mapState } from 'vuex'
import MenuToggle from '@/components/MenuToggle.vue'

export default {
  name: 'app-sidebar',
  components: {
    'menu-toggle': MenuToggle
  },
  computed: mapState([
    'sidebarCollapsed'
  ]),
  mounted() {
    console.log(this.sidebarCollapsed)
  }
};
</script>