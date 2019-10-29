const { src, dest, parallel } = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const debug = require('gulp-debug')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const sassVariables = require('gulp-sass-variables')


function buildCSS() {
  return (
    src("./assets/scss/stg-design/**/*.scss")
      .pipe(debug())
      .pipe(sassVariables({
        $fontsPath: '../fonts'
      }))
      .pipe(sass())
      .on("error", sass.logError)
      .pipe(postcss([ autoprefixer() ]))
      .pipe(dest('./dist/css'))
      .pipe(rename('stg-design.min.css'))
      .pipe(postcss([ cssnano() ]))
      .pipe(dest('./dist/css'))
  )
}

function buildJS() {
  const jsFiles = [
    './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
    './static/js/vendor/*.js',
    './static/js/password-switch.js',
    './static/js/select-box.js',
    './static/js/plugins.js'
  ]
  const jsDest = './dist/js'

  return (
    src(jsFiles)
      .pipe(debug())
      .pipe(concat('stg-design.js'))
      .pipe(dest(jsDest))
      .pipe(rename('stg-design.min.js'))
      .pipe(uglify())
      .pipe(dest(jsDest))
  )
}

exports.buildCSS = buildCSS
exports.buildJS = buildJS
exports.build = parallel(buildCSS, buildJS)