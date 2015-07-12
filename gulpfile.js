var gulp = require('gulp');
var gutil = require('gulp-util');
var webserver = require('gulp-webserver');
var watch = require("gulp-watch");
var meta = require('meta-marked');
var del = require('del');
var through = require('through2');
var mongo = require('./app/js/mongo');
var ejs = require("gulp-ejs");
var fs = require('fs');
var index = {};

gulp.task('webserver', function () {
    gulp.src('app/public')
        .pipe(webserver({
            livereload: true,
            host: "0.0.0.0"
        }));
});

var metaParse = function (options) {
    return through.obj(function (file, enc, cb) {
        console.log(file.path);
        var result = meta(file.contents.toString());
        console.log(result);
        file.contents = new Buffer(result.html);
        var output = {};
        output.file = file;
        output.result = result;
        cb(null,output);
    });
};

var saveDb = function (options) {
    return through.obj(function (stream, enc, cb) {
        console.log(stream.result);
        mongo.update(stream.file, stream.result, function (err) {
            if (err) {
                console.log("error");
            } else {
                console.log("success " + stream.file.path);
            }
            cb(null, stream.file);
        });
    });
};

var saveFile = function (options) {
    return through.obj(function (file, enc, cb) {
        file.path = gutil.replaceExtension(file.path, '.html');
        console.log(file.path);
        cb(null, file);
    });
};

var deleteFile = function (options) {
    return through.obj(function (file, enc, cb) {
        var delfile = file.path.replace("app/markdown","app/public/contents");
        delfile = gutil.replaceExtension(delfile, '.html');
        del(delfile);

        console.log(file.path);
        cb(null, file);
        //mongo.update(stream.file, stream.result, function (err) {
        //    if (err) {
        //        console.log("error");
        //    } else {
        //        console.log("success " + stream.file.path);
        //    }
        //    this.push(stream.file);
        //    cb();
        //});
    });
};

gulp.task('initDb', function (callback) {
    console.log("initDb");
    mongo.start(callback);
});

gulp.task('init', ['initDb'], function () {
    console.log("init");
    return gulp.src('./app/markdown/*.md')
        .pipe(metaParse())
        .pipe(saveDb());
});

gulp.task('createIndex', ['init'], function () {
    console.log("createIndex");
});

gulp.task('watch', ['createIndex'], function () {
    console.log("watch");
    watch(['./app/markdown/*.md'], function(file){
        console.log("watch callback");
        switch (file.event){
            case "add":
                gulp.src(file.path)
                    .pipe(metaParse())
                    .pipe(saveDb())
                    .pipe(saveFile())
                    .pipe(gulp.dest('./app/public/contents'));
                break;
            case "unlink":
                gulp.src(file.path)
                    .pipe(deleteFile());
                break;
            case "change":
                gulp.src(file.path)
                    .pipe(deleteFile())
                    .pipe(metaParse())
                    .pipe(saveDb())
                    .pipe(saveFile())
                    .pipe(gulp.dest('./app/public/contents'));
                break;
        }
    });
});

gulp.task('ejs', function() {
    console.log("ejs");
    var json = JSON.parse(fs.readFileSync("./app/config/config.json"));
    json.item = index.item;
    gulp.src(
        ["app/ejs/**/*.ejs",'!' + "app/ejs/**/_*.ejs"]
    )
        .pipe(ejs(json))
        .pipe(gulp.dest('app/public'));
    gulp.watch('app/ejs/**/*.ejs', ['ejs']);
});

gulp.task('default', ['webserver', 'watch', 'ejs']);
