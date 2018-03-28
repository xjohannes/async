const url = 'http://localhost:3000/'; 
const path = 'firstAsync'; 
const error400Path = 'return400Response';
const throwErrorPath = 'throwErrorResponse';




function callbackRequest (url, success, error) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url); // true
  // Because of closures xhr is still available  
  // within the success and error callback functions 
  // even though the enclosing function has already 
  // returned and therefor is out of scope
  // Eddie Bruel (https://medium.com/@ejpbruel/the-drawbacks-of-callbacks-or-why-promises-are-great-5dedf2c98c67)
  xhr.onload = () => success(xhr.responseText); 
  xhr.onerror = () => error(xhr);

	xhr.send();
	throw("Callback throw error");
}
function promiseRequest (url) {
  return $.ajax(url);
}
	//////////////////////////////////
function errorFunc (err) {
	console.log("Callback errFunc:", err);
}

function requestPromise(url, generator) {
  promiseRequest(url)
    .then(function (response) {
      generator.next(response);
    })
    .catch(function (err) {
      fruitGenerator.throw(err);
    });
}

// requestPromise using fetch()
function requestPromiseFetch(url, generator) {
  fetch(url)
    .then(function (response) {
      response.text()
        .then(function (data) {
          generator.next(data);
        })
        .catch(errorFunc);
    })
    .catch(errorFunc);
}

	


// Exporting constants
export {url, path, error400Path, throwErrorPath};
export {callbackRequest, promiseRequest, errorFunc, requestPromise, requestPromiseFetch};