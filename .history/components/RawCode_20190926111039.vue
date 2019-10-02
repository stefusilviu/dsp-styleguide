<template>
    <pre><code v-html="content"></code></pre>
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
        console.log(this.$slots.default[0].text)
    }
}
</script>