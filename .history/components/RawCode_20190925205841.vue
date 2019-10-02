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
        return h('div', {
            domProps: {
                language: this.language,
                lineNumbers: true,
                readonly: true,
                code: this.$slots.default
            },
        }, [
            h('prism', '')
        ])
    },
}
</script>