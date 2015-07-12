var exec = require('child_process').exec;
var mongoose = require('mongoose');

var Schema   = mongoose.Schema;

var ContentSchema = new Schema({
    title:  String,
    author: String,
    day: String,
    file: String,
});

mongoose.model('contents', ContentSchema);
Contents = mongoose.model('contents');

var init = function(callback){
    mongoose.connect('mongodb://localhost/sample_db',function(){
        console.log('db drop');
        mongoose.connection.db.dropDatabase();
        callback();
    });
}

exports.start = function(callback){
    var command = "mongod --fork --dbpath ./app/db/ --logpath ./app/log/mongo.log";
    console.log("mongod exec start");
    exec(command,function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        if (err !== null) {
            console.log('exec error: ' + err);
        } else {
            init(callback);
        }
    });
};

exports.stop = function(){
    var command = 'mongo sample_db --eval "Contents.shutdownServer();"'
    console.log("mongod exec stop");
    exec(command,function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        if (err !== null) {
            console.log('exec error: ' + err);
        }
    });
};

exports.update = function(file, header,callback){
    console.log("mongo update");
    console.log(header);

    var content = new Contents();
    content.title = header.meta.title;
    content.author = header.meta.author;
    content.day = header.meta.day;
    content.file = file.path;

    content.save(callback);
};

exports.query = function(callback){
    Contents.find({},callback);
}

