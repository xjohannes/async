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
function *foo(x) {
	console.log("INNSIDE pear", yield x);
	console.log("INNSIDE apple", yield 2);
}

var gen = foo(3);
console.log("OUTSIDE:", gen.next("PEAR"));
console.log("OUTSIDE:", gen.next("APPLE"));