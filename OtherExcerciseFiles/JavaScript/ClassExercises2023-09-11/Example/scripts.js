// global 'this'
console.log(this);

// implicit binding of 'this'
const person = {
  firstName: "Joe",
  lastName: "Anderson",
  printFullName: function() {
    console.log(`${this.firstName} ${this.lastName}`)
  },
  printFullName2: () => {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

person.printFullName();
person.printFullName2();

// explicit binding of 'this'
function printFullName() {
  console.log(`${this.firstName} ${this.lastName}`)
}
const person2 = {
  firstName: "Jane",
  lastName: "Doe"
};

printFullName.call(person2);

// constructor binding of 'this' (You generally won't see this being used)
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.printFullName = function() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
  this.printFullName2 = () => {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

const person3 = new Person("George", "Washington");
console.log(person3);
person3.printFullName();
person3.printFullName2();


//---------------------------------------
//---------------------------------------
//---------------------------------------


// Classes
class Car {
     constructor(make, model, topSpeed) {
         this.make = make;
         this.model = model;
         this.topSpeed = topSpeed;
     }
 
     get makeAndModel() {
         return `${this.make} ${this.model}`;
     }
 
     set makeAndModel(value) {
         [this.make, this.model] = value.split(' ');
     }
 
     drive() {
         console.log(
             `The ${this.make} ${this.model} is driving at a responsible speed`
         );
     }
 
     static compareTopSpeeds(car1, car2) {
         if (car1.topSpeed > car2.topSpeed) {
             console.log(
                 `The ${car1.makeAndModel} is faster than the ${car2.makeAndModel}`
             );
         } else if (car2.topSpeed > car1.topSpeed) {
             console.log(
                 `The ${car2.makeAndModel} is faster than the ${car1.makeAndModel}`
             );
         } else {
             console.log(
                 `The ${car1.makeAndModel} and the ${car2.makeAndModel} have the same top speed`
             );
         }
     }
 }
 const car = new Car('Toyota', 'Camry', 120);
 console.log(car);
 car.drive();
 // Getters & Setters
 console.log(car.makeAndModel);
 car.makeAndModel = 'Honda Civic';
 console.log(car.makeAndModel);
 // Inheritance
 class RaceCar extends Car {
     race() {
         console.log(
             `The ${this.makeAndModel} is racing down the track at ${this.topSpeed} miles per hour`
         );
     }
 
     drive() {
         console.log(
             `The ${this.makeAndModel} is driving at a responsible speed, and it looks really cool`
         );
     }
 }
 const raceCar = new RaceCar('Chevy', 'Corvette', 200);
 console.log(raceCar);
 raceCar.drive();
 raceCar.race();
 
 // Static Methods
 Car.compareTopSpeeds(car, raceCar);
 const car2 = new Car('Ford', 'Focus', '115');
 
 // Private Fields
 class Boat {
     #length;
     #price;
     #name;
     constructor(length, price, name) {
         this.#length = length;
         this.#price = price;
         this.#name = name;
     }
 
     get length() {
         return this.#length;
     }
 
     set length(newValue) {
         if (newValue <= 0) {
             console.log('Invalid length');
         } else {
             this.#length = newValue;
         }
     }
 }
 const boat = new Boat(50, 50000, 'Jenny');
 console.log(boat.length);
 boat.length = -5;


//---------------------------------------
//---------------------------------------
//---------------------------------------


 // Class example (used to make a list in HTML)
 class Potato {
    constructor(type, price, weight) {
        this.type = type;
        this.price = price;
        this.weight = weight;
    }

    get pricePerPound() {
        return this.price / this.weight;
    }
}

const potatoes = [
    new Potato('Russet', 5, 1),
    new Potato('Sweet', 3, 2),
    new Potato('Red', 0.5, 0.75),
];

console.log(potatoes);
console.log(potatoes[0].pricePerPound);

const listElement = document.getElementById('potatoes-list');

for (let potato of potatoes) {
    const listItemElement = document.createElement('li');

    listItemElement.innerText = `Type: ${potato.type}, Price: $${potato.price}, Weight: ${potato.weight}, Price Per Pound: ${potato.pricePerPound}`;
    listElement.appendChild(listItemElement);
}