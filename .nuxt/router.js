import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7507b9ae = () => interopDefault(import('..\\pages\\atoms\\index.vue' /* webpackChunkName: "pages_atoms_index" */))
const _8a7dfd1a = () => interopDefault(import('..\\pages\\base\\index.vue' /* webpackChunkName: "pages_base_index" */))
const _461fe063 = () => interopDefault(import('..\\pages\\molecules\\index.vue' /* webpackChunkName: "pages_molecules_index" */))
const _fdf3d6a2 = () => interopDefault(import('..\\pages\\organisms\\index.vue' /* webpackChunkName: "pages_organisms_index" */))
const _72a3b752 = () => interopDefault(import('..\\pages\\templates\\index.vue' /* webpackChunkName: "pages_templates_index" */))
const _17664206 = () => interopDefault(import('..\\pages\\atoms\\button.vue' /* webpackChunkName: "pages_atoms_button" */))
const _feb6d438 = () => interopDefault(import('..\\pages\\atoms\\card.vue' /* webpackChunkName: "pages_atoms_card" */))
const _5d51571c = () => interopDefault(import('..\\pages\\atoms\\list.vue' /* webpackChunkName: "pages_atoms_list" */))
const _41e6de23 = () => interopDefault(import('..\\pages\\atoms\\morelink.vue' /* webpackChunkName: "pages_atoms_morelink" */))
const _396e4b83 = () => interopDefault(import('..\\pages\\atoms\\typography.vue' /* webpackChunkName: "pages_atoms_typography" */))
const _7d3d8bc2 = () => interopDefault(import('..\\pages\\base\\colors.vue' /* webpackChunkName: "pages_base_colors" */))
const _dfb524b6 = () => interopDefault(import('..\\pages\\base\\fonts.vue' /* webpackChunkName: "pages_base_fonts" */))
const _5dc461d0 = () => interopDefault(import('..\\pages\\base\\variables.vue' /* webpackChunkName: "pages_base_variables" */))
const _26bc03f0 = () => interopDefault(import('..\\pages\\organisms\\masthead.vue' /* webpackChunkName: "pages_organisms_masthead" */))
const _c3c1da92 = () => interopDefault(import('..\\pages\\templates\\paywall.vue' /* webpackChunkName: "pages_templates_paywall" */))
const _672e63e4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/atoms",
      component: _7507b9ae,
      name: "atoms"
    }, {
      path: "/base",
      component: _8a7dfd1a,
      name: "base"
    }, {
      path: "/molecules",
      component: _461fe063,
      name: "molecules"
    }, {
      path: "/organisms",
      component: _fdf3d6a2,
      name: "organisms"
    }, {
      path: "/templates",
      component: _72a3b752,
      name: "templates"
    }, {
      path: "/atoms/button",
      component: _17664206,
      name: "atoms-button"
    }, {
      path: "/atoms/card",
      component: _feb6d438,
      name: "atoms-card"
    }, {
      path: "/atoms/list",
      component: _5d51571c,
      name: "atoms-list"
    }, {
      path: "/atoms/morelink",
      component: _41e6de23,
      name: "atoms-morelink"
    }, {
      path: "/atoms/typography",
      component: _396e4b83,
      name: "atoms-typography"
    }, {
      path: "/base/colors",
      component: _7d3d8bc2,
      name: "base-colors"
    }, {
      path: "/base/fonts",
      component: _dfb524b6,
      name: "base-fonts"
    }, {
      path: "/base/variables",
      component: _5dc461d0,
      name: "base-variables"
    }, {
      path: "/organisms/masthead",
      component: _26bc03f0,
      name: "organisms-masthead"
    }, {
      path: "/templates/paywall",
      component: _c3c1da92,
      name: "templates-paywall"
    }, {
      path: "/",
      component: _672e63e4,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
