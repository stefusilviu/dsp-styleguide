<template>
    <prism language="html" :lineNumbers="true" :readonly="true" :code="v-html="$md.render(content)""></prism>
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
            content: this.$slots.default[0].text
        }
    },
    mounted() {
        console.log(this.$slots.default[0].text)
    }
}
</script>