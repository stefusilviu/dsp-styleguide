<template>
  <el-container id="app-container">
    <app-sidebar></app-sidebar>
    <el-container>
      <el-main>
        <div class="narrow-page">
            <h2>Templates</h2>
            <p>Templates are page-level objects that place components into a layout and articulate 
              the design’s underlying content structure. To build on our previous example, we can take 
              the header organism and apply it to a homepage template.</p>
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
        title: 'Templates',
      }
    }
  }
</script>