//Promise
/*var promise = function(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}

var value = promise('http://localhost:3000/secondAsync');

value
	.then(function(data) {
		console.log('SUCCESS ', data )
	})
	.catch(function(err) {
		console.log('ERROR 1', err)
	})
*/
// Error in promises
/*
var errValue = promise('http://localhost:3000/errorResponse');

errValue.catch(function(err) {
	console.log('Error 2', err);
})*/

// Generators
function bar(y) {
	console.log("BAR",y);
}
function *foo(x) {
	console.log("INNSIDE 1: pear", yield x);
	console.log("INNSIDE 2: apple", yield 2);
	bar(yield 3);
	return "FINITO";
}

var genTo = foo(1);
for(var elem of genTo) {
	console.log("FOR loop", elem);
}
var gen = foo(1);
console.log("OUTSIDE 1:", gen.next("PEAR"));
console.log("OUTSIDE 2:", gen.next("APPLE"));
console.log("OUTSIDE 3:", gen.next("BANANA"));
console.log("OUTSIDE 4:", gen.next("MANGO"));
console.log("OUTSIDE 5:", gen.next("ORANGE"));