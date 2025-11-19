const { src, dest, watch, parallel, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

// SCSS → CSS
function styles() {
    return src('src/scss/style.scss')  // aniq fayl
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(dest('dist/css'))
        .pipe(browserSync.stream());
}

// JS
function scripts() {
    return src('src/js/main.js')
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(dest('dist/js'))
        .pipe(browserSync.stream());
}

// BrowserSync + Watcher
function serve(done) {
    browserSync.init({
        server: "./",
        port: 3000,
        open: true
    });

    // TO‘G‘RILANGAN QATORLAR:
    watch('src/scss/style.scss', styles);        // nuqta yo‘q!
    watch('src/scss/**/*.scss', styles);
    watch('src/js/main.js', scripts);
    watch('*.html').on('change', browserSync.reload);

    done();
}

// ENDI TO‘G‘RI ISHGA TUSHADI:
exports.default = series(parallel(styles, scripts), serve);
// bu eng muhimi — series ishlatish kerak, parallel emas!