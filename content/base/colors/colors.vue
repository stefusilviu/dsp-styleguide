<template lang="md">
    <div class="page-section">
        <h3 class="title">Colors</h3>
        <div class="stg-design demo-container">
            <a href="#" class="button">Button</a>
        </div>
        <el-tabs type="border-card">
            <el-tab-pane label="HTML">
                <prism language="html" :lineNumbers="true" :readonly="true" :code="html"></prism>
            </el-tab-pane>
            <el-tab-pane label="CSS">
                <prism language="css" :lineNumbers="true" :readonly="true" :code="css"></prism>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import html from './colors.html'
import css from '!!raw-loader!@/assets/scss/stg-design/base/_colors.scss'

export default {
    data() {
        return {
            html,
            css
        }
    }
}
</script>