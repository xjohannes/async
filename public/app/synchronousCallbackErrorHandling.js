
function getSomethingAndThrowError(callback) {
	callback("Hello callback world");
}



function synchronousCallbackErrorHandling () {
	try{
		getSomethingAndThrowError(function iAmCallback (data) {
			console.log("Synchronous callback resolving data:", data);
			(function iAmInternalAnynomousFunction() {
				throw new Error("Throwing Error");
			}());	
		});
	} 
	catch (err) {
		console.log("Caught an Error:", err);
	}
}

export {synchronousCallbackErrorHandling};