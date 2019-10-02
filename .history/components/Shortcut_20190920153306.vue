<template>
  <el-card class="shortcut" shadow="hover">
    <a href="{{link}}"><slot></slot></a>
  </el-card>
</template>

<script>
export default {
  props: {
    link: String
  }
}
</script>