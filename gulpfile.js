"use strict";

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');	
var rename = require('gulp-rename');

/*
 * Lint js files
 */
gulp.task('lint', function() {
	var options = {};
	return gulp.src('src/jquery.rimodal.js')
		.pipe(jshint(options));
});	

/*
 * Minify js
 */
gulp.task('build-js', function() {
	// Minify and copy src files
	var options = {
		preserveComments: 'some'
	};
	return gulp.src('src/jquery.rimodal.js')
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify(options))
		.pipe(gulp.dest('.'));
});

/*
 * Minify css
 */
gulp.task('build-css', function() {
	// Minify and copy src files
	return gulp.src('src/jquery.rimodal.css')
		.pipe(rename({suffix: '.min'}))
		.pipe(minifyCSS())
		.pipe(gulp.dest('.'));
});

/*
 * Lint and minify
 */
gulp.task('build', ['lint', 'build-js', 'build-css']);
