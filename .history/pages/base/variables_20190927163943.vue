<template>
  <app-page :narrow="true">

    <h2 class="page-title">Variables</h2>
    <div class="page-description mb-30">
      <p>We're using SCSS variables in order to keep property values in sync and more smooth later edits.</p>
    </div>

    <el-row :gutter="20">
      <el-col :sm="24" :md="18">
        <prism language="css" :lineNumbers="true" :readonly="true" :code="css"></prism>
      </el-col>
    </el-row>

  </app-page>
</template>

<script>
  import AppPage from '@/components/AppPage'
  import css from "!!raw-loader!@/assets/scss/stg-design/base/_variables.scss";

  export default {
    layout: 'page-layout',
    components: {
      'app-page': AppPage,
    },
    head () {
      return {
        title: 'Variables | Base',
      }
    },
    data() {
      return {
        css
      }
    }
  }
</script>