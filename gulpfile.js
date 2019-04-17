const gulp = require('gulp');
const babel = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const notify = require('gulp-notify');
const sass = require('gulp-sass');	
const autoprefixer = require('gulp-autoprefixer');
// const plumber = require('gulp-plumber');
const concat = require('gulp-concat');
const historyApiFallback = require('connect-history-api-fallback');



// const browserify = require('browserify');
// const source = require('vinyl-source-stream');
// const buffer = require('vinyl-buffer');


function styles() {
	return gulp.src('./dev/styles/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer('last 2 versions')) //is 'last 2 versions' enough?
		.pipe(concat('style.css'))
		.pipe(gulp.dest('./public/styles/'))
		.pipe(reload({stream:true}));
};

function scripts() {
	return browserify('dev/scripts/index.js', {debug: true})
		.transform('babelify', {
		sourceMaps: true,
		presets: ['@babel/preset-env', '@babel/preset-react']
		})
		.bundle()
		.on('error',notify.onError({
			message: "Error: <%= error.message %>",
			title: 'Error in JS 💀'
		}))
		.pipe(source('index.js'))
		.pipe(buffer())
		.pipe(gulp.dest('public/scripts'))
		.pipe(reload({stream:true}));
};

function watch() {
    gulp.watch('./dev/styles/**/*.scss', gulp.series(styles));
    gulp.watch('./dev/scripts/index.js', gulp.series(scripts));
	gulp.watch('*html', reload);
};

function bs() {
    browserSync.init({
        server: {
            baseDir: './'
        },
        middleware: [historyApiFallback()]
	})
};

gulp.task('default', gulp.parallel(bs, scripts, styles, watch))