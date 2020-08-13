var counter = function(arr){
  return 'there are ' + arr.length + ' elements in this array';
};

var adder = function(a,b){
  return `the sum of the two numbers is ${a+b}`;
};
 var pi = 3.14;
//module,export is just an empty object we can either use that directly or assign it different properties
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;
