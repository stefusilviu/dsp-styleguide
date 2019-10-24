<template>
  <app-page :narrow="true">

    <h2 class="page-title">Page footer</h2>
    <div class="page-description mb-30">
      <p>The masthead is the main header of the website containing logo, few navigation links and contact info.</p>
    </div>

    <div class="page-content-demo stg-design mb-30">
      <div class="footer" style="position: static;">
        <div class="footer-container">
          <div class="container">
            <p class="bold mb-5">Contact Customer Service to update or get details on your account</p>
            <p class="med-shasta bold mb-5">0156843548</p>
            <p class="med-shasta bold mb-0">email@example.com</p>
          </div>
        </div>
      </div>
    </div>

    <el-card>
      <el-tabs>
        <el-tab-pane label="HTML">
          <prism language="html" :lineNumbers="true" :readonly="true" :code="html"></prism>
        </el-tab-pane>
        <el-tab-pane label="CSS">
          <prism language="css" :lineNumbers="true" :readonly="true" :code="css"></prism>
        </el-tab-pane>
      </el-tabs>
    </el-card>

  </app-page>
</template>

<script>
  import AppPage from '@/components/AppPage'
  import html from '@/content/organisms/page-footer/html-markup.html'
  import css from '!!raw-loader!@/assets/scss/stg-design/organisms/_page-footer.scss'

  export default {
    layout: 'page-layout',
    components: {
      'app-page': AppPage,
    },
    head () {
      return {
        title: 'Page footer | Organisms',
      }
    },
    data() {
      return {
        html,
        css
      }
    }
  }
</script>