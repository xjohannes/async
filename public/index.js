/*
const successCallbackOne = data => {
  console.log("SUCCESS 1",  Date.now() - startTime);
  successCallbackTwo(data)
};
const successCallbackTwo = msg => {
  console.log("SUCCESS 2", msg, Date.now() - startTime);
};
const failureCallback = err => {
  console.log(err);
};*/

/// Server Promise
/*const doA = (startValue, timeout) => {
  console.log("DoA Promise");
  const timeOut = timeout || 0;
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(startValue + " A")
    }, timeOut);
  });
};

const doB = value => {
  console.log("DoB Promise");
  return new Promise(function (resolve, reject, val) {
    const b = value + "B";
    setTimeout(function () {
      resolve(b)
    }, 0);
  });
};

reject = () => {
  console.log("REJECT");
};*/

// Server Callback
/*const doACall = (startVal, callback) => {
  console.log("DoA Callback");
  callback(startVal + " A");
  setTimeout(function() {
    callback(startVal + " A");
  }, 0)
};
const doBCall = (val, callback) => {
  console.log("DoB Callback");
  const b = val + "B";
  callback(b);

  setTimeout(function() {
    callback(b);
  }, 0)
};*/

// Client promise
/*const startTime = Date.now();
console.log("Start Promise:", startTime);

doA("Promise", 1)
  .then( result => {
    console.log("RESULT DoA1:", result, Date.now() - startTime);
    return doB(result);
  }, reject)
  .then( nextResult => {
    console.log("RESULT DoB1:", nextResult, Date.now() - startTime);
    return doA(nextResult);
  })
  .then( secondToLast => {
    console.log("RESULT DoA2:", secondToLast, Date.now() - startTime);
    return doB(secondToLast);
  })
  .then( lastResult => {
    console.log("RESULT DoB2:", lastResult, Date.now() - startTime);
    successCallbackOne(lastResult);
  })
  .catch(failureCallback);

console.log("End Promise");

console.log("START CALLBACK");*/

// Client Callback
/*
doACall("Callback", result => {
  console.log("RESULT DoA1:", result, Date.now() - startTime);
  doBCall(result, nextResult => {
    console.log("RESULT DoB1:", nextResult, Date.now() - startTime);
    doACall(nextResult, secondToLast => {
      console.log("RESULT DoA2:", secondToLast, Date.now() - startTime);
      doBCall(secondToLast, lastResult => {
        console.log("RESULT DoB2:", lastResult, Date.now() - startTime);
        successCallbackOne(lastResult);
      })
    })
  })
});
console.log("END CALLBACK");
*/

// Iterator
/*
function makeIterator(array) {
  var nextIndex = 0;

  return {
    next: function() {
      return nextIndex < array.length ?
        {value: array[nextIndex++], done: false} :
        {done: true};
    }
  };
}

var it = makeIterator(['Chair', 'Sofa', 'Bed']);
console.log(it.next().value); // 'Chair'
console.log(it.next().value); // 'Sofa'
console.log(it.next().value); // 'Bed'
console.log(it.next().done);  // true
*/


// Generator Function
/*
const fruit = ["Apples", "Oranges", "Bananas"];

function* idMaker(arr) {
  let index = 0;
  while(true)
    yield arr[index++];
}

var gen = idMaker(fruit);

console.log(gen.next().value); // Apples
console.log(gen.next().value); // Oranges
console.log(gen.next().value); // Bananas
console.log("GEN", gen.next());  // false
*/

// Itrable
/*var myIterable = {};

myIterable[Symbol.iterator] = function* () {
  console.log("Beginning of Iterator");
  yield 1;
  console.log("After 1 of Iterator");
  yield 2;
  console.log("After 2 of Iterator");
  yield 3;
  console.log("After 3 of Iterator");
};

for (let value of myIterable) {
  console.log(value);
}

console.log([...myIterable]); // [1, 2, 3]*/


/* next(true)
var myItrableGenerator = function* () {
  console.log("Beginning of myIterable2");
  yield 1;
  console.log("After 1 of myIterable2");
  var result = yield 2;
  console.log("After 2 of myIterable2 result: ", result);
  yield 3;
  console.log("After 3 of myIterable2 result: ", result);
};

var myIterable2 = myItrableGenerator();

console.log("My Itrable: ", myIterable2.next().value);
console.log("My Itrable: ", myIterable2.next(true).value);
console.log("My Itrable: ", myIterable2.next().value);
console.log("My Itrable: ", myIterable2.next().done);*/

function* fibonacci(end) {
  var fn1 = 0;
  var fn2 = 1;
  while (fn1 < end) {
    var current = fn1;
    fn1 = fn2;
    fn2 = current + fn1;
    var reset = yield current;
    if (reset) {
      fn1 = 0;
      fn2 = 1;
    }
  }
}



for(var num of fibonacci(200)) {
  console.log('Out', num);
}

//var sequence = fibonacci();
/*console.log('Out', sequence.next('First').value);     // 0
console.log('Out',sequence.next('Second').value);     // 1
console.log('Out',sequence.next('Third').value);     // 1
console.log('Out',sequence.next().value);     // 2
console.log('Out',sequence.next().value);     // 3
console.log('Out',sequence.next().value);     // 5
console.log('Out',sequence.next().value);     // 8
console.log('Out',sequence.next(true).value); // 0
console.log('Out',sequence.next().value);     // 1
console.log('Out',sequence.next().value);     // 1
console.log('Out',sequence.next().value);*/     // 2
