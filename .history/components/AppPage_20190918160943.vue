<template>
  <el-container id="app-container">
    <app-sidebar></app-sidebar>
    <el-container>
      <el-main>
        <div class="page-inner" :class="{'narrow-page': narrow}">
          <h2 class="page-title">
            <slot name="page-title"></slot>
          </h2>

          <div class="page-description mb-30">
            <slot name="page-description"></slot>
          </div>

          <el-row :gutter="20">
            <el-col :span="12">
              <h3>Demo</h3>
              <div class="page-content-demo stg-design mb-30">
                <slot name="page-demo"></slot>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="page-content-code mb-30">
                <el-card>
                  <slot name="page-code"></slot>
                </el-card>
              </div>
            </el-col>
          </el-row>
          
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppSidebar from '@/components/AppSidebar.vue'

export default {
  name: 'app-page',
  components: {
    'app-sidebar': AppSidebar
  },
  props: {
    narrow: Boolean
  }
}
</script>