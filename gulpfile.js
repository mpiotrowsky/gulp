var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var sassFiles = 'src/scss/**/*.scss',
    cssDest = 'src/css/';

//one time sass compilation

gulp.task('styles', function () {
    return gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});

// watch for sass changes

gulp.task('styles:watch', function () {
    gulp.watch(sassFiles, ['styles']);
});

// watch files for changes and reload browser

gulp.task('serve', function () {
    browserSync({
        server: {
            baseDir: 'src'
        }
    });
    gulp.watch(['*.html', 'css/**/*.css', 'js/**/*.js'], { cwd: 'src' }, reload);
});
