const gulp = require("gulp")
const sass = require("gulp-sass")
const postcss = require("gulp-postcss")
const autoprefixer = require("autoprefixer")
const cssnano = require("cssnano")
const sourcemaps = require("gulp-sourcemaps")
const debug = require('gulp-debug')

function style() {
  return (
    gulp
      .src("./assets/scss/stg-design/**/*.scss")
      .pipe(debug())
      // Initialize sourcemaps before compilation starts
      .pipe(sourcemaps.init())
      .pipe(sass())
      .on("error", sass.logError)
      // Use postcss with autoprefixer and compress the compiled file using cssnano
      .pipe(postcss([autoprefixer(), cssnano()]))
      // Now add/write the sourcemaps
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./build'))
  )
}

exports.style = style