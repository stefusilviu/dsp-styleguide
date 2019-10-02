<template>
  <app-page :narrow="true">

    <template #page-title>Paywall</template>

    <template #page-description>
      <!-- Content here -->
      <p>Short description of element.</p>
    </template>

    <template #page-demo>
      <!-- Content here -->
    </template>

    <template #page-code>
      <!-- Content here -->
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
        title: 'Paywall | Templates',
      }
    }
  }
</script>