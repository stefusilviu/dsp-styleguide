<template>
  <el-card class="shortcut" shadow="hover">
    <slot></slot>
  </el-card>
</template>

<script>
export default {
  props: {
    link: String
  }
}
</script>