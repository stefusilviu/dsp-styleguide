<template>
  <app-page :narrow="true">

    <h2 class="page-title">Sub Nav</h2>
    <div class="page-description mb-30">
      <p>Sub Nav is a navigation element consisting in multiple links and based on Bootstrap 4 nav. They are used mainly as tabs navigation.</p>
    </div>

    <el-row :gutter="20">
      <el-col :sm="24" :md="12">
        <div class="page-content-demo stg-design mb-30">
          <ul class="nav sub-nav" id="myTab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="messages-tab" data-toggle="tab" href="#messages" role="tab" aria-controls="messages" aria-selected="false">Messages</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="settings-tab" data-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false">Settings</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">Lorem ipsum dolor</div>
            <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">Nunca curabitur iscem</div>
            <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">Lorem cutur orascim</div>
            <div class="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab">Ipsum escit dolor</div>
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

  import html from '@/content/molecules/sub-nav/html-markup.html'
  import css from '!!raw-loader!@/assets/scss/stg-design/molecules/_sub-nav.scss'

  export default {
    layout: 'page-layout',
    components: {
      'app-page': AppPage,
    },
    head () {
      return {
        title: 'Sub Nav | Molecules',
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