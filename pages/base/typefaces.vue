<template>
  <app-page :narrow="true">

    <h2 class="page-title">Typefaces</h2>
    <div class="page-description mb-30">
      <p>The typefaces referenced by SASS variables in this styleguide.</p>
    </div>

    <el-row :gutter="20">
        <el-col :sm="24" :md="12">
          <div class="page-content-demo stg-design mb-30">
            <h4>$ff-serif</h4>
            <p>font-family: "McClatchy Serif", Georgia, Times, "Times New Roman", serif</p>
            <p class="mb-30">font-weights: 400, 500, 600, 400</p>
            <h4>$ff-sans</h4>
            <p>font-family: "McClatchy Sans", Arial, "Helvetica Neue", Helvetica, sans-serif</p>
            <p>font-weights: 200, 300, 400, 500, 600, 700, 900</p>
          </div>
        </el-col>
        <el-col :sm="24" :md="12">
          <div class="page-content-code mb-30">
            <el-card>
              <el-tabs>
                <el-tab-pane label="CSS">
                  <prism language="css" :lineNumbers="true" :readonly="true" :code="css"></prism>
                </el-tab-pane>
              </el-tabs>
            </el-card>
          </div>
        </el-col>
      </el-row>

  </app-page>
</template>

<script>
  import AppPage from '@/components/AppPage'
  import css from '!!raw-loader!@/assets/scss/stg-design/base/_typefaces.scss'

  export default {
    layout: 'page-layout',
    components: {
      'app-page': AppPage,
    },
    head () {
      return {
        title: 'Typefaces | Base',
      }
    },
    data() {
      return {
        css
      }
    }
  }
</script>