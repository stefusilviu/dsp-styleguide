<template>
    <prism language="html" :lineNumbers="true" :readonly="true" :code="content"></prism>
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
            content: ''
        }
    },
    mounted() {
        console.log(this.$md.render(this.$slots.default))
        // console.log(this.$slots.default[0].text)
    }
}
</script>