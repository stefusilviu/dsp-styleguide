<template>
  <app-page :narrow="true">

    <h2 class="page-title">Typography</h2>
    <div class="page-description mb-30">
      <p>More than 95% percent of information on the web is in the form of written language so we use many atoms in order to show good typography to the user.</p>
    </div>

    <el-divider content-position="left">Basic typography</el-divider>

    <el-row :gutter="20">
      <el-col :sm="24" :md="12">
        <div class="page-content-demo stg-design mb-30">
          <p>Lorem ipsum dolor, <strong>strong amet consectetur</strong> adipisicing elit. 
            Beatae illum error, voluptatibus <i>italic culpa maxime</i> labore hic recusandae nostrum tenetur, 
            modi quasi cum? <a href="#">Ratione maxime link</a>, nihil vitae sint numquam eligendi hic.</p>
        </div>
      </el-col>
      <el-col :sm="24" :md="12">
        <div class="page-content-code mb-30">
          <el-card>
            <el-tabs>
              <el-tab-pane label="HTML">
                <prism language="html" :lineNumbers="true" :readonly="true" :code="basicHtml"></prism>
              </el-tab-pane>
              <el-tab-pane label="CSS">
                <prism language="css" :lineNumbers="true" :readonly="true" :code="basicCss"></prism>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </div>
      </el-col>
    </el-row>

    <el-divider content-position="left">Headings</el-divider>

    <el-row :gutter="20">
      <el-col :sm="24" :md="12">
        <div class="page-content-demo stg-design mb-30">
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
        </div>
      </el-col>
      <el-col :sm="24" :md="12">
        <div class="page-content-code mb-30">
          <el-card>
            <el-tabs>
              <el-tab-pane label="HTML">
                <prism language="html" :lineNumbers="true" :readonly="true" :code="headingsHtml"></prism>
              </el-tab-pane>
              <el-tab-pane label="CSS">
                <prism language="css" :lineNumbers="true" :readonly="true" :code="headingsCss"></prism>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </div>
      </el-col>
    </el-row>

    <el-divider content-position="left">Headlines</el-divider>

    <el-row :gutter="20">
      <el-col :sm="24" :md="12">
        <div class="page-content-demo stg-design mb-30">
          <p class="primary-headline">Primary Headline</p>
          <p class="primary-headline niche">Primary Headline Niche</p>
          <p class="primary-headline enhanced">Headline Enhanced</p>
          <p class="secondary-headline">Secondary Headline</p>
          <p class="secondary-headline niche">Secondary Headline Niche</p>
          <p class="secondary-headline enhanced">Secondary Headline Enhanced</p>
        </div>
      </el-col>
      <el-col :sm="24" :md="12">
        <div class="page-content-code mb-30">
          <el-card>
            <el-tabs>
              <el-tab-pane label="HTML">
                <prism language="html" :lineNumbers="true" :readonly="true" :code="headlinesHtml"></prism>
              </el-tab-pane>
              <el-tab-pane label="CSS">
                <prism language="css" :lineNumbers="true" :readonly="true" :code="headlinesCss"></prism>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </div>
      </el-col>
    </el-row>

    <el-divider content-position="left">Misc</el-divider>

    <el-row :gutter="20">
      <el-col :sm="24" :md="12">
        <div class="page-content-demo stg-design mb-30">
          <p class="byline">Byline lorem ipsum</p>
        </div>
      </el-col>
      <el-col :sm="24" :md="12">
        <div class="page-content-code mb-30">
          <el-card>
            <el-tabs>
              <el-tab-pane label="HTML">
                <prism language="html" :lineNumbers="true" :readonly="true" :code="miscHtml"></prism>
              </el-tab-pane>
              <el-tab-pane label="CSS">
                <prism language="css" :lineNumbers="true" :readonly="true" :code="miscCss"></prism>
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

  import headingsHtml from '@/content/atoms/typography/headings-html-markup.html'
  import headlinesHtml from '@/content/atoms/typography/headlines-html-markup.html'
  import basicHtml from '@/content/atoms/typography/basic-html-markup.html'
  import miscHtml from '@/content/atoms/typography/misc-html-markup.html'

  import headingsCss from '!!raw-loader!@/assets/scss/stg-design/atoms/typography/_headings.scss'
  import headlinesCss from '!!raw-loader!@/assets/scss/stg-design/atoms/typography/_headlines.scss'
  import basicCss from '!!raw-loader!@/assets/scss/stg-design/atoms/typography/_basic.scss'
  import miscCss from '!!raw-loader!@/assets/scss/stg-design/atoms/typography/_misc.scss'

  export default {
    layout: 'page-layout',
    components: {
      'app-page': AppPage,
    },
    head () {
      return {
        title: 'Typography | Atoms',
      }
    },
    data() {
      return {
        headingsHtml,
        headlinesHtml,
        basicHtml,
        miscHtml,
        headingsCss,
        headlinesCss,
        basicCss,
        miscCss
      }
    }
  }
</script>