/**
 * Main Entry point for app load scatter 
 */
var Scatter = require('scatter');
var scatter = new Scatter({
	log: function(level,message){
		console.log(level + " : " + message);
	}
});

scatter.registerParticle([
	__dirname + '/core'
]);

scatter.load('svc|sequence|initializeApp').then(function(initializeApp){
	return initializeApp();
}).then(function(){
	console.log('App initialized');
});