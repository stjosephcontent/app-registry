var gulp = require("gulp"),
   groc = require("gulp-groc"),
   clean = require("gulp-clean");

// clean doc 
gulp.task("cleanDoc", function () {
   return gulp.src(["jsdoc"], {
      read: false
   }).pipe(clean());
});

// gulp-groc 
gulp.task("doc", ["cleanDoc"], function () {
   return gulp
        .src("./api/**/*.js")
        .pipe(groc({
      out: "jsdoc"
   }));
});

gulp.task("default", function () {
  // place code for your default task here
});