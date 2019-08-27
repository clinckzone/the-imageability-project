var gulp = require("gulp");
var stylus = require("gulp-stylus");

gulp.task("styles", function() {
  return gulp.src("./styles/*.styl")
      .pipe(stylus())
      .pipe(gulp.dest("./css/"));
});

gulp.task("compile", function() {
  gulp.watch("./styles/*.styl", gulp.series("styles"));
  return
});