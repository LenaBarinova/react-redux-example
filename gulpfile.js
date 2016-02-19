var gulp = require('gulp');
var plug = require('gulp-load-plugins')({ lazy: true });

var browserify = require('browserify');
var babelify = require('babelify');
var babel = require('babel-core/register');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var del = require('del');

gulp.task('build', ['copy-files'], function () {
  return browserify({
    extensions: ['.jsx', '.js'],
    entries: './src/app.jsx',
  })
    .transform(babelify.configure({ ignore: /(node_modules)/ }))
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(plug.envify(['production']))
    .pipe(plug.uglify())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('clean', function () {
  return del('./dist/');
});

gulp.task('copy-files', ['clean'], function() {
  return gulp.src(['./src/index.html', './favicon.ico'])
    .pipe(gulp.dest('./dist/'));
});

gulp.task('test', function () {
  return gulp.src('./test/**/*.js', { read: false })
    .pipe(plug.mocha({
      compilers: {
        js: babel
      }
    }));
});