//on app.js on NetNinja tutorial
//open the Developer Tools viewer on your browser, click on Network and then enter the website localhost:3000 into url bar. You can then view the headers, etc for each request.

var http = require('http');

var server = http.createServer(function(req,res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey ninjas');
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening on port 3000');