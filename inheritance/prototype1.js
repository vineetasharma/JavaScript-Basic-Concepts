/**
 * @author [Vineeta Sharma]
 * @create date 2022-06-13 18:28:57
 * @modify date 2022-06-13 18:28:57
 * @desc [Setting prototype]
 */

/**
 * using Object.create
 */
 const personPrototype = {
    greet() {
      console.log('hello!');
    }
  }
  
  const carl = Object.create(personPrototype);
  carl.greet();  // hello!


  /**
   * using a constructor
   */
   const personPrototype1 = {
    greet() {
      console.log(`hello, my name is ${this.name}!`);
    }
  }
  
  function Person(name) {
    this.name = name;
  }
  
  Person.prototype = personPrototype1;
  Person.prototype.constructor = Person;

  const reuben = new Person('Reuben');
  reuben.greet(); // hello, my name is Reuben!


  const irma = new Person('Irma');

console.log(irma.hasOwnProperty('name')); // true
console.log(irma.hasOwnProperty('greet')); // false