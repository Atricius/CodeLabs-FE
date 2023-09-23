// Exercise01
// Objective: Understand the Observer design pattern.

// Instructions:

// Add methods to the Subject class to addObserver, removeObserver, and notifyObservers.
// When notifyObservers is called on a Subject instance, each observer's update method should be invoked.
// Instantiate the Subject and add multiple observers. Afterward, call notifyObservers and ensure each observer gets updated.


class Subject {
	constructor() {
		this.observers = [];
	}
	// Add methods here
	addObserver(value){
		this.observers.push(value)
	}

	removeObserver(observer){
		this.observers = this.observers.filter(sub => sub !== observer)
	}

	notifyObservers(){
		this.observers.forEach(sub => sub.update())
	}
}

class Observer {
	update() {
		console.log('Observer updated!');
	}
}

const subject = new Subject;
console.log(subject);
const observerOne = new Observer;
subject.addObserver(observerOne)
subject.notifyObservers();
console.log(subject);