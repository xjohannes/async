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

export {asyncWrapper}
