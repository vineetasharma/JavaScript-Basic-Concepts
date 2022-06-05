function* gen() {
    try {
      let result = yield "2 + 2 = ?"; // (1)
  
      console.log("The execution does not reach here, because the exception is thrown above",result);
    } catch(e) {
      console.log('ERROR log::',e); // shows the error
    }
  }
  
  let generator = gen();
  
  let question = generator.next().value;
  generator.next(4);
  
  generator.throw(new Error("The answer is not found in my database")); // (2)