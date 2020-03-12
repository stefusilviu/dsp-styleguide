<template>
  <app-page :narrow="true">
    <h2 class="page-title">Terms Modal</h2>
    <div class="page-description mb-30">
      <p>Saratoga terms and conditions modal. For demo purposes the design is not accurate in this page. Use the supplied HTML to position the modal and add the backdrop.</p>
    </div>

    <el-row :gutter="20">
      <el-col :sm="24" :md="12">
        <h4>Design</h4>
        <div class="page-content-demo stg-design mb-30">
          <div class="stg-modal">
            <!-- <div class="stg-modal-backdrop"> -->
            <div class="stg-modal-content" style="position: relative">
              <div class="stg-modal-content-title">
                <h3>Terms and conditions</h3>
              </div>
              <div class="stg-modal-content-description">
                By creating and account, you agree to our
                <a href="#">Terms of service</a> and
                <a href="#">Privacy Policy.</a>
              </div>
              <div class="stg-modal-content-buttons">
                <button class="button ghost full-width">Agree</button>
                <button class="button text full-width">Cancel</button>
              </div>
            </div>
            <!-- </div> -->
          </div>
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

import html from "@/content/atoms/modal/html-markup.html";
import css from "!!raw-loader!@/assets/scss/stg-design/atoms/_modal.scss";

export default {
  layout: "page-layout",
  components: {
    "app-page": AppPage
  },
  head() {
    return {
      title: "Modal | Atoms"
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