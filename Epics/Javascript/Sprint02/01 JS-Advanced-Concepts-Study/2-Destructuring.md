// Summary Notes: Provide a brief rundown of the significant points, insights, and observations for each video segment.
// Questions & Clarifications: Document any questions or aspects that are unclear, serving as a foundation for future learning or discussions.


Destructuring:
    Summary:
        Accessing variables inside an object by declaring the variables individually as new variables.
    Usage:
        Can be used with Arrays and Objects. 

Examples:
// Accessing Objects the Old way

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

let personFirstName = person.firstName;
let personLastName = person.lastName;

personFirstName
personLastName

-------------------------
-------------------------
-------------------------

// Accessing Objects the New way

let { firstName, lastName } = person;

firstName
lastName

// We can also RENAME the variables with the New way

let { firstName: fName, lastName: lName } = person;

fName
lName

// If you destruct a property that does not exist, you will get an undefined object.

// Setting default values when destructuring variables.

let person = {
    firstName: 'John',
    lastName: 'Doe',
    currentAge: 28
};

let {firstName, lastName, middleName = '', currentAge: age = 20 } = person;

console.log(middleName); // value set to '' because the value was not in the original object
console.log(age); // value set to 28 ... this is because it was set in the original object

-------------------------
-------------------------
-------------------------

// Array destructuring that allows assigning element of the array to variables:
const arr = [1, 2, 3];
let [x, y, z] = arr;

let [a, b, c, d] = [1, , 3, 4]; // skipped 'b' by leaving the corresponding value blank in the deconstruction

// Assigning remaining elements to a single variable using the 'spread syntax':

const names = ['Joe', 'Jane', 'Steve', 'Rick'];

// destructuring assignment in arrays
// assigning remaining elements to y

const [x, ...y] = names;

console.log(x); // Joe
console.log(y); // ['Jane', 'Steve', 'Rick']

// this also works on objects as well by selecting some variables and the rest are stored in a single object variable. Spread syntax must be the last element of the destructure.

// Swapping variables

let name1 = 'Joe';
let name2 = 'Jane';

[name1, name2] = [name2, name1];

// destructuring functions that return 'null' will cause an error unless you add the or '|| {}' at the end.

function getPerson() {
    return null;
}

let { firstName, lastName } = getPerson() || {};

console.log(firstName, lastName); // undefined undefined... but not an error!

//nested object destructuring

I don't get it...

// arrow functions

I don't get that either...