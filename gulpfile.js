var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      port: 8080,
      livereload: true,
      open: 'http://localhost:8080/index.html',
      fallback: 'index.html'
    }));
});

gulp.task('default', ['webserver']);
