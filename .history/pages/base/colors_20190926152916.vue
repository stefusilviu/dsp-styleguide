<template>
  <app-page :narrow="true">

    <h2 class="page-title">Colors</h2>
    <div class="page-description mb-30">
      <p>The following are all the colors used in Saratoga design. The colors are used to emphasize element or create a better visual hierarchy.</p>
    </div>

    <el-row :gutter="20">
      <el-col :xs="12" :sm="8" :lg="6">
        <color name="Black" color="#222222"></color>
      </el-col>
      <el-col :xs="12" :sm="8" :lg="6">
        <color name="Dark gray" color="#373737"></color>
      </el-col>
      <el-col :xs="12" :sm="8" :lg="6">
        <color name="Medium gray" color="#707070"></color>
      </el-col>
      <el-col :xs="12" :sm="8" :lg="6">
        <color name="Light gray" color="#989898"></color>
      </el-col>
      <el-col :xs="12" :sm="8" :lg="6">
        <color name="Dark shasta" color="#1B417F"></color>
      </el-col>
      <el-col :xs="12" :sm="8" :lg="6">
        <color name="Medium shasta" color="#31409f"></color>
      </el-col>
      <el-col :xs="12" :sm="8" :lg="6">
        <color name="Light shasta" color="#5169B8"></color>
      </el-col>
      <el-col :xs="12" :sm="8" :lg="6">
        <color name="Red" color="#D63031"></color>
      </el-col>
    </el-row>

    <div class="page-content-code mb-30">
      <el-card>
        <el-tabs>
          <el-tab-pane label="HTML">
            <prism language="html" :lineNumbers="true" :readonly="true" :code="html"></prism>
          </el-tab-pane>
          <el-tab-pane label="CSS">
            <prism language="css" :lineNumbers="true" :readonly="true" :code="css"></prism>
          </el-tab-pane>
          <el-tab-pane label="Vue component">
            <prism language="html" :lineNumbers="true" :readonly="true" :code="component"></prism>
            <div class="docs">
              <h4>Props:</h4>
              <prop name="type" type="String">Values: impact, ghost, promo</prop>
              <prop name="url" type="String">Value: url for the button</prop>
              <prop name="block" type="Boolean">Values: true/false</prop>
              <prop name="elementId" type="String">Value: ID</prop>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>

  </app-page>
</template>

<script>
  import AppPage from '@/components/AppPage'
  import css from "!!raw-loader!@/assets/scss/stg-design/atoms/_colors.scss";

  export default {
    layout: 'page-layout',
    head () {
      return {
        title: 'Colors | Base',
      }
    },
    data() {
      return {
        css,
      };
    }
  }
</script>