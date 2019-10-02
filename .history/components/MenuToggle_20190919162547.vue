<template>
  <a class="menu-toggle" href="#" @click.prevent="toggleMenu">
    <i class="el-icon-back" v-if="!collapsedd"></i>
    <i class="el-icon-right" v-if="collapsedd"></i>
    {{ collapsedd }}
  </a>
</template>

<script>
export default {
  name: 'menu-toggle',
  data() {
    return {
      collapsedd: false
    };
  },
  methods: {
    toggleMenu() {
      this.collapsedd = !this.collapsedd
      this.$emit("collapse", {collapsed: this.collapsedd});
    }
  }
};
</script>