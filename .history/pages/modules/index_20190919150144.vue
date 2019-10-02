<template>
  <app-page :narrow="true">

    <template #page-title>Modules</template>

    <template #page-description>
      <!-- Content here -->
      <p>Short description of element.</p>
    </template>

  </app-page>
</template>

<script>
  import AppPage from '@/components/AppPage'

  export default {
    layout: 'page-layout',
    components: {
      'app-page': AppPage,
    },
    head () {
      return {
        title: 'Modules',
      }
    }
  }
</script>