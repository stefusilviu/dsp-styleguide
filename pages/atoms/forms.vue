<template>
  <app-page :narrow="true">

    <h2 class="page-title">Forms</h2>
    <div class="page-description mb-30">
      <p>We define here all elements used to create form molecules and modules. You'll find here all input types and form elements needed for DSP applications.</p>
      <p>We're using Bootstrap 4.3 markup for the forms in order to integrate well with the existing logic for validation.</p>
    </div>

    <el-row :gutter="20">
      <el-col :sm="24" :md="12">
        <div class="page-content-demo stg-design mb-30">
          <div class="form-group">
            <label for="default-input">Default</label>
            <input type="text" class="form-control" id="default-input">
          </div>
          <div class="form-group">
            <label for="focused-input">Focused</label>
            <input type="text" class="form-control focus" id="focused-input">
          </div>
          <div class="form-group">
            <label for="hint-input">Hint</label>
            <input type="email" class="form-control" id="hint-input">
            <small class="form-text">This is a hint</small>
          </div>
          <div class="form-group">
            <label for="error-input-sample">Error</label>
            <input type="email" class="form-control is-invalid" id="error-input-sample" name="error-input-sample">
            <small class="invalid-feedback">This is an error state message</small>
          </div>
          <div class="form-group stg-select">
            <label for="input-select">Dropdown</label>
            <select class="form-control" id="input-select">
              <option></option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
              <option>Option 5</option>
            </select>
          </div>
          <div class="form-group">
            <label for="password-input-sample">Password</label>
            <input type="password" class="form-control" id="password-input-sample" name="password-input-sample">
            <div class="password-switch"></div>
            <small class="form-text">Must be at least 7 characters long</small>
          </div>
          <div class="form-group">
            <label for="password-input-visible-sample">Password</label>
            <input type="text" class="form-control" id="password-input-visible-sample" name="password-input-visible-sample" value="v3ry5tr0n9!">
            <div class="password-switch visible"></div>
            <small class="form-text">Must be at least 7 characters long</small>
          </div>
          <div class="form-group">
            <label for="cardNumber">Credit card</label>
            <input type="text" class="form-control cc-input" id="cardNumber">
            <div class="cc-type"></div>
          </div>
          <div class="custom-control custom-checkbox mb-20 mt-30">
            <input type="checkbox" class="custom-control-input" id="customCheck1">
            <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
          </div>
          <div class="custom-control custom-radio">
            <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
            <label class="custom-control-label" for="customRadio1">Toggle this custom radio</label>
          </div>
          <div class="custom-control custom-radio mb-20">
            <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
            <label class="custom-control-label" for="customRadio2">Or toggle this other custom radio</label>
          </div>
        </div>
      </el-col>
      <el-col :sm="24" :md="12">
        <div class="page-content-code mb-30">
          <el-card>
            <el-tabs>
              <el-tab-pane label="HTML">
                <prism language="html" :lineNumbers="true" :readonly="true" :code="html"></prism>
              </el-tab-pane>
              <el-tab-pane label="CSS">
                <prism language="css" :lineNumbers="true" :readonly="true" :code="css"></prism>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </div>
      </el-col>
    </el-row>

  </app-page>
</template>

<script>
  import AppPage from '@/components/AppPage'

  import html from '@/content/atoms/forms/html-markup.html'
  import css from '!!raw-loader!@/assets/scss/stg-design/atoms/_forms.scss'

  export default {
    layout: 'page-layout',
    components: {
      'app-page': AppPage,
    },
    head () {
      return {
        title: 'Forms | Atoms',
      }
    },
    data() {
      return {
        html,
        css
      }
    }
  }
</script>