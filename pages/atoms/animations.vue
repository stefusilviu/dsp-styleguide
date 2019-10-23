<template>
  <app-page :narrow="true">
    <h2 class="page-title">Animations</h2>
    <div class="page-description mb-30">
      <p>Saratoga animations are used to enhance transition of elements.</p>
    </div>

    <el-row :gutter="20">
      <el-col :sm="24" :md="12">
        <h4>Demo</h4>
        <div class="page-content-demo stg-design mb-30">
          <div class="mt-20"><div class="animation-box" @click="animate('slide-out-up')">Animate!</div></div>
          <div class="mt-20"><div class="animation-box" @click="animate('slide-out-down')">Animate!</div></div>
          <div class="mt-20"><div class="animation-box" @click="animate('slide-in-up')">Animate!</div></div>
          <div class="mt-20"><div class="animation-box" @click="animate('slide-in-down')">Animate!</div></div>
        </div>
      </el-col>
      <el-col :sm="24" :md="12">
        <div class="page-content-code mb-30">
          <el-card>
            <el-tabs>
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

import css from '!!raw-loader!@/assets/scss/stg-design/atoms/_animations.scss'

export default {
  layout: 'page-layout',
  head() {
    return {
      title: 'Animations | Atoms'
    };
  },
  data() {
    return {
      css
    }
  },
  methods: {
    animate(cssClass) {
      const elem = event.target
      elem.classList.add(cssClass)
      setTimeout(() => {
        elem.classList.remove(cssClass)
      }, 2200)
    }
  }
};
</script>