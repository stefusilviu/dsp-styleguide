<template>
    <el-tabs>
        <el-tab-pane label="HTML">
            <prism language="html" :lineNumbers="true" :readonly="true" :code="html"></prism>
        </el-tab-pane>
        <el-tab-pane label="CSS">
            <prism language="css" :lineNumbers="true" :readonly="true" :code="css"></prism>
        </el-tab-pane>
        <el-tab-pane label="Vue component">
            <prism language="html" :lineNumbers="true" :readonly="true" :code="component"></prism>
            <div class="docs">
                <h4>Props:</h4>
                <ul>
                    <li><strong>type</strong> (String) - Values: impact, ghost, promo</li>
                    <li><strong>url</strong> (String) - Value: url for the button</li>
                    <li><strong>block</strong> (Boolean) - Values: true/false</li>
                    <li><strong>elementId</strong> (String) - Value: ID</li>
                </ul>
            </div>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import html from './html-markup.html'
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