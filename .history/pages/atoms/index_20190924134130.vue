<template lang="md">
  <div v-html="content"></div>
</template>

<script>
  import AppSidebar from '@/components/AppSidebar'
  import shortcut from '@/components/Shortcut.vue'
  import content from '@/content/atoms/index.md'

  export default {
    layout: 'page-layout',
    components: {
      'app-sidebar': AppSidebar,
      shortcut
    },
    head () {
      return {
        title: 'Atoms',
      }
    },
    data() {
      return {
        content
      }
    }
  }
</script>