// Scope Hoisting

// Global scope - Variables are accessible anywhere in the code and any files loaded after the variable is declared.

// Module scope - Like global scope, the variable is accessible anywhere in the code, but variable are not able to be used in other files loaded later (they can be explicitly exported to other modules, however).

//Block scope - Variables that are only accessible inside the object that declared the variable (created using 'const or 'let').

//Functional scope - Like block scope, the variable is only accessible inside the object that declared it, but may leak out (created using 'var' and should not be used unless you need to be able to redeclare or hoist it).

// Hoisting is JavaScripts default behavior where Variables and Function declarations are moved to the top of their scope before code execution.
    //Variable declarations may be hoisted, but the initialization is not. The variable will be 'undefined' if the variable is used before it is initialized (even though the declaration may have been hoisted).

    //Function declarations may be hoisted, but the initialization may not. If you initialize the function below where you call it, it will not be hoisted.

// Declaration
let game;
console.log(game); // undefined

// Initialization
game = "Super Mario";

// Usage
console.log(game); // Super Mario

