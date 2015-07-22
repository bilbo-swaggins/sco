var gulp = require('gulp');
    less = require('gulp-less');
    path = require('path');
    watchLess = require('gulp-watch-less');

// Less task
gulp.task('less', function(){
  return gulp.src('./less/main.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/css'))
});

gulp.task('watch-less', function(){
  gulp.watch('./less/*.less', ['less']);
});

gulp.task('default', ['less','watch-less']);
