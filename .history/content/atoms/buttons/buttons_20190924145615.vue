<template>
    <el-tabs>
        <el-tab-pane label="HTML">

            <pre class="language-html">
                <code>
                    <button class="button impact">Impact button</button>
                    <button class="button ghost">Ghost button</button>
                    <button class="button promo">Promo button</button>
                    <button class="button">Text button</button>
                </code>
            </pre>
            
        </el-tab-pane>
        <el-tab-pane label="CSS">

            <pre class="language-html">
                <code>
                    button,
a.button {
  display: inline-block;
  font: 600 14px $font-family-sans;
  line-height: 18px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  padding: .6em 1em .3em;
  margin: 0;
  border: 1px solid transparent;
  box-sizing: border-box;
  border-radius: 2px;
  align-self: flex-start;
  background-color: inherit;

  &.disabled,
  &:disabled,
  &.inactive {
    cursor: default;
    pointer-events: none;
    opacity: 0.9;
  }

  &.impact {
    background-color: $stg-button-primary-bg;
    color: $white;
  }

  &.promo {
    background-color: $stg-accent-color;
    color: $white;
  }

  &.ghost {
    color: $stg-accent-color;
    background-color: $white;
    border-color: $dark-gray;
  }

  &.ghost.grey {
    color: $dark-gray;
  }

  .loading-container {
    background: none;

    .loading-dot {
      background-color: $white;
    }
  }
}
                </code>
            </pre>
            
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