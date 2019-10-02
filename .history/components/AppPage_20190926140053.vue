<template>
  <el-container id="app-container">
    <app-sidebar></app-sidebar>
    <el-container>
      <el-main>
        <div class="page-inner" :class="{'narrow-page': narrow}">

          <slot></slot>
          
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppSidebar from '@/components/AppSidebar.vue'

export default {
  name: 'app-page',
  components: {
    'app-sidebar': AppSidebar
  },
  props: {
    narrow: Boolean
  }
}
</script>