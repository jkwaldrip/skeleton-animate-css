// Get everything ready-to-go with Gulp JS
var gulp = require('gulp');

var concat = require('gulp-concat');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

// CSS Stuff
gulp.task('minify-css', function() {
  return gulp.src(['css/normalize.css','css/skeleton.css','css/animate.css','css/main.css'])
    .pipe(concat('css/all.css'))
    .pipe(gulp.dest('./'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename('css/all.min.css'))
    .pipe(gulp.dest('./'));
});

// JS Stuff
gulp.task('minify-js', function() {
  return gulp.src('js/main.js')
    .pipe(rename('js/main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./'));
});

gulp.task('lint-js', function() {
  return gulp.src('js/main.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Meta-tasks
gulp.task('css',['minify-css']);
gulp.task('js',['lint-js','minify-js']);

gulp.task('default',['css','js']);

gulp.task('watch', function() {
  gulp.watch('js/main.js','js');
  gulp.watch('css/main.css','css')
});
