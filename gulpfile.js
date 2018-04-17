const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const livereload = require('gulp-livereload');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const open = require('gulp-open');

var jsSource='./source/js';
var jsDest='./public/js';

gulp.task('sass', function() {
  return gulp.src('./source/css/**/*.scss')
    .pipe(sass({}))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

gulp.task('watch', () => {
  gulp.watch('./source/css/**/*.scss', ['sass']);
});

gulp.task('app', () => {
  var options = {
    uri: 'http://localhost:3000/dashboard'
  };

  gulp.src('./')
  .pipe(open(options));
});

gulp.task('develop', () => {
  livereload.listen();
  nodemon({
    script: 'bin/www',
    ext: 'js ejs coffee',
    stdout: false
  }).on('readable', function () {
    this.stdout.on('data', (chunk) => {
      if (/^Express server listening on port/.test(chunk)) {
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('default', [
  'sass',
  'app',
  'develop',
  'watch'
]);
