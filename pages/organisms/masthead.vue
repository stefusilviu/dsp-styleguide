<template>
  <app-page :narrow="true">

    <h2 class="page-title">Masthead</h2>
    <div class="page-description mb-30">
      <p>The masthead is the main header of the website containing logo, few navigation links and contact info.</p>
    </div>

    <div class="page-content-demo stg-design mb-30">
      <nav class="navbar navbar-default masthead-wrapper">
        <div id="masthead">
            <div class="container masthead-container">
                <h1 class="logo">
                    <a href="#">
                        <img class="img-fluid"
                            src="https://account.miamiherald.com/static/assets/images/miamiherald/logo-76670b0834.svg"
                            alt="Miamiherald" />
                    </a>
                </h1>
                <ul class="masthead-links">
                    <li><a id="masthead-nav-head-phone-number-link" href="tel:800-843-4372">800-843-4372</a></li>
                    <li><a id="head_contact_us" href="http://www.miamiherald.com/customer-service/contact-us/" target="_blank">CONTACT US</a></li>
                </ul>
            </div>
        </div>
      </nav>
    </div>

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

  </app-page>
</template>

<script>
  import AppPage from '@/components/AppPage'
  import html from '@/content/organisms/masthead/html-markup.html'
  import css from '!!raw-loader!@/assets/scss/stg-design/organisms/_masthead.scss'

  export default {
    layout: 'page-layout',
    components: {
      'app-page': AppPage,
    },
    head () {
      return {
        title: 'Masthead | Organisms',
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