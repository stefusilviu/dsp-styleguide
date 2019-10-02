<template>
  <el-card class="shortcut" shadow="hover">
    <nuxt-link :to="link"><slot></slot></nuxt-link>
  </el-card>
</template>

<script>
export default {
  props: {
    link: String
  }
}
</script>