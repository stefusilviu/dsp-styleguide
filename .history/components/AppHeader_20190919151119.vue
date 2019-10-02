<template>
    <el-header id="app-header" height="80px">
      <menu-toggle />
      <a href="/"><img src="~/assets/img/dsp-logo.svg" alt="" height="40"></a>
    </el-header>
</template>

<script>
import MenuToggle from '@/components/MenuToggle.vue'

export default {
  name: 'app-header',
  components: {
    'menu-toggle': MenuToggle
  }
}
</script>