var gulp = require('gulp'),
    less = require('gulp-less'),
    mincss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    ugnify = require('gulp-uglify'),
    rename = require('gulp-rename');

// js
gulp.task('ds-js',function() {

    gulp.src("./src/js/*.js")
    .pipe(rename(function (path) {
        path.basename += "-debug";
    }))
    .pipe(gulp.dest("./dist/js/"))
    .pipe(jshint())
    .pipe(ugnify().on('error',function(e) {
        console.error(e.message, e.lineNumber);
        this.emit('end');
    }))
    .pipe(rename(function (path) {
        path.basename = path.basename.split('-debug')[0];
    }))
    .pipe(gulp.dest("./dist/js/"));
});

gulp.task('ss-js',function() {

    gulp.src("./src/js/*.js")
    .pipe(rename(function (path) {
        path.basename += "-debug";
    }))
    .pipe(gulp.dest("./"))
    .pipe(jshint())
    .pipe(ugnify().on('error',function(e) {
        console.error(e.message, e.lineNumber);
        this.emit('end');
    }))
    .pipe(rename(function (path) {
        path.basename = path.basename.split('-debug')[0];
    }))
    .pipe(gulp.dest("./"));
});

gulp.task('ds-css',function() {
    gulp.src('./src/css/*.less')
    .pipe(less().on('error',function(e) {
        console.error(e.message);
        this.emit('end');
    }))
    .pipe(rename(function (path) {
        path.basename += "-debug";
    }))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(mincss())
    .pipe(rename(function (path) {
        path.basename = path.basename.split('-debug')[0];
    }))
    .pipe(gulp.dest('./dist/css/'));
});
// watch-all
gulp.task('watch', function() {
    gulp.watch('./src/css/*.less', ['ds-css']);
    gulp.watch('./src/js/*.js',['ds-js']);
});
