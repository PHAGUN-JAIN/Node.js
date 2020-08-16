var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
  console.log('request was made:'+ req.url);
  if(req.url ==='/home' || req.url ==='/'){
    res.writeHead(200,{'Content-Type':'Text/html'});
    fs.createReadStream(__dirname + '/index.html','utf-8').pipe(res);
  }else if (req.url === '/contact') {
      res.writeHead(200,{'Content-Type':'Text/html'});
      fs.createReadStream(__dirname + '/Contact.html','utf-8').pipe(res);
  }else if (req.url==='/api/ninjas') {
    var ninjas = [{name:'james',age:22},{name:'ryu',age:32}]
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(ninjas));
  }
 });

  server.listen(3000,'127.0.0.1');
  console.log('listening tot port 3000');
