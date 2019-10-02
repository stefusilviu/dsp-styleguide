<template>
  <div class="page-wrapper">
    <app-header class="main-header"></app-header>
    <Nuxt />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader'

export default {
  components: {
    'app-header': AppHeader
  }
}
</script>