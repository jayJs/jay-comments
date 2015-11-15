var gulp = require('gulp');

var lr;

var EXPRESS_ROOT = __dirname;

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

function startLivereload() {
  lr = require('tiny-lr')();
  lr.listen(35729);
}

function notifyLivereload(event) {

  var fileName = require('path').relative(EXPRESS_ROOT, event.path);

  lr.changed({
    body: {
      files: [fileName]
    }
  });
}

gulp.task('default', function () {
  // minify and uglify the js dependencies:
  gulp.src([
    './public/b/signals/dist/signals.min.js',
    './public/b/hasher/dist/js/hasher.min.js',
    './public/b/crossroads/dist/crossroads.min.js',
    './public/b/html5shiv/dist/html5shiv.min.js',
    './public/b/respond/dest/respond.min.js',
    './public/b/bootstrap/dist/js/bootstrap.min.js',
    './public/b/momentjs/min/moment.min.js',
    './public/b/trumbowyg/dist/trumbowyg.min.js',
    './public/b/jay/dist/jay.js'
    ])
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/dist/'));

  startLivereload();
  gulp.watch('./public/**/*.*', notifyLivereload);
});
