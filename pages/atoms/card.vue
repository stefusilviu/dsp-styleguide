<template>
  <app-page :narrow="true">

    <h2 class="page-title">Card</h2>
    <div class="page-description mb-30">
      <p>We use cards to show blocks of content and components. For Saratoga design the cards are the base of the design system.</p>

      <el-row :gutter="20">
        <el-col :sm="24" :md="12">
          <h4>Demo</h4>
          <div class="page-content-demo stg-design mb-30">
            <div class="mb-10">
              <div class="card">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Similique, officia perspiciatis! Impedit aliquid repellendus neque facere fugit incidunt commodi possimus, 
                    voluptates aperiam nam officiis ullam suscipit porro eum deserunt officia.</p>
              </div>
              <div class="card impact">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Similique, officia perspiciatis! Impedit aliquid repellendus neque facere fugit incidunt commodi possimus, 
                    voluptates aperiam nam officiis ullam suscipit porro eum deserunt officia.</p>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :sm="24" :md="12">
          <div class="page-content-code mb-30">
            <el-card>
              <el-tabs>
                <el-tab-pane label="HTML">
                  <prism language="html" :lineNumbers="true" :readonly="true" :code="html"></prism>
                  <div class="docs">
                    <h4>Modifier classes:</h4>
                    <prop name=".impact">Will change the card color scheme to dark</prop>
                    <prop name=".mobile-full-width">Full width card on mobile only</prop>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="CSS">
                  <prism language="css" :lineNumbers="true" :readonly="true" :code="css"></prism>
                </el-tab-pane>
              </el-tabs>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>

  </app-page>
</template>

<script>
  import AppPage from '@/components/AppPage'

  import html from '@/content/atoms/cards/html-markup.html'
  import css from '!!raw-loader!@/assets/scss/stg-design/atoms/_cards.scss'

  export default {
    layout: 'page-layout',
    components: {
      'app-page': AppPage,
    },
    head () {
      return {
        title: 'Card | Atoms',
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