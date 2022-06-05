/**
 * generator.return(value) finishes the generator execution and return the given value.
 * If we again use generator.return() in a completed generator, it will return that value again.
 * Often we don’t use it, as most of time we want to get all returning values,
 * but it can be useful when we want to stop generator in a specific condition.
 */


 function* gen() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const g = gen();
  
  console.log(g.next());        // { value: 1, done: false }
  console.log(g.return('foo')); // { value: "foo", done: true }
  console.log(g.next());        // { value: undefined, done: true }