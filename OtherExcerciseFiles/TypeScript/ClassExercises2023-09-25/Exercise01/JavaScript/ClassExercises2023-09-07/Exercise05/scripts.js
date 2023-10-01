// Exercise05
// Objective: Implement a Function Factory using Closures.

// Instructions:

// Design a function that accepts a parameter.
// The function should return another function that uses the parameter in some way.


function functionFactory(param) {
     console.log(param);
    // Return a function that makes use of 'param'
    return function (){
     console.log(param + 'hi');
    }
}

functionFactory("Hello World!")(); // extra set of () are needed to return the function... if not, it will try to return the value of functionFactory()

// Create an instance of the inner function by invoking functionFactory with a parameter