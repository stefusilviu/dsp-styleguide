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
        console.log(this.$slots.default)
    },
    render: function (createElement) {
        this.content = createElement(
            'div',   // tag name
            this.$slots.default // array of children
        )
        console.log(this.content)
    },
}
</script>