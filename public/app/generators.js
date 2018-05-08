// Generators
function generators() {
  console.log("GENERATORS");

  function* fruitYielder(fruit) {
    yield fruit;
    yield "Apples";
    return "Kiwi";
  }


  var gen = fruitYielder("Oranges");

  for (let elem of gen) {
    console.log(elem);
  }

    // Oranges
    // Apples
    gen = fruitYielder("Oranges");

  console.log(gen.next()); // {value: "Oranges", done: false}
  console.log(gen.next()); // {value: "Apples", done: false}

  let secondGen = receiveAndYieldFruit("Oranges");

  function* receiveAndYieldFruit(fruit) {
    let firstReseived = yield fruit;
    let secondReseived = yield "Apples";
  }

  console.log(secondGen.next("Pears"));
  console.log(secondGen.next("Bananas"));
  console.log(secondGen.next("coconut"));

//{value: "Oranges", done: false}
// {value: "Apples", done: false}


















  /* function bar(y) {
     console.log("BAR",y);
   }*/
  /*function *foo() {
    try {
     console.log("FOO",yield 2);
     console.log("FOO",yield 3);
   }
   catch (err) {
     console.log("Caught in FOO");
   }
     return "foo"; // return value back to `yield*` expression
   }

   function *bar() {

     try {
       console.log("BAR",yield 1);
       var v = yield *foo();
     }
     catch (err) {
       console.log("Caught in BAR", err)
     }
     console.log( "v: " + v );
     console.log("BAR",yield 4);
   }

   var it = bar();

 console.log("OUT", it.next("One")); // { value:1, done:false }
 console.log("OUT", it.next("Two")); // { value:2, done:false }
 console.log("OUT", it.throw("Something went wrong Outside"));//("Tree")); // { value:3, done:false }
 console.log("OUT", it.next("Four")); // "v: foo"   { value:4, done:false }
 console.log("OUT", it.next("Five")); // { value:undefined, done:true }*/
}
export {generators}