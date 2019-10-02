<template lang="md">
  <v-runtime-template :template="content"></v-runtime-template>
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
    mounted() {
      console.log(this.content)
    },
    components: {
        VRuntimeTemplate
    }
  }
</script>