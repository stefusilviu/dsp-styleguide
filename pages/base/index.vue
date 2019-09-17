<template>
  <app-page>
    <template #page-title>Base styles</template>
    <template #page-description>
      <p>Base syles are used for setting up SCSS variables, typography and colorss.</p>
    </template>
  </app-page>
</template>

<script>
  import AppPage from '@/components/AppPage'

  export default {
    layout: 'page-layout',
    components: {
      'app-page': AppPage
    }
  }
</script>