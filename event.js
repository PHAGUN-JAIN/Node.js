 var events = require('events');     //referring to the core module with the help of events variable
 var util = require('util');
                                     //we can create our own events in node
var person = function(name){
  this.name = name;                 //this is a object constructor (a function which gives the value )
};

util.inherits(person,events.EventEmitter);//util is core module which can enable any object to inherit properties of other modules
//the above written line of code will allow every object created from person (constructor) to have a user defined event
var james = new person('james');
var mary = new person('mary');
var ryu = new person('ryu');
                           //all these are objects which reffer to the events module wih reference of util modukes interince functionality


/*

 var myEmitter = new events.EventEmitter();             //creating new object for the referred module
 myEmitter.on('someEvent',function(mssg){               //creating my event
   console.log(mssg);
 });
 myEmitter.emit('someEvent','the event was emitted');

*/
