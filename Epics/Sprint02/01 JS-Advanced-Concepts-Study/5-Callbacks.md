// Summary Notes: Provide a brief rundown of the significant points, insights, and observations for each video segment.
// Questions & Clarifications: Document any questions or aspects that are unclear, serving as a foundation for future learning or discussions.

A callback function is a function that is passed as an argument to another function and is executed later. Callbacks are often used to handle asynchronous events, such as network requests or user input.

To use a callback function, you can use the function() keyword to create a function and then pass it as an argument to another function.

Example:

const logHello = () => {
    console.log("Hello")
}

setTimeout(logHello, 100)




function myFunction(callback) {
  // do something asynchronous
  callback();
}

myFunction(function() {
  // do something after the asynchronous operation is complete
});