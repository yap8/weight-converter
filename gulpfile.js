const gulp = require('gulp'),
			sass = require('gulp-sass'),
			postcss = require('gulp-postcss'),
			autoprefixer = require('autoprefixer'),
			cssnano = require('cssnano'),
			browserSync = require('browser-sync').create(),
			uglify = require('gulp-uglify'),
			babel = require('gulp-babel'),
			del = require('del')

// Functions
// Misc
const serve = () => {
  browserSync.init({
    server: {
      baseDir: "src/"
    }
  })
}

const clean = () =>
	del('dist')

// Development
const html = () =>
	gulp.src('src/**/*.html')

const css = () =>
	gulp.src('src/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.stream())

const js = () =>
	gulp.src('src/js/**/*.js')
		.pipe(browserSync.stream())

const watch = () => {
	serve()
	gulp.watch('src/**/*.html', html).on('change', browserSync.reload)
	gulp.watch('src/scss/**/*.scss', css)
	gulp.watch('src/js/**/*.js', js)
}

// Production tasks
const buildHtml = () =>
	gulp.src('src/**/*.html')
		.pipe(gulp.dest('dist'))

const buildJs = () =>
	gulp.src('src/js/script.js')
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(uglify({
			toplevel: true
		}))
		.pipe(gulp.dest('dist/js'))

const buildCss = () => {
	const plugins = [
		autoprefixer({
			cascase: false
		}),
		cssnano()
	]
	return gulp.src('src/css/**/*.css')
		.pipe(postcss(plugins))
		.pipe(gulp.dest('dist/css'))
}

gulp.task('html', html)
gulp.task('css', css)
gulp.task('js', js)
gulp.task('clean', clean)
gulp.task('watch', watch)
// Production
gulp.task('build:html', buildHtml)
gulp.task('build:js', buildJs)
gulp.task('build:css', buildCss)

// Combined tasks
gulp.task('start', gulp.series(gulp.parallel('html', 'css', 'js'), 'watch'))
gulp.task('build', gulp.series('clean', gulp.parallel('build:html', 'build:js', 'build:css')))
gulp.task('default', gulp.series('start'))
