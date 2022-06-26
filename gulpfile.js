const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const prefix = require('autoprefixer');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

const paths = {
    style: {
        src: 'src/scss/**/*.scss',
        dest: 'dist'
    },
    script: {
        src: 'src/js/**/*.js',
        dest: 'dist'
    }
}

function styleTask() {
    return src(paths.style.src, { sourcemaps: true })
        .pipe(sass())
        .pipe(postcss([prefix(), cssnano()]))
        .pipe(dest(paths.style.dest, { sourcemaps: './' }));
}

function scriptTask() {
    return src(paths.script.src, { sourcemaps: true })
        .pipe(concat('main.js'))
        .pipe(terser())
        .pipe(dest(paths.script.dest, { sourcemaps: './' }));
}

function browserServe(callback) {
    browserSync.init({
        server: {
            baseDir: './'
        }
    }); 
    callback();
}

function browserReload(callback) {
    browserSync.reload();
    callback();
}

function watchTask() {
    watch('*.html', browserReload);
    watch(paths.style.src, series(styleTask, browserReload));
    watch(paths.script.src, series(scriptTask, browserReload));
}

exports.default = series(
    styleTask,
    scriptTask,
    browserServe,
    watchTask
);