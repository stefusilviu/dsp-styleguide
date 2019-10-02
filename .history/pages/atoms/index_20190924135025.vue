<template lang="md">
  <html-content :html="text"></html-content>
</template>

<script>
  import AppSidebar from '@/components/AppSidebar'
  import shortcut from '@/components/Shortcut.vue'
  import text from '@/content/atoms/index.md'
  import content from '@/components/Content.vue'

  export default {
    layout: 'page-layout',
    components: {
      'app-sidebar': AppSidebar,
      'html-content': content,
      shortcut
    },
    head () {
      return {
        title: 'Atoms',
      }
    },
    data() {
      return {
        text
      }
    }
  }
</script>