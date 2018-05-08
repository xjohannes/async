var a = function(callback) {
  console.log("A");
  return setTimeout(function() {
    callback(b);
    console.log("Innside A after calling b");
    return "A";
  }, 2000);
};
var b = function(callback) {
  console.log("B");
  return setTimeout(function() {
    callback(c);
    console.log("Innside B after calling c");
    return "B";
  }, 2000);
};
var c = function(callback) {
  console.log("C");
  return setTimeout(function() {
    callback(d);
    console.log("Innside C after calling d");
    return "C";
  }, 2001);
};
var d = function() {
  console.log("D");
  return setTimeout(function() {
    console.log("Innside D");
    return "D";
  }, 2003);
};


// Callback
var asyncJavaScript = function(callbackA) {
  console.log("INNSIDE ASYNC JAVASCRIPT");
  callbackA(function(callbackB) {
    callbackB(function(callbackC) {
      callbackC(function (callbackD) {
        callbackD();
      });
    });
  })
};

console.log("START");
asyncJavaScript(a);
console.log("END");

// Promise
/*
var promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject({
      a: "First arg in promise"
    })
  }, 1000);
});

promise
  .then(function(data) {
  setTimeout(function() {console.log("Then set timeout")}, 1000);
  console.log("DATA", data.a);})
  .catch(function (err) {
    console.log("Err", err);
  });
*/

