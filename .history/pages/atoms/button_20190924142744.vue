<template>
  <app-page :narrow="true">

    <template #page-title>Buttons</template>

    <template #page-description>
      <p>Saratoga buttons are the most common call-to-action elements treated as atoms. The button classes can be used on diferent elements which expect user click.</p>
    </template>

    <template #page-demo>
      <div class="mb-10"><button class="button impact">Impact button</button></div>
      <div class="mb-10"><button class="button ghost">Ghost button</button></div>
      <div class="mb-10"><button class="button promo">Promo button</button></div>
      <div class="mb-10"><button class="button">Text button</button></div>
    </template>

    <template #page-code>
      <mcc-buttons></mcc-buttons>
    </template>

  </app-page>
</template>

<script>
  import AppPage from '@/components/AppPage'
  import MccButtons from '@/content/atoms/buttons/buttons'

  export default {
    layout: 'page-layout',
    components: {
      'app-page': AppPage,
      MccButtons
    },
    head () {
      return {
        title: 'Button | Atoms',
      }
    }
  }
</script>