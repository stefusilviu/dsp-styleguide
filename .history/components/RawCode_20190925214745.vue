

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
    template: `<prism :language="language" :lineNumbers="true" :readonly="true" :code="content"></prism>`
    // render(h) {
    //     return h('prism', {
    //         props: {
    //             language: this.language,
    //             lineNumbers: true,
    //             readonly: true,
    //             code: this.$slots.default[0]
    //         },
    //     })
    // }
}
</script>