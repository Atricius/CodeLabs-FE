// Exercise01
//Given the code snippet. Explain what scopes are in this current context of the code.
function outerFunction() {
	let outerVar = "I'm outside!";

	function innerFunction() {
		let innerVar = "I'm inside!";
		console.log(outerVar); // Can we access outerVar?
		console.log(innerVar); // Can we access innerVar?
	}

	innerFunction();
}

outerFunction();

//outerFunction() would be global scope
//innerFunction() would be local scope or functional scope
//both functions would be functional scopes if they are part of a larger module