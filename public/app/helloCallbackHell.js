function getSomethingAndThrowError(callback, text) {
	callback(text);
}

function helloCallbackHell () {
	try{
		getSomethingAndThrowError(function iAmCallback (data) {
			(function iAmInternalAnynomousFunction() {
				(function iThrowErrors() {
					try {
						throw new Error("Throwing Error");
					} catch (err) {
						console.log("Caught error inside iThrowErrors");
					}
				})();
			}());	
		}, "Hello Callback Hell");
		console.log("Synchronous callback resolving data:", data);
	} 
	catch (err) {
		console.log("Caught an Error in helloCallbackHell:", err);
	}
}

export {helloCallbackHell};

