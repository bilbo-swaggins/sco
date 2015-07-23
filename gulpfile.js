var gulp = require('gulp');
    less = require('gulp-less');
    connect = require('gulp-connect'),

//Server
gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

//Watch HTML
gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

// Less task
gulp.task('less', function(){
  gulp.src('./less/main.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/css'))
    .pipe(connect.reload());
});

//Watch Task
gulp.task('watch', function(){
  gulp.watch(['less/*.less'], ['less']);
  gulp.watch(['./*.html'], ['html']);
});

gulp.task('default', ['connect','less', 'html', 'watch']);
