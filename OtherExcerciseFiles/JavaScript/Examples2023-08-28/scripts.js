//functions

const hero = {
          name: 'Bruce Wayne',
          alias: 'Batman',
          catchphrase: 'To the Batcave!',
          speak: function() {
               return 'Atention! ' + this.catchphrase;
          },
          attack: function(sound) {
               //return '(punches bad guy)' + sound;
               return `(punches bad guy) ${sound}`;
          }
     };


// access a property
     const thingToLookFor = 'alias';

     console.log(hero.name);
     console.log(hero['name']);
     console.log(hero[thingToLookFor]);

// accessing methods (functions)
     console.log(hero.speak());
     console.log(hero.attack('POWWWWW'));


const first = 'this is a string';
const second = String('this is a string');
// console.log('this is a string'.toUpperCase());
// console.log(String('this is a string').toUpperCase());
// Boolean();
// console.log(first === second);

console.groupCollapsed('Primitives vs Objects');
console.log(first === second);
console.log(
     typeof first,
     typeof String('this is a string'),
     typeof new String()
);
console.groupEnd();


//strings
const sentence = 'this is my sentence';
console.groupCollapsed('String');
console.log(first.toUpperCase());
console.log(second.toLowerCase());
console.log(sentence.startsWith('this is'));
console.log(' :) '.repeat(10));
console.log('look at me go     '.trim());
console.groupEnd();

// numbers and math
console.group('Numbers and Math');
     console.log(1..toString());
     console.log((1).toString());
     console.log(Number.isInteger(5));
     console.log(Number.isInteger(5.43));
     console.log((1.562342).toFixed(2));
     console.log(
          Math.random().toFixed(2),
          Math.ceil(1.56),
          Math.floor(6.3)
     );
console.groupEnd();

//Arrays
const myArr = ['chris', 'nick', 'holly'];
console.group('Arrays');
     console.log(myArr.length);
     console.log(myArr.join('-'));
     console.log(myArr.push('ado'), myArr);
     console.log(myArr.pop(), myArr);

     myArr.forEach(function(user) {
          console.log(user); 
     }); //same as below
     
     myArr.forEach((user) => console.log(user)); //same as above

console.groupEnd();

function personalizeGreeting(name) {
     console.log('Hello, ' + name() + ' Now walk the plank!');
 }
 console.log('Hello, ' + personalizeGreeting() + ' Now walk the plank!');