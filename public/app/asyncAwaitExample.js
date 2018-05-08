//////////////////////////////////////////////
////////////////// ASYNC AWAIT //////////////
async function mainAsync(url, path) {
	console.log("Async Await example:");
	try {
    let mainResult1 = await $.ajax(url + path);
		let mainResult2 = await $.ajax(url + mainResult1);
		console.log("Async result:", mainResult2);
	}
	catch (err) {
		console.log("ASYNC ERR:", err);
	}
}


async function mainAsyncFetch(url, path) {
  console.log("Async Await FETCH example:");
  try {
    let firstResponse = await fetch(url + path);
    let mainResult1 = await firstResponse.text();

    let mainResult2PreResult = await fetch(url + mainResult1);
    let mainResult2 = await mainResult2PreResult.text();
    console.log("Async result:", mainResult2);
  }
  catch (err) {
    console.log("ASYNC ERR:", err);
  }
}

export {mainAsync, mainAsyncFetch};