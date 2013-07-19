var fs = require('fs'),
	http = require('http'),
	express = require('express');

// HTTP Server Configuration

var app = express();

app.configure(function(){
	app.use(express.bodyParser());
	app.use(app.router);
	app.use(express.static(__dirname + '/public'));	
});

app.configure('development', function(){
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
	app.use(express.errorHandler());
});

server = http.createServer(app);
server.listen(5000);
