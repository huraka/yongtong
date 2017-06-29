var gulp = require('gulp');
var gulphtml = require('gulp-minify-html');
var gulpcss = require('gulp-clean-css');


gulp.task('myhtml',function(){
	gulp.src('*.html')
	.pipe(gulphtml())
	.pipe(gulp.dest('haha'))
})

gulp.task('mycss',function(){
	gulp.src('css/*.css')
	.pipe(gulpcss())
	.pipe(gulp.dest('haha/css'))
})
gulp.task('default',['myhtml','mycss'],function(){
	console.log('哈哈');
})