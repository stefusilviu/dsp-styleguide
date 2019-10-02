<template>
  <el-menu class="side-menu" :collapse="false" :router="true" :unique-opened="true">

    <el-menu-item index="/"><img src="~/assets/img/home-alt.svg" alt="">Home</el-menu-item>

    <el-submenu index="base-sub">
      <template slot="title">
        <i class="el-icon-folder"></i>
        <span>Base</span>
      </template>
      <el-menu-item index="/base">Base</el-menu-item>
      <el-menu-item index="/base/colors">Colors</el-menu-item>
      <el-menu-item index="/base/fonts">Fonts</el-menu-item>
      <el-menu-item index="/base/variables">Variables</el-menu-item>
    </el-submenu>

    <el-submenu index="atoms-sub">
      <template slot="title">
        <i class="el-icon-folder"></i>
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
        <i class="el-icon-folder"></i>
        <span>Molecules</span>
      </template>
      <el-menu-item index="3-1">Button</el-menu-item>
      <el-menu-item index="3-2">Headings</el-menu-item>
      <el-menu-item index="3-3">Cards</el-menu-item>
      <el-menu-item index="3-4">list</el-menu-item>
    </el-submenu>

    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-folder"></i>
        <span>Modules</span>
      </template>
      <el-menu-item index="4-1">Button</el-menu-item>
      <el-menu-item index="4-2">Headings</el-menu-item>
      <el-menu-item index="4-3">Cards</el-menu-item>
      <el-menu-item index="4-4">list</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'app-sidebar'
};
</script>