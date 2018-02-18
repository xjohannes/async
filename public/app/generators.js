// Generators
var generators = function() {
  
  function bar(y) {
   console.log("BAR",y);
 }
 
 function *foo(x) {
   console.log("INNSIDE 1: pear", yield x);
   console.log("INNSIDE 2: apple", yield 2);
   bar(yield 3);
   return "FINITO";
 }
 // When iterating a generator with a for loop
 // the generator can not receive arguments
 /*var genTo = foo(1);
 for(var elem of genTo) {
   console.log("FOR loop", elem);
 }*/
 
 // When iterating a generator manually the
 // generator can receive arguments
 var gen = foo(1);
 
 console.log("OUTSIDE 1:", gen.next("PEAR"));
 console.log("OUTSIDE 2:", gen.next("APPLE"));
 console.log("OUTSIDE 3:", gen.next("BANANA"));
 console.log("OUTSIDE 4:", gen.next("MANGO"));
 console.log("OUTSIDE 5:", gen.next("ORANGE"));

 /*function *foo() {
   try {
    console.log("FOO",yield 2);
    console.log("FOO",yield 3);
  } 
  catch (err) {
    console.log("Caught in FOO");
  }
    return "foo"; // return value back to `yield*` expression
  }

  function *bar() {

  	try {
  		console.log("BAR",yield 1);
  		var v = yield *foo();
  	}
  	catch (err) {
  		console.log("Caught in BAR", err)
  	}
  	console.log( "v: " + v );
  	console.log("BAR",yield 4);
  }

  var it = bar();

console.log("OUT", it.next("One")); // { value:1, done:false }
console.log("OUT", it.next("Two")); // { value:2, done:false }
console.log("OUT", it.throw("Something went wrong Outside"));//("Tree")); // { value:3, done:false }
console.log("OUT", it.next("Four")); // "v: foo"   { value:4, done:false }
console.log("OUT", it.next("Five")); // { value:undefined, done:true }*/
}
export {generators}