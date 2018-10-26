var gulp = require("gulp"),
    sass = require("gulp-sass"),
    browserSync = require('browser-sync'),
    server = require('gulp-server-livereload');


/* watch */
gulp.task("watch", function () {
  gulp.watch("./scss/**/*", ["sass"]);
});


/* sass  */
gulp.task("sass", function () {
  gulp.src("./scss/**/*.scss")
    .pipe(sass().on("error", sass))
    .pipe(gulp.dest("./app/"));
});


/* browser-sync */
gulp.task('browser-sync', function() {
  gulp.src('').pipe(server({
      livereload: true,
      defaultFile: './app/index.html',
      directoryListing: true,
      open: true
    }));
});


/* Run */
gulp.task('default', ['watch', 'browser-sync']);
