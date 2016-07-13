const gulp = require('gulp')
const rename = require('gulp-rename')

const less = require('gulp-less')
const minifyCss = require('gulp-minify-css')

const uglify = require('gulp-uglify')

gulp.task('less', function() {
  gulp.src(['src/style/**/main.less'])
    .pipe(less())
    .pipe(gulp.dest('dist/css'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/css'))
})

gulp.task('js',function(){

})

gulp.task('default',function(){
  gulp.watch('src/style/**/*.less',['less'])
  gulp.watch('src/js/**/*.js',['js'])
})