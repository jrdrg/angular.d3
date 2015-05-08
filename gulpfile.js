var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver')
var less = require('gulp-less');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');


var vendorFiles = [
	'bower_components/angular/angular.min.js*(.map)',
	'bower_components/angular-ui-router/release/angular-ui-router.min.js',
	'bower_components/d3/d3.min.js'
];

var appFiles = [
	'src/application/app.js',
	'src/application/**/*.js'
];


/**
 * Build minified/non-minified versions of the d3 directives
 */
gulp.task('lib-scripts',
	['jshint'],
	function () {
		return gulp.src('src/directives/**/*.js')
			.pipe(concat('angular-d3.js'))
			.pipe(gulp.dest('build/dist'))
			.pipe(uglify())
			.pipe(rename('angular-d3.min.js'))
			.pipe(gulp.dest('build/dist'));
	});
	
gulp.task('jshint',
	function () {
		return gulp.src('src/directives/**/*.js')
			.pipe(jshint())
			.pipe(jshint.reporter(stylish));
	});

/**
 * Build the test code to display the directives
 */
gulp.task('scripts',
	['lib-scripts'],
	function () {
		return gulp.src(appFiles)
			.pipe(concat('application.js'))
			.pipe(gulp.dest('build/'));
	});

gulp.task('css',
	function() {
		return gulp.src('src/css/**/*.css')
			.pipe(concat('styles.css'))
			.pipe(gulp.dest('build'));
	});

/**
 * Copy any vendor scripts to build/vendor
 */
gulp.task('vendor-scripts',
	function () {
		return gulp.src(vendorFiles)
			.pipe(gulp.dest('build/vendor'));
	});


/**
 * Build everything
 */
gulp.task('default',
	['scripts', 'vendor-scripts']);
	
	
gulp.task('watch',
	function() {
		gulp.watch('src/**/*.js', ['scripts']);
		gulp.watch('src/css/**/*.css', ['css']);
	});


/**
 * Run a local webserver for development
 */
gulp.task('webserver',
	function () {
		return gulp.src('.')
			.pipe(webserver({
				host: 'localhost',
				port: 8001,
				open: true
			}));
	});