//////////////////////////////////////////////
////////////////// ASYNC AWAIT //////////////
async function mainAsync(url, path) {
	console.log("HEI");
	try {
		let firstResponse = await fetch(url + path);
		var mainResult1 = await firstResponse.text();
	}
	catch (err) {
		console.log("ASYNC ERR 1:", err);
	}
	try {
		var mainResult2 = await $.ajax(url + mainResult1);
		console.log("Async result:", mainResult2);
	}
	catch (err) {
		console.log("ASYNC ERR 2:", err);
	}
	console.log("typeof mainResult2", typeof mainResult2);
	return mainResult2;
}

export {mainAsync};