import {url, path, error400Path, throwErrorPath} from "./thirdpartModules.js";
import {callbackRequest, promiseRequest} from "./thirdpartModules.js";
import {mainAsync} from "./asyncAwaitExample.js";
import {helloCallbackHell} from "./helloCallbackHell.js";
import {synchronousCallbackErrorHandling} from "./synchronousCallbackErrorHandling.js";
import {asynchronousCallbackErrorHandling} from "./asynchronousCallbackErrorHandling.js";
import {friday} from "./friday.js";
import {generators} from "./generators.js";
import {loadStoryCallback, loadStoryPromise, loadStoryAsyncAwait} from "./story.js";


(function main () {
	//friday();
	//loadStoryCallback();
	//loadStoryPromise();
	loadStoryAsyncAwait();
	//synchronousCallbackErrorHandling();
	//helloCallbackHell();
	//generators();
}());

//asynchronousCallbackErrorHandling(url);
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
//console.log("CONTINUING PROGRAM");


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




