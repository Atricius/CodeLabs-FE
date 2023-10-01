// Exercise01
//Objective: Understand the “this” keyword in different contexts.
// Instructions:
// 1. Create three functions: one global, one as an object method, and an arrow function inside an object.
// 2. Print the value of this inside each function.
// 3. Discuss or note down the differences you observe in the value of this across the three scenarios.

function globalFunction() {
     console.log(this); // this refers to the 'Window'
}

globalFunction();

const object1 = {
     name: "joe",
     objectFunction: function() {
          console.log(this); // this refers to the parent variable 'object1', including other values or properties of the object
     },
     arrowFunction: () => {
          console.log(this); // this refers to scope of the parent object that the function is part of... in this case 'Global scope'
     }
};

object1.objectFunction();
object1.arrowFunction();

