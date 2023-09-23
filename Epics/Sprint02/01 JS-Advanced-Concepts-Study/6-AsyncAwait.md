// Summary Notes: Provide a brief rundown of the significant points, insights, and observations for each video segment.
// Questions & Clarifications: Document any questions or aspects that are unclear, serving as a foundation for future learning or discussions.

Async/Await
    The async keyword is used to mark a function as asynchronous, and the await keyword is used to pause the execution of a function until an asynchronous operation completes.

    Example: the following code uses the fetch() function to fetch a URL asynchronously:



async function fetchData() {
  const response = await fetch('https://example.com');
  const data = await response.json();
  return data;
}



Call Stack
    A data structure that keeps track of the current execution context. It is used to track the function calls that are currently being executed, as well as the functions that called those functions. The call stack can be used to debug code, as well as to track the flow of execution.
    ... It's complicated...



CallbackHell
    A situation where a function calls another function, which calls another function, and so on, in a chain. This can lead to code that is difficult to read and debug.
    To avoid callback hell, use promises or async/await.



Promises
    Promises are a way of handling asynchronous code in JavaScript. They allow you to chain together multiple asynchronous operations and wait for them all to complete before continuing.
    Objects that represent the eventual completion or failure of an asynchronous operation. Async/await is a syntax that allows you to write asynchronous code in a synchronous way.
    To create a promise, you use the 'new Promise()' constructor. Where 'resolve' and 'reject' are functions that are called when the promise is resolved or rejected. The syntax is:

const promise = new Promise((resolve, reject) => {
  // do something asynchronous
  resolve('done');
});

    To chain together multiple promises, you use the then() method. The syntax is:

const promise1 = new Promise((resolve, reject) => {
  // do something asynchronous
  resolve('done');
});

const promise2 = promise1.then((result) => {
  // do something with the result of promise1
  return new Promise((resolve, reject) => {
    // do something asynchronous
    resolve('done');
  });
});

    To wait for all of the promises in a chain to complete, you use the all() method. The syntax is:

const promises = [promise1, promise2];

Promise.all(promises).then((results) => {
  // do something with the results of all of the promises
});
