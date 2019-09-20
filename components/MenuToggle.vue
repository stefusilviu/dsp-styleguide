<template>
  <a class="menu-toggle" href="#" @click.prevent="toggleMenu">
    <i class="el-icon-back" v-if="!sidebarCollapsed"></i>
    <i class="el-icon-right" v-if="sidebarCollapsed"></i>
  </a>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'menu-toggle',
  computed: mapState([
    'sidebarCollapsed'
  ]),
  methods: {
    toggleMenu() {
      this.$store.commit('toggleSidebar')
    }
  }
};
</script>