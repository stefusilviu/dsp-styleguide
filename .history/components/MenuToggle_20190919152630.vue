<template>
    <a class="menu-toggle" href="#">
        <i class="el-icon-back" v-if="collapsed"></i>
        <i class="el-icon-right" v-else></i>
    </a>
</template>

<script>
export default {
    name: 'menu-toggle',
    props: {
        collapsed: Boolean
    }
}
</script>