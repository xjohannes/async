import {url, path, error400Path, throwErrorPath, kiwiPath} from "./thirdpartModules.js";

import {callbackRequest, promiseRequest, errorFunc} from "./thirdpartModules.js";
import {mainAsync, mainAsyncFetch} from "./asyncAwaitExample.js";
import {helloCallbackHell} from "./helloCallbackHell.js";
import {synchronousCallbackErrorHandling} from "./synchronousCallbackErrorHandling.js";
import {asynchronousCallbackErrorHandling} from "./asynchronousCallbackErrorhandling.js";
import {friday} from "./friday.js";

import  {asyncWrapper, fruitGen}  from "./coroutineWrapper.js";

import {runGeneratorEx} from "./promiseYielder.js";
import {generators} from "./generators.js";
import {serialGeneratorExample} from "./serialGenerator.js";
import {loadStoryCallback, loadStoryPromise, loadStoryGenerator, loadStoryAsyncAwait} from "./story.js";

(function main () {
	console.log("////////////// Start of program //////////////");
  generators();
  //friday();
	//serialGeneratorExample();
  //loadStoryCallback();
	/*asyncWrapper(function* fruitGen() {
        let mainResult1 = yield promiseRequest(url + kiwiPath);

        let mainResult2 = yield promiseRequest(url + mainResult1);
        console.log("Generator result:", mainResult2);
    });*/
	console.log("////////////// End of program //////////////");
}());
// generators();
// mainAsyncFetch(url, path);

//runGeneratorEx();
//friday();
//coroutines(promiseGenerator);
//mainAsync(url, path);

//loadStoryCallback();
//asyncWrapper(loadStoryGenerator);
//loadStoryPromise();
//loadStoryAsyncAwait();
//synchronousCallbackErrorHandling();
//helloCallbackHell();

//asyncWrapper(iteratorPromise);
//let it = asyncWrapper(promiseGenerator);
//it();
//asynchronousCallbackErrorHandling(url);
//asynchronousCallbackErrorHandling(url + error400Path);
//asynchronousCallbackErrorHandling(url + throwErrorPath);
//////////////////////////////////////////////
////////////////// ASYNC AWAIT //////////////
// Async functions return a promise which can be used to get
// hold of data from outside the async function
/*mainAsync(url, path)
.then(function(data) {
	console.log("Result from Async await:", data);
});*/






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
}*/

//var iteratorCallback = mainCallback();
//iteratorCallback.next();


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




