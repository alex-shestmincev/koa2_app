var mongoose = require('mongoose');
var config = require('config');
mongoose.connect(config.mongoose.uri, config.mongoose.options);

mongoose.connection.on('error', console.log);
mongoose.connection.on('connected', function(){
    console.log("mongoose connected");
});
mongoose.connection.on('disconnected', function(){
    console.log("mongoose disconnected");
});

exports.mongoose = mongoose;