import {url, path, error400Path, throwErrorPath} from "./thirdpartModules.js";
import {callbackRequest, promiseRequest} from "./thirdpartModules.js";
import {mainAsync} from "./asyncAwaitExample.js";
import {synchronousCallbackErrorHandling} from "./synchronousCallbackErrorHandling.js";
import {asynchronousCallbackErrorHandling} from "./asynchronousCallbackErrorHandling.js";

asynchronousCallbackErrorHandling(url);
//asynchronousCallbackErrorHandling(url + error400Path);
//asynchronousCallbackErrorHandling(url + throwErrorPath);
//////////////////////////////////////////////
////////////////// ASYNC AWAIT //////////////
/*mainAsync(url, path)
.then(function(data) {
	console.log("Result from Async await:", data);
});*/

//////////////////////////////////////////////
/////////////// Callback Async ///////////////
/*try {
	callbackRequest(url + path, function(result) {
		try {
			callbackRequest(url + result, function(result) {
				console.log("Asynchronous callback without generators");
			}, errorFunasyncc);
		}
		catch (err) {
			console.log("Callback err 2:", err);
		}
	}, errorFunc);
}
catch (err) {
	console.log("Callback err 1:", err);
}*/



//////////////////////////////////////////////
////////// PROMISE CO-ROUTINEs ///////////////
/*function requestPromise(url) {
	promiseRequest(url)
	.then(function(response) {
		iteratorPromise.next(response);
	})
	.catch(function(err) {
		iteratorPromise.throw(err);
	});
}*/

// requestPromise using fetch()
/*function requestPromiseFetch(url) {
	fetch(url)
	.then(function(response) {
		response.text()
		.then(function(data) {
			iteratorPromise.next(data);
		});
	})
	.catch(errorFunc);
}

function *mainPromise() {
	try{
		var mainResult1 = yield requestPromiseFetch(url + path);
	}
	catch (err) {
		console.log("Promise Err")
	}
	var mainResult2 = yield promiseRequest(url + mainResult1);
	console.log("Promise GEN result:", mainResult2);
}

var iteratorPromise = mainPromise();
iteratorPromise.next();

var runGenerator = function(gen) {
	var it = gen(), ret;

	(function iterate(val) {
		ret = it.next(val);
		if(!ret.done) {
			if(ret.value && typeof ret.value === 'object' && "then" in ret.value) {
				ret.value.then(iterate);
			} else {
				setTimeout(function() {
					iterate(ret.value);
				}, 0);
			}
		}
	})();
}*/
//////////////////////////////////////////////
//////////// CALLBACK CO-ROUTINE /////////////
/*function requestCallback(url) {
	callbackRequest(url, function(response) {
		iteratorCallback.next(response);
	}, errorFunc);
}

function *mainCallback() {
	var mainResult1 = yield requestPromiseFetch(url + path);
	var mainResult3 = yield "YIELDING";
	var mainResult2 = yield $.ajax(url + mainResult1);
	console.log("Callback GEN result:", mainResult2);
}

//var iteratorCallback = mainCallback();
//iteratorCallback.next();

runGenerator(mainPromise);
*/
console.log("CONTINUING PROGRAM");


/*try {
	callbackRequest(url + path, function(data) {
		callbackRequest(url + data, function(data2) {
			console.log("Result Callback:", data2);
		});
	}, errorFunc);
}
catch (err) {
	console.log("Caught in Callback:", err);
}
try {
	var value = promiseRequest(url + path);
	value
	.then(function(data) {
		try {	
			return promiseRequest(url + data);
		}
		catch (err) {
			console.log("Caught in Promise:", err);
		}
	})
	.then(function(data) {
		console.log("Promise result:", data);
	})
	.catch(function(err) {
		console.log('Promise error:', err)
	})
}
catch (err) {
	console.log("Caught in promise:", err);
}
*/

// Error in promises

/*var errValue = promise('http://localhost:3000/errorResponse');

errValue.catch(function(err) {
	console.log('Error 2', err);
});
*/



// Generators
/*function bar(y) {
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
console.log("OUTSIDE 5:", gen.next("ORANGE"));*/

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