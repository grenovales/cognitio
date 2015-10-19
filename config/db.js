var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/node-modular');

var db = mongoose.connection;
db.on('error', function(err){ 
	console.log('Connection error!', err);
});

db.on('open', function(){
	console.log('Success open connection.');
});

db.on('connected', function(){
	console.log('Success connection.');
});

db.on('disconnected', function(err){
	console.log('Goodbye');
});



module.exports = db;