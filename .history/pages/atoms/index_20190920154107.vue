<template>
  <el-container id="app-container">
    <app-sidebar></app-sidebar>
    <el-container>
      <el-main>
        <div class="narrow-page">
            <h2>Atoms</h2>
            <p>If atoms are the basic building blocks of matter, then the atoms of our interfaces serve as the foundational building blocks that comprise all our user interfaces.
              These atoms include basic HTML elements like form labels, inputs, buttons, and others that can’t be broken down any further without ceasing to be functional.</p>
            <p>Each atom in the natural world has its own unique properties. A hydrogen atom contains one electron, while a helium atom contains two.
              These intrinsic chemical properties have profound effects on their application 
              (for example, the Hindenburg explosion was so catastrophic because the airship was filled with extremely flammable hydrogen gas versus inert helium gas).
              In the same manner, each interface atom has its own unique properties, such as the dimensions of a hero image, or the font size of a primary heading.
              These innate properties influence how each atom should be applied to the broader user interface system.</p>
            <el-row :gutter="20">
              <el-col :xs="12" :sm="8" :lg="6">
                <shortcut link="/base/colors">Colors</shortcut>
              </el-col>
              <el-col :xs="12" :sm="8" :lg="6">
                <shortcut link="/base/fonts">Fonts</shortcut>
              </el-col>
              <el-col :xs="12" :sm="8" :lg="6">
                <shortcut link="/base/variables">Variables</shortcut>
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
        title: 'Atoms',
      }
    }
  }
</script>