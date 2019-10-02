<template>
  <el-container id="app-container">
    <app-sidebar></app-sidebar>
    <el-container>
      <el-main>
        <div class="narrow-page">
            <h2>Base styles and setup</h2>
            <p>We use this section for documenting all variables, basic styling reset, typography and everything related to styling setup.</p>
            <el-row :gutter="20">
              <el-col :xs="6" :sm="4" :lg="3">
                <shortcut>Colors</shortcut>
              </el-col>
            </el-row>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import AppSidebar from '@/components/AppSidebar'
  import shortcut from '@/components/Shortcut.vue'

  export default {
    layout: 'page-layout',
    components: {
      'app-sidebar': AppSidebar,
      shortcut
    },
    head () {
      return {
        title: 'Base',
      }
    }
  }
</script>