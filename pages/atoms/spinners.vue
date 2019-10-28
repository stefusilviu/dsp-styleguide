<template>
  <app-page :narrow="true">

    <h2 class="page-title">Spinners</h2>
    <div class="page-description mb-30">
      <p>We use spinners in order to show the loading state of elements.</p>

      <el-row :gutter="20">
        <el-col :sm="24" :md="12">
          <h4>Demo</h4>
          <div class="page-content-demo stg-design mb-30">
            
            <el-card shadow="never" class="mb-20">
              <div style="height: 60px; position: relative;">
                <div class="spinner show-spinner">
                  <span class="spinner-dot"></span>
                  <span class="spinner-dot"></span>
                  <span class="spinner-dot"></span>
                </div>
              </div>
            </el-card>

            <el-card shadow="never" class="mb-20">
              <div style="height: 60px; position: relative;">
                <div class="spinner black show-spinner">
                  <span class="spinner-dot"></span>
                  <span class="spinner-dot"></span>
                  <span class="spinner-dot"></span>
                </div>
              </div>
            </el-card>

            <el-card shadow="never" class="mb-20" body-style="background-color: #31409f">
              <div style="height: 60px; position: relative;">
                <div class="spinner no-bg white show-spinner">
                  <span class="spinner-dot"></span>
                  <span class="spinner-dot"></span>
                  <span class="spinner-dot"></span>
                </div>
              </div>
            </el-card>

          </div>
        </el-col>
        <el-col :sm="24" :md="12">
          <h4>Code</h4>
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

              <div class="docs">
                <h4>Modifiers</h4>
                <p>You can add classes to change the look of the spinner:</p>
                <ul>
                  <li><pre>black</pre> - changes the dots color in black</li>
                  <li><pre>white</pre> - changes the dots color in white</li>
                  <li><pre>show-spinner</pre> - by default the spinner is hidden. You have to add this classin order to make it visible.</li>
                  <li><pre>fixed</pre> - add this class in order to make the spinner fixed related to window</li>
                </ul>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>

  </app-page>
</template>

<script>
  import AppPage from '@/components/AppPage'

  import html from '@/content/atoms/spinners/html-markup.html'
  import css from '!!raw-loader!@/assets/scss/stg-design/atoms/_spinners.scss'

  export default {
    layout: 'page-layout',
    components: {
      'app-page': AppPage,
    },
    head () {
      return {
        title: 'Spinners | Atoms',
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