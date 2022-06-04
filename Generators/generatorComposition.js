/**
 * Generator composition is a special feature of generators that allows to transparently “embed” generators in each other.
 * 
 */


function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
  }
  
  function* generatePasswordCodes() {
  
    // 0..9
    yield* generateSequence(48, 57);
  
    // A..Z
    yield* generateSequence(65, 90);
  
    // a..z
    yield* generateSequence(97, 122);
  
  }
  
  let str = '';
  
  for(let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
  }
  
  console.log(str); // 0..9A..Za..z


  /**
   * The yield* directive delegates the execution to another generator.
   * This term means that yield* gen iterates over the generator gen and transparently forwards its yields outside.
   * As if the values were yielded by the outer generator.
   * 
   * The result is the same as if we inlined the code from nested generators:
   */

   function* generateSequence1(start, end) {
    for (let i = start; i <= end; i++) yield i;
  }
  
  function* generateAlphaNum() {
  
    // yield* generateSequence1(48, 57);
    for (let i = 48; i <= 57; i++) yield i;
  
    // yield* generateSequence1(65, 90);
    for (let i = 65; i <= 90; i++) yield i;
  
    // yield* generateSequence1(97, 122);
    for (let i = 97; i <= 122; i++) yield i;
  
  }
  
  let str1 = '';
  
  for(let code of generateAlphaNum()) {
    str1 += String.fromCharCode(code);
  }
  
  console.log(str1); // 0..9A..Za..z

  /**
   * A generator composition is a natural way to insert a flow of one generator into another.
   * It doesn’t use extra memory to store intermediate results.
   */