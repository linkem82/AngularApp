var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var server = http.createServer(app);

server.listen(8080);

app.use(express.static(path.resolve('../frontend')));

app.get("/", function(req, res) {
	res.sendfile("index.html");
});


