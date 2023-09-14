// Summary Notes: Provide a brief rundown of the significant points, insights, and observations for each video segment.
// Questions & Clarifications: Document any questions or aspects that are unclear, serving as a foundation for future learning or discussions.

JavaScript has seen massive improvements to its syntax and functionality over the last few years with the additional of a bunch new features. One of the most useful of those new features is the Spread operator 

**( aka the `...` operator)**

Spread is super useful, but its syntax is not particularly meaningful upon first glance.  It doesn't really tell you much as to what it does. Fortunately, once you learn the 3 main uses for Spread, it will become on of your favorite tools in the JS toolbox!

According to MDN:

> Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
> 

Basically, there are three places you can use spread: 

1. In function calls
2. In array literals
3. In object literals

## Spread & Functions

When passing arguments to a function, we can use spread to expand an itererable element. Rather than having to pass each argument individually, we can "spread" out each item as its own argument.  

`Math.min` is a function which accepts any number of arguments and returns the minimum value.  If we wanted to find the minimum value of an array, it doesn't work to pass the entire array in:

const temperatures = [76,72,68,79,54,65];
Math.min(temperatures) // NaN

Instead, we can use spread to expand our array, passing in each element as an argument:

const temperatures = [76,72,68,79,54,65];
Math.min(...temperatures) // 54
//the same as Math.min(76,72,68,79,54,65)

Here's one more example using console.log.  If we pass an entire array to console.log

const tvShows = ["Six Feet Under", "Chernobyl", "Black Mirror", "Fleabag" ]
console.log(tvShows); // ["Six Feet Under", "Chernobyl", "Black Mirror", "Fleabag"]

The entire array is treated as one argument.

### **Other Iterables**

We can also spread arguments on any iterable expression, like strings and sets:

console.log("this s#@* is bananas: ", ..."BANANAS"); // this s#@* is bananas: B A N A N A S

## Spread & Array Literals

### Combining Arrays

We can also use spread syntax to create new arrays using existing arrays. For example, to combine two arrays we could do this:

```python
const parents = ["Lorie", "Steve"];
const kids = ['Jake', "Annie", "Jess"];

const fullFamily = [...parents, ...kids];
//["Lorie", "Steve", "Jake", "Annie", "Jess"]
```

We can use spread as many times as we want in a given expression:

```jsx
const parents = ["Lorie", "Steve"];
const kids = ['Jake', "Annie", "Jess"];
const dogs = ['Olie', 'Cosmo'];

const fullFamily = [...parents, ...kids, "Me", ...dogs, "Unnamed Turtle"];
//["Lorie", "Steve", "Jake", "Annie", "Jess", "Me", "Olie", "Cosmo", "Unnamed Turtle"]
```

### Copying An Array

Spread is also commonly used to create a copy of an array.

> ["Mona Lisa", "American Gothic", "The School of Athens"]
> 

<aside>
⚠️ Important Note: Spread only goes "one level" deep when copying an array.  It does not perform a deep copy of nested arrays!

</aside>

```jsx
const gameBoard = [['O','O'],['O','O'],['O','O']];
const boardCopy = [...gameBoard];
gameBoard[1][0] = "X";

//BOTH NOW LOOK LIKE THIS:
//[["O", "O"],["X", "O"],["O", "O"]]
```

## Spread & Object Literals

Just like with arrays, we can use spread to combine existing objects:

```jsx
const mainColors = {brightRed: "#e55039", waterfallBlue: "#38ada9"};
const accentColors = {lightGrey: "#778ca3", swanWhite: "#f7f1e3"};

const fullPalette = {...mainColors, ...accentColors};
//{brightRed: "#e55039", waterfallBlue: "#38ada9", lightGrey: "#778ca3", swanWhite: "#f7f1e3"}
```

Here's one more example where we add in a property:

## Spread & Immutability

In frameworks like React, it's important not to mutate specific data (the state, specifically).  Because of the way React is written, updating arrays & objects directly in the state can cause issues where your app does not render or re-render when it should.   You'll often see spread used in this context.

Here's a simple example of what NOT to do..  We have an array of todos, and we want to add a new todo to the end of that array.  The "easy" way is to simply push on to todos, BUT THAT MUTATES THE ARRAY!

```jsx
const todos = [
	{user: "Brick", completed: false, task: "Upload Video"},
	{user: "Lilith", completed: true, task: "Rob Bank"}
]

function addTodo(newTodo){
  todos.push(newTodo);
}
```

Rather than mutating the todos array directly, we should instead make a copy of the todos array that also contains the newTodo added at the end.  Spread makes this relatively easy:

const todos = [
	{user: "Brick", completed: false, task: "Upload Video"},
	{user: "Lilith", completed: true, task: "Rob Bank"}
]

function addTodo(newTodo){
  return [...todos, {...newTodo, completed: false}]
}

const newTodos = addTodo({user: "Mordecai", task: "Feed Bloodwing"});
