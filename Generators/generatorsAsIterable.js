/**
 * Generators are iterable
 * We can loop over their values using for..of:
 */

 function* generateSequence() {
    yield 1;
    yield 2;
  }
  
  let generator = generateSequence();
  
//   for(let value of generator) {
//     console.log(value); // 1, then 2
//   }

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());


