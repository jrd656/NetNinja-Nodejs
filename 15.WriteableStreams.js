//in app.js on NetNinja

var http = require('http');
var fs = require('fs');

var myReadSteam = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt', 'utf8');

myReadSteam.on('data', function(chunk){
console.log('new chunk received: ');
myWriteStream.write(chunk);
});