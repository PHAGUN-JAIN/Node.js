 var events = require('events');
 //we can create our own events in node

 var myEmitter = new events.EventEmitter();
 myEmitter.on('someEvent',function(mssg){
   console.log(mssg);
 });
 myEmitter.emit('someEvent','the event was emitted');
