<template>
  <a class="menu-toggle" href="#" @click.stop="toggleMenu">
    <!-- <i class="el-icon-back" v-if="!collapsedd"></i>
    <i class="el-icon-right" v-if="collapsedd"></i> -->
    {{ collapsedd }}
  </a>
</template>

<script>
export default {
  name: 'menu-toggle',
  props: {
    collapse: Boolean
  },
  methods: {
    toggleMenu() {
      this.$emit('togglemenu')
    }
  }
};
</script>