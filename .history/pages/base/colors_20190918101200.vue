<template>
  <el-container id="app-container">
    <app-sidebar></app-sidebar>
    <el-container>
      <el-main>
        <div class="page-section">
          <h2 class="main-title">Colors</h2>
          <el-row :gutter="20">
            <el-col :span="12">
              <p>Base syles are used for setting up SCSS variables, typography and colors.</p>
            </el-col>
          </el-row>
        </div>

        <mcc-colors></mcc-colors>
        
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import AppSidebar from '@/components/AppSidebar'
  import Colors from '@/content/base/colors/colors'

  export default {
    layout: 'page-layout',
    components: {
      'app-sidebar': AppSidebar,
      'mcc-colors': Colors
    }
  }
</script>