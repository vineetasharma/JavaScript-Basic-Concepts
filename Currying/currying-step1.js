/**
 * Currying is an advanced technique of working with functions. It’s used not only in JavaScript, but in other languages as well.
 * Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).
 * Currying doesn’t call a function. It just transforms it.
 */

function curry(f) { // curry(f) does the currying transform
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

// usage
function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);

console.log(curriedSum(1)(2)); // 3
console.log(curriedSum(1)(2)(3)); // TypeError: curriedSum(...)(...) is not a function
/**
 * In the above console.log we are trying to pass 3 arguments but it can accept 2 args only.
 */


/**
 * Currying & Partial application
 * Some might start to think that the number of nested functions a curried function has depends on the number of arguments it receives. Yes, that makes it a curry
 */


function sumSimple(a) {
  return (b, c) => {
    return a * b * c
  }
}

let x = sumSimple(10);
console.log(x(3, 12)); //360
console.log(x(20, 12)); // 2400
console.log(x(20, 13)); // 2600