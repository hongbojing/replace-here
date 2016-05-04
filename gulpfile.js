// load the plugins
var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var nodemon = require('gulp-nodemon');
// var webserver = require('gulp-webserver');

// ********************
// #1 Compiling LESS to CSS then minify it then rename the file
// >>> npm install gulp-less --save-dev
// >>> npm install gulp-minify-css gulp-rename --save-dev
// ********************
// define a task called 'css', you can run 'gulp css' to launch this task
gulp.task('css', function () {
    // grab the less file, process the LESS, save to style.css
    return gulp.src(['public/ext/libs/bootstrap/less/bootstrap.less', 'public/less/styles.less'])
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(concat('main.css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public/ext/css'));
});

// ********************
// #2 Check the javascript code to make sure it has no errors
// >>> npm install gulp-jshint --save-dev
// ********************
// task for linting js files, you can run 'gulp js' to launch this task
gulp.task('js', function () {
    return gulp.src(['public/ext/libs/*/*.min.js'])
        .pipe(concat('everything.js'))
        .pipe(gulp.dest('public/js'));
});

// ********************
// #3 Minifying, and Concatenating JS code
// >>> npm install gulp-uglify gulp-concat --save-dev
// NOT NOT NOT in use in this project
// ********************
// task to lint, minify, and concat frontend files, you can run 'gulp scripts' to launch this task
// gulp.task('scripts', function () {
//     return gulp.src(['public/js/*.js', 'public/js/**/*.js'])
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'))
//         .pipe(concat('everything.js'))
//         .pipe(uglify())
//         .pipe(rename({suffix: '.min'}))
//         .pipe(gulp.dest('public/js'));
// });

// ********************
// #4 Minifying AngularJS
// If you don't want your angular code to be broken when being minifeid, you have to use a certain way to write the code:
// angular.module('myApp', ['ngRoute'])
//
// .config([
//    '$routeProvider',
//    '$locationProvider',
//    function($routeProvider, $locationProvider) {
//    //code here
//    }
//  ])
//
//  .controller('mainController', ['$routeProvider', function($http) {
//    //code here
//   }]);
// >>> npm install gulp-ng-annotate --save-dev
// ********************
// task to lint, minify, and concat frontend angular files, you can run 'gulp angular' to launch this task
gulp.task('angular', function () {
    return gulp.src(['public/js/*.js', 'public/js/**/*.js'])
        .pipe(ngAnnotate())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public/js'));
});

// ********************
// #5 Watching for changes
// >>> npm install gulp-watch --save-dev
// ********************
// You can run 'gulp watch' to launch this task
gulp.task('watch', function () {
    // watch the less file and run the css task
    gulp.watch(['public/less/example.less', 'public/less/style.less'], ['css']);

    // watch js files and run lint and run js and angular tasks
    gulp.watch(['server.js', 'public/js/*.js', 'public/js/**/*.js'], ['js', 'angular']);
});

// ********************
// #6 Starting a Node server
// >>> npm install gulp-nodemon --save-dev
// ********************
gulp.task('nodemon', function () {
    nodemon({
        // defining the starting file
        script: 'server.js',

        // types (extension) of files to watch
        ext: 'js less html'
    })
        .on('start', ['watch'])
        .on('change', ['watch'])
        .on('restart', function () {
            console.log('Restarted!');
        });
});

// ********************
// #7 Using this file to reload the page automatically
// >>> npm install gulp-webserver --save-dev
// ********************
// xxxxx seems that there are conflicts with nodemon and webserver
// gulp.task('webserver', function() {
//   gulp.src('public/app/views/')
//       .pipe(webserver({
//         livereload: true,
//         port: 8080,
//         open: true
//       }));
// });

// the default task is the task that Gulp automatically looks for at first
// gulp.task('default', ['nodemon', 'webserver']);
gulp.task('default', ['nodemon', 'watch', 'angular', 'js']);
