<template>
    <el-tabs>
        <el-tab-pane label="HTML">
            <prism language="html" :lineNumbers="true" :readonly="true" :code="html"></prism>
        </el-tab-pane>
        <el-tab-pane label="CSS">
            <prism language="css" :lineNumbers="true" :readonly="true" :code="css"></prism>
        </el-tab-pane>
        <el-tab-pane label="Vue component">
            <prism language="html" :lineNumbers="true" :readonly="true" :code="html"></prism>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import html from './htmlMarkup.html'
import component from './component.html'
import css from '!!raw-loader!@/assets/scss/stg-design/atoms/_buttons.scss'

export default {
    data() {
        return {
            html,
            css,
            component
        }
    }
}
</script>