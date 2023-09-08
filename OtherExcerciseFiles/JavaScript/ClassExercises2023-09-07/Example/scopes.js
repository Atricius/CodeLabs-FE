// Closures - return a function that references a variable or function to make it available in a different scope.

function counter(){
let count = 0;

     return {
          increment: function(){
               count++;
               return count;
          },
          decrement: function(){
               count--;
               return count;
          },
          getCount: function(){
               return count;
          }
     }
}

const myCount = counter();

console.log(myCount.getCount())

// myCount.increment()