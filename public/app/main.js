var promise = function(url) {
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
		console.log('SUCCESS ', data )})
	.catch(function(err) {
		console.log('ERROR 1', err)
	})
/*
var errValue = promise('http://localhost:3000/errorResponse');

errValue.catch(function(err) {
	console.log('Error 2', err);
})*/