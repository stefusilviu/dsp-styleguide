<template>
  <app-page :narrow="true">
    <h2 class="page-title">List</h2>
    <div class="page-description mb-30">
      <p>Here are defined the lists used in Saratoga design.</p>
    </div>

    <el-row :gutter="20">
      <el-col :sm="24" :md="12">
        <h4>Demo</h4>
        <div class="page-content-demo stg-design mb-30">
          <ul class="list">
            <li>Exclusive extras, like the eEdition and our stories on Facebook and Google News.</li>
            <li>Explore newsletters, podcasts, subscriber-only content, interactive media and video.</li>
            <li>Earn rewards points for reading, playing, watching and more.</li>
          </ul>
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
import AppPage from "@/components/AppPage";

import html from "@/content/atoms/lists/html-markup.html";
import css from "!!raw-loader!@/assets/scss/stg-design/atoms/_lists.scss";

export default {
  layout: "page-layout",
  components: {
    "app-page": AppPage
  },
  head() {
    return {
      title: "List | Atoms"
    };
  },
  data() {
    return {
      html,
      css
    };
  }
};
</script>