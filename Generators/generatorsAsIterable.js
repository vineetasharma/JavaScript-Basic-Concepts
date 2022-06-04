/**
 * Generators are iterable
 * We can loop over their values using for..of:
 */

 function* generateSequence() {
    yield 1;
    yield 2;
  }
  
  let generator = generateSequence();
  
  for(let value of generator) {
    console.log(value); // 1, then 2
  }

  /**
   * Looks a lot nicer than calling .next().value, right?
   * …But please note: the example above shows 1, then 2, and that’s all. It doesn’t show 3!
   * It’s because for..of iteration ignores the last value, when done: true.
   * So, if we want all results to be shown by for..of, we must return them with yield:
   */

   function* generateSequence1() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  let generator1 = generateSequence1();
  
  for(let value of generator1) {
    console.log(value); // 1, then 2, then 3
  }


  /**
   * As generators are iterable, we can call all related functionality, e.g. the spread syntax ...:
   */

   function* generateSequence2() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  let sequence2 = [0, ...generateSequence2()];
  
  console.log(sequence2); //[ 0, 1, 2, 3 ]

  /**
   * In the code above, ...generateSequence() turns the iterable generator object into an array of items
   */


  /**
   * We can use a generator function for iteration by providing it as Symbol.iterator.
   */

   let range = {
    from: 1,
    to: 5,
  
    *[Symbol.iterator]() { // a shorthand for [Symbol.iterator]: function*()
      for(let value = this.from; value <= this.to; value++) {
        yield value;
      }
    }
  };
  
  console.log( [...range] ); // [1,2,3,4,5]


  /**
   * That works, because range[Symbol.iterator]() now returns a generator, and generator methods are exactly what for..of expects:
   * it has a .next() method that returns values in the form {value: ..., done: true/false}
   * That’s not a coincidence, of course. Generators were added to JavaScript language with iterators in mind, to implement them easily.
   * The variant with a generator is much more concise than the original iterable code of range, and keeps the same functionality.
   */