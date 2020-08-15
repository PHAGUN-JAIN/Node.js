var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname +'/Streams.txt', 'utf-8');
var myWriteStream =fs.createWriteStream(__dirname + '/writeme.txt');

myReadStream.on('data', function(chunk){
  console.log('new chunk received');
  myWriteStream.write(chunk);
});
