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
        console.log(this.$md.render(this.getChildrenTextContent(this.$slots.default)))
        // console.log(this.$slots.default[0].text)
    },
    methods: {
        getChildrenTextContent(children) {
            const self = this
            return children.map(function (node) {
                return node.children
                ? self.getChildrenTextContent(node.children)
                : node.text
            }).join('')
        }
    }
}
</script>