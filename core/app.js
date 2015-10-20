/**
 * This is the Cognitio portal
 */
var express = require('express'),
	exphbs = require('express-handlebars'),
	http = require('http'),
	routes = require('./routes/main');

module.exports = function(registerAllRoutes){
	var self = {
		initializeApp: function(){
			// Create an express instance and set a port variable
			var app = express();
			var port = process.env.PORT || 8080;	
			
			// Set handlebars as the templating engine
			app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
			app.set('view engine', 'handlebars');	
			
			// Set /public as our static content dir
			app.use("/", express.static(__dirname + "/public/"));
			
			//register all our routes
			registerAllRoutes(app);
			
			// Fire it up (start our server)
			var server = http.createServer(app).listen(port, function() {
				console.log('Express server listening on port ' + port);
			});							
		}
	}
}

module.exports.__module ={
	args: ['!svc!routes/register'],
	provides: ['initializeApp']
}


