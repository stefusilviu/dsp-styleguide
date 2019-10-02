import Vue from "vue"
// import VuePrism from "vue-prism-editor"

import Prism from "prismjs"
import "prismjs/themes/prism.css"
import "vue-prism-editor/dist/VuePrismEditor.css"
import "@/assets/scss/core/_custom.scss"

import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.min'

Prism.plugins.NormalizeWhitespace.setDefaults({
    'remove-trailing': true,
    'remove-indent': true,
    'left-trim': true,
    'right-trim': true,
});

// Vue.component("prism", VuePrism)

const VuePrism = {

    install(Vue, options) {

        Vue.mixin({
            mounted() {
                Prism.highlightAll(true, () => console.log('works'));
            }
        })
    }
}

Vue.use(VuePrism)

