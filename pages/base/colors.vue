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
        <color name="Pearl" color="#f4f4f4" invert="true"></color>
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
          <el-tab-pane label="CSS">
            <prism language="css" :lineNumbers="true" :readonly="true" :code="css"></prism>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </app-page>
</template>

<script>
import css from "!!raw-loader!@/assets/scss/stg-design/base/_colors.scss";

export default {
  layout: "page-layout",
  head() {
    return {
      title: "Colors | Base"
    };
  },
  data() {
    return {
      css
    };
  }
};
</script>