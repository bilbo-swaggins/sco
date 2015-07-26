var gulp = require('gulp');
    less = require('gulp-less');
    connect = require('gulp-connect'),

// Server
gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

// HTML Task
gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

  // Less Task
gulp.task('less', function(){
  gulp.src('./less/main.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/css'))
    .pipe(connect.reload());
});

// Watch Task
gulp.task('watch', function(){
  gulp.watch(['less/*.less','bower_components/bootstrap/less/*.less'], ['less']);
  gulp.watch(['./*.html'], ['html']);
});


// Gulp Task
gulp.task('default', ['connect','less', 'html', 'watch']);
