<template>
    <el-tabs>
        <el-tab-pane label="HTML">

            <pre class="language-html">
                <code v-html="html">
                    <button class="button impact">Impact button</button>
                    <button class="button ghost">Ghost button</button>
                    <button class="button promo">Promo button</button>
                    <button class="button">Text button</button>
                </code>
            </pre>
            
        </el-tab-pane>
        <el-tab-pane label="CSS">
            <!-- <prism language="css" :lineNumbers="true" :readonly="true" :code="css"></prism> -->
        </el-tab-pane>
        <el-tab-pane label="Vue component">
            <!-- <prism language="html" :lineNumbers="true" :readonly="true" :code="html"></prism> -->
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import html from './buttons.html'
import css from '!!raw-loader!@/assets/scss/stg-design/atoms/_buttons.scss'

export default {
    name: 'mcc-buttons',
    data() {
        return {
            html,
            css
        }
    }
}
</script>