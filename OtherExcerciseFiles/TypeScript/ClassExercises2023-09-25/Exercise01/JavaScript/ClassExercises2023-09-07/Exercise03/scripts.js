// Exercise03
// Objective: Implement Closures in JavaScript.

// Instructions:

// Develop a JavaScript function that returns another function.
// The inner function should have access to variables from the outer function's scope.



function outerFunction() { //declares the outerFunction()
     let outerVariable = "LOUD"; // assigns the value of "LOUD" to the outerVariable
     return innerFunction(); // invokes the innerFunction()
     function innerFunction(){ // declares the innerFunction()
          console.log(outerVariable); // calls outerVariable "LOUD"
     }
}
outerFunction(); // executes outerFunction()