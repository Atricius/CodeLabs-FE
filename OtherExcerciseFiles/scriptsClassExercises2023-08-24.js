// Exercise 1
console.log('Hello world!');

// Exercise 2
let myName = 'Jason';
console.log(myName);

// Excercise 3
let length = 5;
let width = 3;
console.log(length * width);

// Exercise 4
let x = 46;
if ((x % 2) > 0) {
console.log(`${x} is odd.`);
} else {
     console.log(`${x} is even.`);
}
console.log()

// Excersise 5
let i = 1;
while (i <= 10) {
     console.log(i);
     i++;
}

// Excersise 6
const yourName = prompt("Enter your name: ");
console.log('Welcome ' + yourName + '.');

// Excersise 7
const n = prompt("Enter a number: ");
function factorial(n) {
     if (n === 0) {
       return 1;
     } else {
       return n * factorial(n - 1);
     }
   }
   console.log('The factorial of ' + n + ' is: ' + factorial(n) + '.');

// Excersise 8
const year = prompt("Enter a year: ");
function isLeapYear() {
     if (year % 400 === 0) {
          console.log(year + ' is a leap year.');
     } else if (year % 4 === 0 && year % 100 !== 0) {
          console.log(year + ' is a leap year.');
     } else {
          console.log(year + ' is not a leap year.');
     }
   }
   isLeapYear(year);

// Excersise 9
var sum = 0;
var s = 1;
while (s <= 100) {
  sum += s;
  s++;
  console.log(sum);
}
console.log(sum);

// Excersise 10
const n1 = prompt("Enter a number: ");
const n2 = prompt("Enter a number: ");
let number1 = parseInt(n1);
let number2 = parseInt(n2);
console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);

// Excersise 11
//  string
let v1 = 'string';
console.log(v1);
//  number
let v2 = 25;
console.log(v2);
//  boolean
let v3 = true;
console.log(v3);
//  null
let v4 = null;
console.log(v4);
//  undefined
let v5 = {
     o1: "object 1",
     o2: "object 2"
   };
let key = "o1";
console.log( v5.key );
//  object
let v6 = {
     object1: 'This ',
     object2: 'is an object.'
};
console.log(v6.object1 + v6.object2);
//  array
let v7 = ['a', 'b', 'c'];
console.log(v7);
//  no default value declaration
let v8 = '';
console.log(v8);
// Excersise 12


// Excersise 13
