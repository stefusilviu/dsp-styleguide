<template lang="md">
  <v-runtime-template :template="content"/>
</template>

<script>
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
        content
      }
    }
  }
</script>