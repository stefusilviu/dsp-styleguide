<template>
  <el-container id="app-container">
    <app-sidebar></app-sidebar>
    <el-container>
      <el-main>
        <div class="narrow-page">
          <h2>Saratoga design</h2>
          <el-row type="flex" :gutter="20" align="middle">
            <el-col :span="10">
              <img class="responsive-img" src="~/assets/img/macbook-saratoga.png" alt="" width="500">
            </el-col>
            <el-col :span="14">
              <p>The style guide is a living document and in order to meet the needs of the company must stay in front of the development schedule. To ensure development has a stable reference point for planning, we will cut minor releases on GitHub based on the intended project increment and patch releases for any necessary fixes or feature enhancements during that project increment.</p>
            </el-col>
          </el-row>
          
          <h4>Yes, we're using Atomic Design</h4>
          <img class="responsive-img" src="~/assets/img/atomic-design.png" alt="">
          <p>When all matter in the universe is known to be capable of breaking down into a finite set of atomic elements, it is likely that the same principle applies on interfaces where the latter could also be broken down into a finite set of elements.</p>
          <p>Josh Duck produced a listing of Periodic Table of HTML elements which describes clearly on the generation of websites, intranets, apps and all others to be made up of specific HTML elements.</p>
          <p>With the same principle, a similar finite building block set could be undertaken on the same process that works in the natural world for the apt designing and development of user interfaces. Hence, the atomic design.</p>
          <p>Atomic design is known as a methodology made up of 5 distinct stages that operate in synergy to generate interface design systems deliberately. They are:</p>
          <p>
            <ul>
              <li>Atoms</li>
              <li>Molecules</li>
              <li>Organisms</li>
              <li>Templates</li>
              <li>Pages</li>
            </ul>
          </p>
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