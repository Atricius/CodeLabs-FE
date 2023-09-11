class Player {
    age = 20;
    constructor(name, hp, mp, items) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items = items;
    }

    speak(phrase) {
        console.log(`${this.name} says: ${phrase}`);
    }
}

const hanSolo = new Player("Han Solo", 100, 10, ["blaster"]);
hanSolo.speak("Never tell me the odds!");
hanSolo.age = 50;
console.log(hanSolo);
console.log(Object.getOwnPropertyNames(hanSolo));
console.log(Object.getOwnPropertyNames(hanSolo.__proto__));
console.log(hanSolo.items); //lists just the items

const nader = new Player("Nader", 10, 5, ["Computer"]);
nader.speak("Monkeys are the best animal!");
console.log(nader);
console.log(Object.getOwnPropertyNames(nader));
console.log(Object.getOwnPropertyNames(nader.__proto__));
console.log(nader.items); //lists just the items

function AnotherPlayer(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
    }

AnotherPlayer.prototype.speak = function (phrase) {
    console.log(`${this.name} says: ${phrase}`);
    }

const darthVader = new AnotherPlayer("Darth Vader", 200, 50, ["Lightsaber"]);
darthVader.speak("I find your lack of faith disturbing.");
console.log(darthVader);
console.log(Object.getOwnPropertyNames(darthVader));
console.log(Object.getOwnPropertyNames(darthVader.__proto__));
console.log(darthVader.items); //lists just the items
