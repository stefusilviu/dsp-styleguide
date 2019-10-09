<template>
  <app-page :narrow="true">

    <h2 class="page-title">Utilities</h2>
    <div class="page-description mb-30">
      <p>Utilities are helper classes that alters the main look of an element. All utility classes are grouped as Utility molecule.</p>
      <p><i>Note: This code should stay at the bottom of the molecules file so that packages can be cleanly overloaded.</i></p>
    </div>

    <el-row :gutter="20">
      <el-col :sm="24" :md="12">
        <div class="page-content-demo stg-design mb-30">
          <p class="summary">Summary paragraph</p>
          <p class="small">Small paragraph</p>
          <p class="caps">Caps paragraph</p>
          <p class="sans">Sans serif paragraph</p>
          <p class="serif">Serif pargraph</p>
          <p class="soft">Spft paragraph</p>
          <p class="bold">Bold pragraph</p>
          <p class="underline">Underlined paragraph</p>
        </div>
      </el-col>
      <el-col :sm="24" :md="12">
        <div class="page-content-code mb-30">
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
        </div>
      </el-col>
    </el-row>

  </app-page>
</template>

<script>
  import AppPage from '@/components/AppPage'

  import html from '@/content/molecules/utilities/html-markup.html'
  import css from '!!raw-loader!@/assets/scss/stg-design/molecules/_utilities.scss'

  export default {
    layout: 'page-layout',
    components: {
      'app-page': AppPage,
    },
    head () {
      return {
        title: 'Utilities | Molecules',
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