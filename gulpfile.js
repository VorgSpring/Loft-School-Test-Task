"use strict";

var gulp =require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var jade = require("gulp-jade");
var server = require("browser-sync");

gulp.task("style", function () {
    gulp.src("sass/style.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer({browsers: [
                "last 1 version",
                "last 2 Chrome versions",
                "last 2 Firefox versions",
                "last 2 Opera versions",
                "last 2 Edge versions"
            ]})
        ]))
        .pipe(gulp.dest("css"))
        .pipe(server.reload({stream: true}));
});

gulp.task("jade", function(){
    gulp.src("./jade/index.jade")
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest("./"))
});

gulp.task("serve", ["style"], function() {
    server.init({
        server: "."
    });
    gulp.watch("sass/**/*.scss", ["style"]);
    gulp.watch("jade/**/*.jade",["jade"]);
    gulp.watch("*.html")
        .on("change", server.reload);
});
