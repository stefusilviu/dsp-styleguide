<template>
  <a class="menu-toggle" href="#" @click.prevent="toggleMenu">
    <i class="el-icon-back" v-if="!collapsed"></i>
    <i class="el-icon-right" v-if="collapsed"></i>
    {{ collapsed }}
  </a>
</template>

<script>
export default {
  name: "menu-toggle",
  data() {
    return {
      collapsed: false
    };
  },
  methods: {
    toggleMenu() {
      this.collapsed = !this.collapsed;
      console.log(this.collapsed);
      this.$emit("collapse", this.collapsed);
    }
  }
};
</script>