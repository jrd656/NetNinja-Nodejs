//in app.js on NetNinja

/* This was the initial part of the tutorial:
var http = require('http');
var fs = require('fs');

var myReadSteam = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt', 'utf8');

myReadSteam.pipe(myWriteStream);
*/


/* This was the previous method to write a file with utf8 content:
myReadSteam.on('data', function(chunk){
console.log('new chunk received: ');
myWriteStream.write(chunk);
});
*/

/* This was the code that we've taken from tutorial #12
var http = require('http');

var server = http.createServer(function(req,res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey ninjas');
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening on port 3000');
*/

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});

    var myReadSteam = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
    myReadSteam.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening on port 3000');