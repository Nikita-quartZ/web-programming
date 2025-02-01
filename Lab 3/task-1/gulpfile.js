const gulp = require("gulp");
const browserSync = require("browser-sync").create();

gulp.task("one", function (callback) {
  console.log("one");
  callback();
});

gulp.task("two", function (callback) {
  console.log("two");
  callback();
});

gulp.task("browserSync", function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });

  gulp.watch("*.html").on("change", browserSync.reload);
});

// gulp.task("default", gulp.series("browserSync"));
gulp.task("default", gulp.series("one", "two"));
// gulp.task("default", gulp.parallel("one", "two"));
