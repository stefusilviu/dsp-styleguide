<template lang="md">
  <md-content :html="text"></md-content>
</template>

<script>
  import MdContent from '@/components/MarkdownContent.vue'
  import content from '@/content/atoms/index.md'

  export default {
    layout: 'page-layout',
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