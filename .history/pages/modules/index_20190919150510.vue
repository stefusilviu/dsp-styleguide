<template>
  <el-container id="app-container">
    <app-sidebar></app-sidebar>
    <el-container>
      <el-main>
        <div class="narrow-page">
            <h2>Modules</h2>
            <p>Short page description</p>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import AppSidebar from '@/components/AppSidebar'

  export default {
    layout: 'page-layout',
    components: {
      'app-sidebar': AppSidebar
    },
    head () {
      return {
        title: 'Modules',
      }
    }
  }
</script>