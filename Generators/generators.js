/**
 * Regular functions return only one, single value (or nothing).
 * Generators can return (“yield”) multiple values, one after another, on-demand.
 * They work great with iterables, allowing to create data streams with ease.
 * To create a generator, we need a special syntax construct: function*, so-called “generator function”.
 * 
 * function* f(…) or function *f(…)?
 * Both syntaxes are correct.
 * But usually the first syntax is preferred, as the star * denotes that it’s a generator function,
 * it describes the kind, not the name, so it should stick with the function keyword.
 */

function* generatorSequence(){
    yield 'a';
    yield 'b';
    yield 'c';
    return 'd';
}

/**
 * Generator functions behave differently from regular ones. When such function is called, it doesn’t run its code.
 * Instead it returns a special object, called “generator object”, to manage the execution.
 */
var generator = generatorSequence();
console.log(generator); // Object [Generator] {}



/**
 * The main method of a generator is next(). When called,
 * it runs the execution until the nearest yield <value> statement (value can be omitted, then it’s undefined). Then the function execution pauses, and the yielded value is returned to the outer code.
 * 
 * The result of next() is always an object with two properties:
 *  value: the yielded value.
 *  done: true if the function code has finished, otherwise false.
 */
console.log(generator.next()); // { value: 'a', done: false }
console.log(generator.next()); // { value: 'b', done: false }
console.log(generator.next()); // { value: 'c', done: false }
console.log(generator.next()); // { value: 'd', done: true }

/**
 * Now the generator is done. We should see it from done:true and process value: 'd' as the final result.
 * New calls to generator.next() don’t make sense any more. If we do them, they return the same object:  { value: undefined, done: true }
 */
console.log(generator.next()); // { value: undefined, done: true }
console.log(generator.next()); // { value: undefined, done: true }
console.log(generator.next()); // { value: undefined, done: true }