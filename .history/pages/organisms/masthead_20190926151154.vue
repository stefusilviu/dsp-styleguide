<template>
  <app-page :narrow="true">

    <h2 class="page-title">Masthead</h2>
    <div class="page-description mb-30">
      <p>Short description of the component</p>
    </div>

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
        title: 'Masthead | Organisms',
      }
    }
  }
</script>