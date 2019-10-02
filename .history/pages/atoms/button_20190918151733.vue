<template>
  <app-page>

    <template #page-title>Buttons</template>

    <template #page-description>
      <p>Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button.</p>
      <p>Atoms can also include more abstract elements like color palettes, fonts and even more invisible aspects of an interface like animations.</p>
      <p>Like atoms in nature they're fairly abstract and often not terribly useful on their own. However, they're good as a reference in the context of a pattern library as you can see all your global styles laid out at a glance.</p>
    </template>

    <template #page-demo>
      <button class="button impact">Impact button</button>
      <button class="button ghost">Ghost button</button>
      <button class="button promo">Promo button</button>
      <button class="button">Text button</button>
    </template>

    <template #page-code>
      <mcc-buttons></mcc-buttons>
    </template>

  </app-page>
</template>

<script>
  import AppPage from '@/components/AppPage'
  import ButtonsCode from '@/content/atoms/buttons/buttons'

  export default {
    layout: 'page-layout',
    components: {
      'app-page': AppPage,
      'mcc-buttons': ButtonsCode
    }
  }
</script>