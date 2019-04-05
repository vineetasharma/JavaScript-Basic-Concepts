/**
 * Closure have access to the outer function's varaibles even after the outer function returns.
 */

function getName(firstName){
    function showFullName(lastName){
        return firstName + ' '+ lastName;
    }
    return showFullName;
}

var displayName= getName('Vineeta');
console.log(displayName('Sharma'));