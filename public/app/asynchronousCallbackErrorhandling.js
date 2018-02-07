function callbackRequest (url, success, error) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url); // true
  // Because of closures xhr is still available  
  // within the success and error callback functions 
  // even though the enclosing function has already 
  // returned and therefor is out of scope
  // Eddie Bruel (https://medium.com/@ejpbruel/the-drawbacks-of-callbacks-or-why-promises-are-great-5dedf2c98c67)
  xhr.onerror = () => error("xhr onerror", xhr);
  xhr.onload = () => {
    if(xhr.status !== 200) {
      error("Status code not 200", xhr);
    } else {
      success(xhr.responseText); 
    }
  }
	 xhr.send();
}

function asynchronousCallbackErrorHandling (url) {
  try{
    callbackRequest(url, function(successData) {
      console.log("Asynchronous Callback resolves:", successData);
    }, function(err, errObj) {
      console.log("Error from errorCallback function asynchronousCallbackErrorHandling:", errObj);
    });
  }
  catch (err) {
    console.log("CAUGHT an Asynchronous error:");
  } 
}
export {asynchronousCallbackErrorHandling};

/*function callbackRequestNodeWay (url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url); // true
  // Because of closures xhr is still available  
  // within the success and error callback functions 
  // even though the enclosing function has already 
  // returned and therefor is out of scope
  // Eddie Bruel (https://medium.com/@ejpbruel/the-drawbacks-of-callbacks-or-why-promises-are-great-5dedf2c98c67)
  xhr.onerror = () => callback(new Error(xhr.statusText));
  xhr.onload = () => {
    if(xhr.status !== 200) {
      callback(new Error(xhr.statusText));
      return;
    } 
    callback(null, xhr.responseText);
  }

  xhr.send();
  throw("Async Callback thrown error");
}
// The node way
function asynchronousCallbackErrorHandlingNodeWay (url) {
  try{
    callbackRequestNodeWay(url, function(err, successData) {
      if(!err) {
        console.log("Asynchronous Callback the Node way resolves:", successData);
      }
    });
  }
  catch (err) {
    console.log("Caught an Asynchronous error the Node Way:", err);
  } 
}*/