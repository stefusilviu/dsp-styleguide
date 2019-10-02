<template>
  <app-page :narrow="true">

    <h2 class="page-title">Buttons</h2>
    <div class="page-description mb-30">
      <p>Saratoga buttons are the most common call-to-action elements treated as atoms. The button classes can be used on diferent elements which expect user click.</p>
    </div>

    <el-row :gutter="20">
      <el-col :sm="24" :md="12">

        <h4>Demo</h4>
        <div class="page-content-demo stg-design mb-30">
          <div class="mb-10"><button class="button impact">Impact button</button></div>
          <div class="mb-10"><button class="button ghost">Ghost button</button></div>
          <div class="mb-10"><button class="button promo">Promo button</button></div>
          <div class="mb-10"><button class="button">Text button</button></div>
        </div>

      </el-col>
      <el-col :sm="24" :md="12">
        <div class="page-content-code mb-30">
          <el-card>

            <mcc-buttons></mcc-buttons>

          </el-card>
        </div>
      </el-col>
    </el-row>

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
    },
    head () {
      return {
        title: 'Button | Atoms',
      }
    }
  }
</script>