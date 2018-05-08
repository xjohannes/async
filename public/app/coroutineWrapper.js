import {url, kiwiPath} from "./thirdpartModules.js";
import {promiseRequest} from "./thirdpartModules.js";


function asyncWrapper(gen) {
  let it = gen(), ret;

  (function iterate(val) {
    ret = it.next(val);
    if(!ret.done) {
      if(ret.value && typeof ret.value === 'object' && "then" in ret.value) {
        ret.value.then(iterate);
      } else {
        setTimeout(function() {
          iterate(ret.value);
        }, 0);
      }
    }
  })();
};

function* fruitGen() {
  var mainResult1 = yield promiseRequest(url + kiwiPath);

  let mainResult2 = yield promiseRequest(url + mainResult1);
  console.log("Generator result:", mainResult2);
}

export {asyncWrapper, fruitGen}
