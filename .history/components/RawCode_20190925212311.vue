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
    render(h) {
        return h('prism', {
            props: {
                language: this.language,
                lineNumbers: true,
                readonly: true,
                code: this.$slots.default[0]
            },
        })
    },
}
</script>