/**
 * With a generator function, values are not evaluated until they are needed.
 * Therefore a generator allows us to define a potentially infinite data structure.
 */

 function* infinite() {
    let index = 0;

    while (true) {
        yield index++;
    }
}

const generator = infinite(); // "Generator { }"

console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
// ...