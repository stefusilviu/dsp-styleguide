<template>
    <a class="menu-toggle" href="#" @click.prevent="toggleMenu">
        <i class="el-icon-back" v-if="!collapsed"></i>
        <i class="el-icon-right" v-else></i>
    </a>
</template>

<script>
export default {
    name: 'menu-toggle',
    props: {
        collapsed: Boolean
    },
    methods: {
        toggleMenu() {
        console.log('clicked')
        this.collapsed = !this.collapsed
        }
    }
}
</script>