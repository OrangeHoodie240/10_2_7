/*
Original code
var PI = 3.14;
PI = 42; // stop me from doing this!
*/

// refactor
//swapped var for const
const PI = 3.14;
PI = 42; 


/*          QUIZ ANSWERS

Q. What is the difference between var and let?
A. The var keyword is function scoped while let is block scoped. The var keyword allows
   for the variable to be redclarable but the let keyword does not. The var keyword hoists
   the variable.

Q. What is the difference between var and const?
A. The const keyword stops all reassignments whereas the var keyword allows the variable to be 
   reassigned another value. Moreover var is function scoped, redclarable and hoisted but const
   is block scoped non-redclarable and not hoisted.

Q. What is the difference between let and const?
A. The const keyword prevants the value from being changed after initialization but let allows
   changes.

Q. What is hoisting?
A. Hoisting means that the identifier is lifted to the top of the function scope and declared 
   there. For variables created with var, this means they can be accessed prior to point they 
   were explicitly created in the code without causing a ReferenceError but they will be holding
   undefined up until they are explicitly assigned a value. Functions that are declared are 
   also hoisted, but they will work as outlined in their definition.

*/