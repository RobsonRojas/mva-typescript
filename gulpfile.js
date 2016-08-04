var gulp = require('gulp');
var tsc = require('gulp-typescript');
var nodemon = require('gulp-nodemon');

gulp.task('default', ['compiler', 'watch', 'reload']);

gulp.task('compiler', function () {
    var tsconfig = tsc.createProject('tsconfig.json');
    return gulp.src('*.ts')
                .pipe(tsc(tsconfig))
                .pipe(gulp.dest('lib'));
});

gulp.task('watch', function () {
    return gulp.watch('*.ts', ['compiler']);
});

gulp.task('reload', function () {
    nodemon({script: 'lib/index.js'});
})