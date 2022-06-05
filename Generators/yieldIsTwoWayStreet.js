/**
 * Until this moment, generators were similar to iterable objects, with a special syntax to generate values. 
 * But in fact they are much more powerful and flexible.
 * That’s because yield is a two-way street: it not only returns the result to the outside,
 * but also can pass the value inside the generator.
 * To do so, we should call generator.next(arg), with an argument. That argument becomes the result of yield.
 */


function* gen() {
    // Pass a question to the outer code and wait for an answer
    let result = yield 10; // (*)
    let result1 = yield 11; // (*)
  
    console.log('result---',result);
    console.log('result1 ---',result1);
  }
  
  let generator = gen();
  
  let question = generator.next().value; // <-- yield returns the value
  
  console.log(generator.next(6)); // --> pass the result into the generator
  generator.next(5);
  generator.next(7);

/**
 * 
 * @param {recursion} previous 
 */
  function* pseudoRandom(previous){
    let result = previous * 16807 % 2147483647;
yield result;
yield* pseudoRandom(result)
  }
    // ...Your code...
    let generator1 = pseudoRandom(1);
  
  console.log(generator1.next().value); // 16807
  console.log(generator1.next().value); // 282475249
  console.log(generator1.next().value); // 1622650073
  generator.next();