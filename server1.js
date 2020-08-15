var http = require('http');
var fs = require('fs');

var server= http.createServer(function(req,res){
  console.log('request was made:' + req.url);
  res.writeHead(200,{'Content-Type':'Text/plain'});
  var myReadStream = fs.createReadStream(__dirname + '/Streams.txt','utf-8');
  myReadStream.pipe(res);   //pipe method woks only for readable stream because directing is possible from sourec and res here is a writable stream
});

server.listen(3000, '127.0.0.1');
console.log('listening to port 3000');
