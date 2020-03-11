<template>
  <el-menu
    class="side-menu"
    :collapse="sidebarCollapsed || isMobile"
    :router="true"
    :unique-opened="true"
    :default-active="$nuxt.$route.path"
    active-text-color="#04816A"
  >
    <el-menu-item index="/">
      <img src="~/assets/img/home-alt.svg" width="30" alt />
      <span>Home</span>
    </el-menu-item>

    <el-submenu index="base-sub">
      <template slot="title">
        <img src="~/assets/img/apps.svg" width="30" alt />
        <span>Base</span>
      </template>
      <el-menu-item index="/base">Base</el-menu-item>
      <el-menu-item index="/base/colors">Colors</el-menu-item>
      <el-menu-item index="/base/typefaces">Typefaces</el-menu-item>
      <el-menu-item index="/base/variables">Variables</el-menu-item>
    </el-submenu>

    <el-submenu index="atoms-sub">
      <template slot="title">
        <img src="~/assets/img/atom.svg" width="30" alt />
        <span>Atoms</span>
      </template>
      <el-menu-item index="/atoms">Atoms</el-menu-item>
      <el-menu-item index="/atoms/animations">Animations</el-menu-item>
      <el-menu-item index="/atoms/button">Button</el-menu-item>
      <el-menu-item index="/atoms/billing-info">Billing Info</el-menu-item>
      <el-menu-item index="/atoms/typography">Typography</el-menu-item>
      <el-menu-item index="/atoms/card">Card</el-menu-item>
      <el-menu-item index="/atoms/more-link">More link</el-menu-item>
      <el-menu-item index="/atoms/list">List</el-menu-item>
      <el-menu-item index="/atoms/forms">Forms</el-menu-item>
      <el-menu-item index="/atoms/spinners">Spinners</el-menu-item>
      <el-menu-item index="/atoms/modal">Modal</el-menu-item>
    </el-submenu>

    <el-submenu index="molecules-sub">
      <template slot="title">
        <img src="~/assets/img/cell.svg" width="30" alt />
        <span>Molecules</span>
      </template>
      <el-menu-item index="/molecules">Molecules</el-menu-item>
      <el-menu-item index="/molecules/utilities">Utilities</el-menu-item>
      <el-menu-item index="/molecules/sub-nav">Sub Nav</el-menu-item>
      <el-menu-item index="/molecules/expandable-card">Expandable card</el-menu-item>
    </el-submenu>

    <el-submenu index="organisms-sub">
      <template slot="title">
        <img src="~/assets/img/web-grid.svg" width="30" alt />
        <span>Organisms</span>
      </template>
      <el-menu-item index="/organisms">Organisms</el-menu-item>
      <el-menu-item index="/organisms/page-footer">Page footer</el-menu-item>
      <el-menu-item index="/organisms/masthead">Masthead</el-menu-item>
    </el-submenu>

    <el-submenu index="templates-sub">
      <template slot="title">
        <img src="~/assets/img/window-maximize.svg" width="30" alt />
        <span>Templates</span>
      </template>
      <el-menu-item index="/templates">Templates</el-menu-item>
      <el-menu-item index="/templates/paywall">Paywall</el-menu-item>
    </el-submenu>

    <menu-toggle></menu-toggle>
  </el-menu>
</template>

<script>
import { mapState } from "vuex";
import MenuToggle from "@/components/MenuToggle.vue";

const debounce = (func, wait, immediate) => {
  let timeout;
  return function() {
    let context = this,
      args = arguments,
      later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      },
      call_now = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (call_now) func.apply(context, args);
  };
};

export default {
  name: "app-sidebar",
  components: {
    "menu-toggle": MenuToggle
  },
  computed: mapState(["sidebarCollapsed", "isMobile"]),
  methods: {
    onResize: function() {
      this.$store.commit("changeIsMobile", window.innerWidth < 992);
    }
  },
  mounted: function() {
    this.onResize();
    window.addEventListener("resize", debounce(this.onResize, 250));
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.onResize);
  }
};
</script>