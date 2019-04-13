const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const historyApiFallback = require('connect-history-api-fallback'); //necessary?

gulp.task('styles', () => {
    return gulp.src('./dev/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions')) //is 'last 2 versions' enough?
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./public/styles/'))
        // .pipe(reload({stream:true}));
});
gulp.task('scripts', () => {
    gulp.src('.dev/scripts/index.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('./public/scripts'))
        .pipe(reload({stream: true}));
});
gulp.task('watch', () => {
    gulp.watch('./dev/styles/**/*.scss', gulp.series('styles'));
    gulp.watch('./dev/scripts/index.js', gulp.series('scripts')); //will it not reload if I edit other js files?
    gulp.watch('*html', reload);
});
gulp.task('browser-sync', () => {
    // browserSync.init({
	// 	server: ‘.’
	// })
    browserSync.init({
        server: {
            baseDir: './'
        },
        middleware: [historyApiFallback()] //necessary?
    })
})
gulp.task('default', gulp.series('browser-sync', 'styles', 'scripts', 'watch'));
