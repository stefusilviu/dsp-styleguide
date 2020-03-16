<template>
  <app-page :narrow="true">
    <h2 class="page-title">Expandable card</h2>
    <div class="page-description mb-30">
      <p>Expandable card is doing exactly what the name describes. It has a title container which is visible, and another one which is hidden. When the toggle link is clicked, the hidden container will toggle its visibility.</p>
    </div>

    <el-row :gutter="20">
      <el-col :sm="24" :md="12">
        <div class="page-content-demo stg-design mb-30">
          <div class="card card-expandable">
            <div class="card-expandable-title">
              <button
                class="card-toggle-button"
                data-toggle-show="Show details"
                data-toggle-hide="Hide details"
                data-card-toggle="true"
              ></button>
              <p class="byline caps mb-0">Due today: $1.99</p>
              <p class="bold mb-0">Unlimited Digital Access</p>
            </div>
            <div class="card-expandable-content">
              <div class="pb-15"></div>
              <h4 class="byline bold">
                <span class="black">$1.99 for your 1st month</span> $5.99/month after
              </h4>
              <p
                class="med-gray mb-0"
              >Get access to everything on Miamiherald.com, our apps, the eEdition, and our stories platforms like Facebook Instant Articles and Google News.</p>
            </div>
          </div>
          <div class="card card-mobile-view">
            <div class="card-mobile-view-title">
              <p class="mb-0">Unlimited Digital Access</p>
              <button
                class="card-mobile-view-toggle-button"
                data-toggle-show="Show details"
                data-toggle-hide="Hide details"
                data-card-toggle="true"
              >
                <i class="fas fa-caret-down"></i>
                <i class="fas fa-caret-up"></i>
              </button>
            </div>
            <p class="med-gray mb-0">$10.99 for 1 month, $15.99/month after</p>
            <div class="card-expandable-content mt-15">
              <p
                class="med-gray mb-0"
              >Get access to everything on Miamiherald.com, our apps, the eEdition, and our stories platforms like Facebook Instant Articles and Google News.</p>
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

import html from "@/content/molecules/expandable/html-markup.html";
import css from "!!raw-loader!@/assets/scss/stg-design/molecules/_expandable-card.scss";

export default {
  layout: "page-layout",
  components: {
    "app-page": AppPage
  },
  head() {
    return {
      title: "Sub Nav | Molecules"
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