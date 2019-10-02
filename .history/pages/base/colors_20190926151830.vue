<template>
  <app-page :narrow="true">

    <h2 class="page-title">Colors</h2>
    <div class="page-description mb-30">
      <p>Short description of the component</p>
    </div>

    <el-row :gutter="20">
      <el-col :xs="12" :sm="8" :lg="6">
        <color name="Black" color="#222222"></color>
      </el-col>
      <el-col :xs="12" :sm="8" :lg="6">
        <color name="Black" color="#222222"></color>
      </el-col>
      <el-col :xs="12" :sm="8" :lg="6">
        <color name="Black" color="#222222"></color>
      </el-col>
      <el-col :xs="12" :sm="8" :lg="6">
        <color name="Black" color="#222222"></color>
      </el-col>
    </el-row>

  </app-page>
</template>

<script>
  import AppPage from '@/components/AppPage'

  export default {
    layout: 'page-layout',
    components: {
      'app-page': AppPage,
    },
    head () {
      return {
        title: 'Colors | Base',
      }
    }
  }
</script>