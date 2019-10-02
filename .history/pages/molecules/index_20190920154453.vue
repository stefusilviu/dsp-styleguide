<template>
  <el-container id="app-container">
    <app-sidebar></app-sidebar>
    <el-container>
      <el-main>
        <div class="narrow-page">
            <h2>Molecules</h2>
            <p>In chemistry, molecules are groups of atoms bonded together that take on distinct new properties. 
              For instance, water molecules and hydrogen peroxide molecules have their own unique 
              properties and behave quite differently, even though they’re made up of the same atomic elements (hydrogen and oxygen).</p>
            <p>In interfaces, molecules are relatively simple groups of UI elements functioning together as a unit. 
              For example, a form label, search input, and button can join together to create a search form molecule.</p>
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
        title: 'Molecules',
      }
    }
  }
</script>