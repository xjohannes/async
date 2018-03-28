//////////////////////////////////////////////
////////// PROMISE CO-ROUTINEs ///////////////
// requestPromise using $.ajax()
import {path, url} from "./thirdpartModules.js";
import {errorFunc, promiseRequest} from "./thirdpartModules.js";

let kiwiPath = 'newZealand';

function runGeneratorEx() {

  function* fruitGenerator() {
    var mainResult1 = yield promiseRequest(url + kiwiPath);

    let mainResult2 = yield promiseRequest(url + mainResult1);
    console.log("Generator result:", mainResult2);
  }

  let fruitCoroutine = fruitGenerator();

  fruitCoroutine.next().value
    .then(function (result) {
      fruitCoroutine.next(result).value
        .then(function (result) {
          console.log("RETURN:", result)
        });
    });

  /////////////////////////////////////////////////////////////////
  ///////////////////////// Error handling ///////////////////////
  /*function* fruitGeneratorWithErrorhandling() {
    try {
      var mainResult1 = yield promiseRequest(url + kiwiPath);
    }
    catch (err) {
      console.log("Generator Err")
    }
    try{

    let mainResult2 = yield promiseRequest(url + mainResult1);
    console.log("Generator result:", mainResult2);
    }
    catch (err) {
      console.log("Generator Err")
    }
  }*/

  /////////////////////////////////////////////////////////////////
  /////////////////////////////// Wrapper ////////////////////////
  /* let coroutines = function (gen) {
     let it = gen(), ret;

     (function iterate(val) {
       ret = it.next(val);
       if (!ret.done) {
         if (ret.value && typeof ret.value === 'object' && "then" in ret.value) {
           ret.value.then(iterate);
         } else {
           setTimeout(function () {
             iterate(ret.value);
           }, 0);
         }
       }
     })();
   };*/
  //coroutines(promiseGenerator);
}

export {runGeneratorEx}