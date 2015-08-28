var gulp = require("gulp"),
   yaml = require("gulp-yaml");


gulp.task("default", function () {
   gulp.src("./api/swagger/swagger.yaml")
  .pipe(yaml({ "space": 3, "safe": true }))
  .pipe(gulp.dest("./api/swagger"))
});