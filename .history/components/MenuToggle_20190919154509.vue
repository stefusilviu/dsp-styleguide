<template>
    <a class="menu-toggle" href="#" @click.prevent="toggleMenu">
        <i class="el-icon-back" v-if="!collapsed"></i>
        <i class="el-icon-right" v-else></i>
    </a>
</template>

<script>
export default {
    name: 'menu-toggle',
    data() {
        collapsed: false
    },
    methods: {
        toggleMenu() {
            console.log('clicked')
            this.collapsed = !this.collapsed
            this.$emit('collapsed', this.collapsed)
        }
    }
}
</script>