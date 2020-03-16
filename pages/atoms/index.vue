<template>
  <el-container id="app-container">
    <app-sidebar></app-sidebar>
    <el-container>
      <el-main>
        <div class="narrow-page">
          <h2>Atoms</h2>
          <p>
            If atoms are the basic building blocks of matter, then the atoms of our interfaces serve
            as the foundational building blocks that comprise all our user interfaces.
            These atoms include basic HTML elements like form labels, inputs, buttons, and others that can’t be
            broken down any further without ceasing to be functional.
          </p>
          <el-row :gutter="20">
            <el-col :xs="12" :sm="8" :lg="6">
              <shortcut link="/atoms/animations">Animations</shortcut>
            </el-col>
            <el-col :xs="12" :sm="8" :lg="6">
              <shortcut link="/atoms/billing-info">Billing info</shortcut>
            </el-col>
            <el-col :xs="12" :sm="8" :lg="6">
              <shortcut link="/atoms/button">Button</shortcut>
            </el-col>
            <el-col :xs="12" :sm="8" :lg="6">
              <shortcut link="/atoms/card">Card</shortcut>
            </el-col>
            <el-col :xs="12" :sm="8" :lg="6">
              <shortcut link="/atoms/forms">Forms</shortcut>
            </el-col>
            <el-col :xs="12" :sm="8" :lg="6">
              <shortcut link="/atoms/list">List</shortcut>
            </el-col>
            <el-col :xs="12" :sm="8" :lg="6">
              <shortcut link="/atoms/more-link">More link</shortcut>
            </el-col>
            <el-col :xs="12" :sm="8" :lg="6">
              <shortcut link="/atoms/spinners">Spinners</shortcut>
            </el-col>
            <el-col :xs="12" :sm="8" :lg="6">
              <shortcut link="/atoms/typography">Typography</shortcut>
            </el-col>
            <el-col :xs="12" :sm="8" :lg="6">
              <shortcut link="/atoms/modal">Modal</shortcut>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppSidebar from "@/components/AppSidebar";
import shortcut from "@/components/Shortcut.vue";

export default {
  layout: "page-layout",
  components: {
    "app-sidebar": AppSidebar,
    shortcut
  },
  head() {
    return {
      title: "Atoms"
    };
  }
};
</script>