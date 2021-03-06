// Serial generator
function serialGeneratorExample() {
  console.log("SERIAL GENERATOR");

  function *serialGenerator() {
    let serialNr, reset = true;
    while(true) {
      if(reset) {
        serialNr = 0;
        reset = false;
      }
      else
        reset = yield ++serialNr;
    }
  }

  function doOtherStuff(stuff) {
    console.log(stuff);
  }



  let generateSerialNumber = serialGenerator();
  console.log("First serial number:", generateSerialNumber.next());
  doOtherStuff("Driving");
  console.log("Second serial number:", generateSerialNumber.next());
  doOtherStuff("Talking");
  console.log("Third serial number:", generateSerialNumber.next());
  doOtherStuff("Singing");
  console.log("Reset serial number:", generateSerialNumber.next(true));
  console.log("Continue program");
}
export {serialGeneratorExample}