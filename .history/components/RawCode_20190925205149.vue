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
            'class': {
                'is-red': this.isRed
            }
        }, [
            h('p', 'Example Text')
        ])
    },
}
</script>