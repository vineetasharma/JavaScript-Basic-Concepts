/**
 * JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration 
 * of functions, variables or classes to the top of their scope, prior to execution of the code.
 * 
 * Hoisting allows functions to be safely used in code before they are declared.
 * 
 * Variable and class declarations are also hoisted, so they too can be referenced before they are declared.
 * Note that doing so can lead to unexpected errors, and is not generally recommended.
 */


/**
 * Function Hoisting: One of the advantages of hoisting is that it lets you use a function before you declare it in your code.
 */

 catName("Vini");

 function catName(name) {
   console.log("My cat's name is " + name);
 }
 /*
 The result of the code above is: "My cat's name is Vini"
 */


 /**
  * Variable Hoisting: Hoisting works with variables too, so you can use a variable in code before it is declared and/or initialized.
  * 
  * However JavaScript only hoists declarations, not initializations!
  * This means that initialization doesn't happen until the associated line of code is executed,
  * even if the variable was originally initialized then declared, or declared and initialized in the same line.
  * 
  * Until that point in the execution is reached the variable has its default initialization (undefined for a variable declared using var, otherwise uninitialized).
  * 
  * Note: Conceptually variable hoisting is often presented as the interpreter "splitting variable declaration and initialization, and moving (just) the declarations to the top of the code".
  */

 /**
  * example 1: Here we declare then initialize the value of a var after using it. The default initialization of the var is undefined.
  */

  console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
  var num; // Declaration
  num = 6; // Initialization
  console.log(num); // Returns 6 after the line with initialization is executed.

/**
 * example 2: The same thing happens if we declare and initialize the variable in the same line.
 */

 console.log(num2); // Returns 'undefined' from hoisted var declaration (not 6)
 var num2 = 6; // Initialization and declaration.
 console.log(num2); // Returns 6 after the line with initialization is executed.

 /**
  * example 3: If we forget the declaration altogether (and only initialize the value) the variable isn't hoisted. Trying to read the variable before it is initialized results in ReferenceError exception.
  */
/**
 * uncomment the below line to execute the example 3
 */
  //console.log(num3); // Throws ReferenceError exception - the interpreter doesn't know about `num3`.
  num3 = 6; // Initialization


  /**
   * example 4: Note however that initialization also causes declaration (if not already declared). The code snippet below will work, because even though it isn't hoisted, the variable is initialized and effectively declared before it is used.
   */

   a = 'Cran'; // Initialize a
   b = 'berry'; // Initialize b
   
   console.log(a + "" + b); // 'Cranberry'


   /**
    * let & const Hoisting: Variables declared with let and const are also hoisted but, unlike var, are not initialized with a default value. An exception will be thrown if a variable declared with let or const is read before it is initialized.
    */
   /**
    * example 5:
    */

    //console.log(num5); // Throws ReferenceError exception as the variable value is uninitialized
    let num5 = 6; // Initialization



    /**
     * Class Hoisting: Classes defined using a class declaration are hoisted, which means that JavaScript has a reference to the class. However the class is not initialized by default, so any code that uses
     *  it before the line in which it is initialized is executed will throw a ReferenceError.
     * 
     * An important difference between function declarations and class declarations is that while functions can be called in code that appears before they are defined, classes must be defined before they 
     * can be constructed. Code like the following will throw a ReferenceError.
     * 
     * Function expressions and class expressions are not hoisted.
     */


     const p = new Rectangle(); // ReferenceError

     class Rectangle {}