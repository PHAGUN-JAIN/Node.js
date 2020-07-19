
 // we need a library for the server set up http
 
  const http = require('http')
  const port = 3000  //the port we are going to use
  
  const server = http.createServer(function(req,res){
         res.write('Hello Node')
         res.end()
           })
//setting up server

 server.listen(port, function(error){
     if (error) {
           console.log('Something went wrong', error)
            } else {
           console.log('Server is listening on port' + port)
                }
           })
