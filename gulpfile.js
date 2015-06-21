var gulp = require('gulp');
var gutil = require('gulp-util');
var webserver = require('gulp-webserver');
var watch = require("gulp-watch");
var meta = require('meta-marked');
var del = require('del');
var through = require('through2');
var mongo = require('./app/js/mongo');

var metaParse = function (options) {
    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            cb(null, file);
            return;
        }

        if (file.isStream()) {
            cb(new gutil.PluginError('gulp-mata-markdown', 'Streaming not supported'));
            return;
        }

        var result = meta(file.contents.toString());
        file.contents = new Buffer(result.html);
        file.path = gutil.replaceExtension(file.path, '.html');
        mongo.update(file,result);
        cb(null, file);
    });
};

var initFile = function (options) {
    return through.obj(function (file, enc, cb) {
        changeFile(file);
        cb(null, file);
    });
};

var addFile = function (file){
    return gulp.src(file.path)
        .pipe(metaParse())
        .pipe(gulp.dest('./app/public/contents'));
}

var removeFile = function (file){
    var delfile = file.path.replace("app/markdown","app/public/contents");
    delfile = gutil.replaceExtension(delfile, '.html');
    del(delfile);
}

var changeFile = function (file){
    var delfile = file.path.replace("app/markdown","app/public/contents");
    delfile = delfile.replace(".md",".html");
    del(delfile);

    return gulp.src(file.path)
        .pipe(metaParse())
        .pipe(gulp.dest('./app/public/contents'));
}

var changeFileStatus =  function(file){
    console.log(file.event);
    console.log(file);

    switch (file.event){
        case "add":
            addFile(file);
            break;
        case "unlink":
            removeFile(file);
            break;
        case "change":
            changeFile(file);
            break;
    }
};

gulp.task('webserver', function() {
    gulp.src('app/public')
        .pipe(webserver({
            livereload: true,
            host: "0.0.0.0"
        }));
});

gulp.task('init', function(callback) {
    mongo.start(callback);
});

gulp.task('watch', ['init'], function(){
    gulp.src('./app/markdown/*.md')
        .pipe(initFile());

    watch(['./app/markdown/*.md'], function(file){
        changeFileStatus(file);
    });
});

gulp.task('default', ['webserver','watch']);
