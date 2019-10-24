<template>
  <el-container id="app-container">
    <app-sidebar></app-sidebar>
    <el-container>
      <el-main>
        <div class="narrow-page">
            <h2>Organisms</h2>
            <p>Organisms are relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms. 
              These organisms form distinct sections of an interface.</p>
            <p>The header forms a standalone section of an interface, even though it contains several 
              smaller pieces of interface with their own unique properties and functionality.</p>
            <p>Organisms can consist of similar or different molecule types. A header organism might consist of dissimilar 
              elements such as a logo image, primary navigation list, and search form. We see these types of organisms on 
              almost every website we visit.</p>
            <el-row :gutter="20">
              <el-col :xs="12" :sm="8" :lg="6">
                <shortcut link="/organisms/page-footer">Page footer</shortcut>
              </el-col>
              <el-col :xs="12" :sm="8" :lg="6">
                <shortcut link="/organisms/masthead">Masthead</shortcut>
              </el-col>
            </el-row>
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
        title: 'Organisms',
      }
    }
  }
</script>