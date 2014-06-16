var gulp       = require('gulp'),
    browserify = require('gulp-browserify'),
    clean      = require('gulp-clean'),
    htmlMin    = require('gulp-minify-html'),
    minifyCSS  = require('gulp-minify-css'),
    rename     = require('gulp-rename'),
    stylus     = require('gulp-stylus'),
    uglify     = require('gulp-uglify'),
    watch      = require('gulp-watch'),
    nib        = require('nib');

var prodScript = [
  'clean-prod',
  'copy-img-icons',
  'bundle-prod',
  'styles-prod',
  'html-prod'
];

gulp.task('default', ['bundle', 'styles']);

gulp.task('watch', function() {
  gulp.src('./app/**')
      .pipe(watch(function (files) {
        bundleScripts();
        styles();
      }));
});

gulp.task('dist', prodScript);

gulp.task('bundle', bundleScripts);

gulp.task('styles', styles);

gulp.task('clean-prod', function() {
  console.log('[ clean public folder ]');
  gulp.src(['public/*'], {read:false})
      .pipe(clean());
});

gulp.task('copy-img-icons', function () {
  console.log('[ copy images and font icons ]');

  gulp.src('./app/fonts/*.*')
      .pipe(gulp.dest('./public/fonts'));

  gulp.src('./app/img/*.*')
      .pipe(gulp.dest('./public/img'));
});

gulp.task('bundle-prod', function() {
  console.log('[ javascript bundle creation ]');
  gulp.src('./app/backbone/app.js')
      .pipe(browserify({
        insertGlobals : true 
      }))
      .pipe(uglify({
        preserveComments : 'all'
      }))
      .pipe(rename('index.js'))
      .pipe(gulp.dest('./public/js/'))
});

gulp.task('styles-prod', function () {
  console.log('[ css styles creation ]');
  gulp.src('./app/stylus/index.styl')
    .pipe(stylus({
      use : [nib()],
      error : true
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('html-prod', function () {
  console.log('[ html minification ]');
  gulp.src('./app/index.html')
    .pipe(htmlMin())
    .pipe(gulp.dest('./public/'));
});

function bundleScripts() {
  console.log('[ javascript bundle creation ]');
  gulp.src('./app/backbone/app.js')
      .pipe(
        browserify({ insertGlobals : true })
      )
      .pipe(rename('index.js'))
      .pipe(gulp.dest('./app/js'))
};

function styles() {
  console.log('[ css styles creation ]');
  gulp.src('./app/stylus/index.styl')
    .pipe(
      stylus({
        use : [nib()],
        error : true
      })
    )
    .pipe(gulp.dest('./app/css'));
};