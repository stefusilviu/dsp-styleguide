<template>
    <!-- <prism language="html" :lineNumbers="true" :readonly="true" :code="content"></prism> -->
    <p>silvius</p>
</template>

<script>
export default {
    name: 'raw-code',
    props: {
        language: {
            type: String,
            default: 'html'
        }
    },
    data() {
        return {
            content: this.$slots.default
        }
    },
    mounted() {
        console.log(this.$slots.default)
    }
}
</script>