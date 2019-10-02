<template>
  <a class="menu-toggle" href="#" @click.stop="toggleMenu">
    <i class="el-icon-back" v-if="!collapse"></i>
    <i class="el-icon-right" v-if="collapse"></i>
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