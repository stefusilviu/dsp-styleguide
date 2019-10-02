<template lang="md">
  <md-content :html="content"></md-content>
</template>

<script>
  import VRuntimeTemplate from "v-runtime-template";
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
    },
    components: {
      VRuntimeTemplate
    }
  }
</script>