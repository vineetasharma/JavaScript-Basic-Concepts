/**
 * Closure is an inner function that has access to outer function's varaibles- scope Chain.
 */

function fullName(firstName, lastName) {

    salutation = "Your name is ";
    function makeFullName() {
        return salutation + firstName + ' ' + lastName;
    }
    return makeFullName();
}

console.log(fullName('Vineeta', 'Sharma'));