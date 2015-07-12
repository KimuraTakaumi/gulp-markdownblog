
var through = require('through2');
var meta = require('meta-marked');

module.exports = function (options) {
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
    });
};