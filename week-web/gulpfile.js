const gulp = require('gulp');
const gulpsass = require('gulp-sass');
const server = require('gulp-webserver');

//开发
//编译sass
gulp.task('Sass', () => {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(gulpsass())
        .pipe(gulp.dest('./src/css'))
})

//起服务
gulp.task('server', () => {
    return gulp.src('./src')
        .pipe(server({
            port: 8080,
            proxies: [{
                source: '/getfind1',
                target: 'http://localhost:3000/getfind1'
            }]
        }))
})

//监听sass
gulp.task('watch', () => {
    return gulp.watch('./src/scss/**/*.scss', gulp.series('Sass'))
})

gulp.task('dev', gulp.series('Sass', 'server', 'watch'))