<template>
  <el-container id="app-container">
    <app-sidebar></app-sidebar>
    <el-container>
      <el-main>
        <div class="narrow-page">
          <h2>Saratoga design</h2>
          <p>The style guide is a living document and in order to meet the needs of the company must stay in front of the development schedule. To ensure development has a stable reference point for planning, we will cut minor releases on GitHub based on the intended project increment and patch releases for any necessary fixes or feature enhancements during that project increment.</p>
          <h4>Yes, we're using Atomic Design</h4>
          <el-image style="width: 100%;" :src="~/assets/img/atomic-design.png" :fit="scale-down"></el-image>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import AppSidebar from '../components/AppSidebar'

  export default {
    layout: 'page-layout',
    components: {
      'app-sidebar': AppSidebar
    }
  }
</script>