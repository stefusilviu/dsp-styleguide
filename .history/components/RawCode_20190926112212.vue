<template>
    <v-runtime-template :template="content"></v-runtime-template>
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
    data() {
        return {
            content: this.$slots.default
        }
    },
    mounted() {
        console.log(this.$slots.default[0].text)
    },
    components: {
        VRuntimeTemplate
    }
}
</script>