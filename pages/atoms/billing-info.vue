<template>
  <app-page :narrow="true">
    <h2 class="page-title">Billing info</h2>
    <div class="page-description mb-30">
      <p>Billing information are items like credit cards, email addresses (for PayPal) displayed with the respective payment logo.</p>
    </div>

    <el-row :gutter="20">
      <el-col :sm="24" :md="12">
        <h4>Demo</h4>
        <div class="page-content-demo stg-design mb-30">
          <div class="billing-info mb-10">
            <span>**** **** **** 1432</span>
            <img src="/img/cc-visa.png" alt="">
          </div>
          <div class="billing-info mb-10">
            <span>**** **** **** 7478</span>
            <img src="/img/cc-mastercard.png" alt="">
          </div>
          <div class="billing-info mb-10">
            <span>paypal.email@email.com</span>
            <img src="/img/cc-paypal.png" alt="">
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
import AppPage from '@/components/AppPage'

import html from '@/content/atoms/billing-info/html-markup.html'
import css from '!!raw-loader!@/assets/scss/stg-design/atoms/_billing-info.scss'

export default {
  layout: 'page-layout',
  head() {
    return {
      title: 'Billing Information | Atoms'
    };
  },
  data() {
    return {
      css,
      html
    }
  }
}
</script>