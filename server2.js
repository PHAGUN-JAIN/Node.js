var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
  console.log('request was made:'+ req.url);
  if(req.url ==='/home' || req.url ==='/'){
    res.writeHead(200,{'Content-Type':'Text/html'});
    fs.createReadStream(__dirname + '/index.html','utf-8').pipe(res);
  }
});

  server.listen(3000,'127.0.0.1');
  console.log('listening tot port 3000');
