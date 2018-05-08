//////////////////////////////////////////////
////////// PROMISE CO-ROUTINEs ///////////////
// requestPromise using $.ajax()
import {path, url} from "./thirdpartModules.js";
import {errorFunc, promiseRequest} from "./thirdpartModules.js";

let kiwiPath = 'newZealand';

function runGeneratorEx() {
    console.log("PROMISE GENERATOR");

    function* fruitGenerator() {
        var mainResult1 = yield promiseRequest(url + kiwiPath);

        let mainResult2 = yield promiseRequest(url + mainResult1);
        console.log("Generator result:", mainResult2);
    }

    let fruitCoroutine = fruitGenerator();

    fruitCoroutine.next().value
        .then(result => {
            fruitCoroutine.next(result).value
                .then(result => console.log("RETURN:", result))
                .catch(err => {
                    console.log("Catching error in inner fruitCoroutine");
                    throw new Error("Error in inner yielded promise")
                })
        })
        .catch(err => {
            console.log("Catching error in outer fruitCoroutine");
            throw new Error("Error in outer yielded promise");
        });

    fruitCoroutine.next().value
        .then(result => {
            fruitCoroutine.next(result).value
                .then(result => console.log("RETURN:", result))
        });

    /////////////////////////////////////////////////////////////////
    ///////////////////////// Error handling ///////////////////////
    function* fruitGeneratorWithErrorhandling() {
      try {
        var mainResult1 = yield promiseRequest(url + kiwiPath);

        let mainResult2 = yield promiseRequest(url + mainResult1);
        console.log("Generator result:", mainResult2);
      }
      catch (err) {
        console.log("Some other way to handle generator Err" + err);
      }
    }

    /////////////////////////////////////////////////////////////////
    /////////////////////////////// Wrapper ////////////////////////
    let coroutines = function (gen) {
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
    };
    //coroutines(promiseGenerator);
}

export {runGeneratorEx}