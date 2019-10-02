<template>
    <v-runtime-template :template="content"/>
</template>

<script>
import VRuntimeTemplate from "v-runtime-template";

export default {
    name: 'raw-code',
    props: {
        language: {
            type: String,
            default: 'html'
        }
    },
    components: {
        VRuntimeTemplate
    },
    data() {
        return {
            content: this.$slots.default,
            template: `<prism language="html" :lineNumbers="true" :readonly="true" :code="$md.render(content)"></prism>`
        }
    },
    mounted() {
        console.log(this.template)
    }
}
</script>