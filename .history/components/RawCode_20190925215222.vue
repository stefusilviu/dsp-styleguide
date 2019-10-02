

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
        console.log(this.$slots.default)
    },
    template: `<prism :language="language" :lineNumbers="true" :readonly="true" :code="content"></prism>`,
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
    render (h) {
        const items = this.$slots.default.map(vnode => h('div', { class: { column: true }, vnode }))

       return h('prism', {
            props: {
                language: this.language,
                lineNumbers: true,
                readonly: true,
                code: this.$slots.default[0]
            },
            items
        })
    }
</script>