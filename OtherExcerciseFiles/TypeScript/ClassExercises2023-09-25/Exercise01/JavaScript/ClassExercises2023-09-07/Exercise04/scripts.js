// Exercise04
// Objective: Understand the differences between Local and Global Scope.

// Instructions:

// 1. Declare a global variable outside of any function.
// 2. Create a function that tries to modify that global variable.
// 3. Create another function that declares a local variable with the same name.
// 4. Observe the behavior when calling both functions.


// Declare a global variable here
let fullName = "John Doe"; // declares a global variable

function modifyGlobal() {
    // Try to modify the global variable here
     fullName = "Jane Doe";
     console.log(fullName);
}
console.log(fullName);
modifyGlobal();

function localScopeTest() {
    // Declare a local variable with the same name as the global variable
     let fullName = "Homer Simpson";
     console.log("This is from localScopeTest: ",fullName);
}

// Call both functions here
localScopeTest();