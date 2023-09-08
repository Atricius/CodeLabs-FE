// Exercise02
// Draft a JavaScript function where you call a function before its declaration.
// Analyze the behavior and understand how hoisting impacts the outcome.

function mainFunction() {
	// Call the hoistedFunction here
     return hoistedFunction();
     // Now, declare the hoistedFunction below
     function hoistedFunction(){
          console.log("hoisted")
     }
}

mainFunction();

