<template>
  <app-page :narrow="true">

    <h2 class="page-title">More link</h2>
    <div class="page-description mb-30">
      <p>The <pre>more-link</pre> element defines a stand-alone link consisting in uppercase label and an arrow to the right.</p>
    </div>

    <el-row :gutter="20">
      <el-col :sm="24" :md="12">
        <h4>Demo</h4>
        <div class="page-content-demo stg-design mb-30">
          <div class="mb-10">
            <a href="#" class="more-link">More link</a>
          </div>
          <div class="mb-10">
            <a href="#" class="more-link dark-gray">Dark link</a>
          </div>
          <div class="mb-10">
            <a href="#" class="more-link dark-gray color-arrow">More link blue</a>
          </div>
          <div class="mb-10">
            <a href="#" class="more-link blue">More link blue</a>
          </div>
          <div class="mb-10" style="background: #31409f; padding: 10px;">
            <a href="#" class="more-link white">More link white</a>
          </div>
          <div class="mb-10">
            <a href="#" class="more-link dark-gray color-arrow ttn">More link blue</a>
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
                  <p><pre>.blue</pre>, <pre>.color-arrow</pre>, <pre>.white</pre>, <pre>.ttn</pre> and any other modifier class available.</p>
                </div>
              </el-tab-pane>
              <el-tab-pane label="CSS">
                <prism language="css" :lineNumbers="true" :readonly="true" :code="css"></prism>
              </el-tab-pane>
              <el-tab-pane label="Vue component">
                <prism language="html" :lineNumbers="true" :readonly="true" :code="component"></prism>
                <div class="docs">
                  <h4>Props:</h4>
                  <prop name="color" type="String">Values: impact, ghost, promo</prop>
                  <prop name="url" type="String">Value: url for the button</prop>
                  <prop name="block" type="Boolean">Values: true/false</prop>
                  <prop name="elementId" type="String">Value: ID</prop>
                  <prop name="lowercase" type="Boolean">Values: true/false</prop>
                </div>
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

  import html from "@/content/atoms/more-link/html-markup.html";
  import component from "@/content/atoms/more-link/component.html";
  import css from "!!raw-loader!@/assets/scss/stg-design/atoms/_more-link.scss";

  export default {
    layout: 'page-layout',
    components: {
      'app-page': AppPage,
    },
    head () {
      return {
        title: 'More link | Atoms',
      }
    },
    data() {
      return {
        html,
        css,
        component
      }
    }
  }
</script>