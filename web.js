var fs = require('fs'),
	express = require('express');

var index = fs.readFileSync('index.html');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(index.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
