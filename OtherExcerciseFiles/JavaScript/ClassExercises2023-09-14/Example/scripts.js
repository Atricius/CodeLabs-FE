// Observer Pattern
// define clas
class Subject{
     // instance property
     observers = [];

     // add observer to list
     subscribe(observer) {
          // added subscription
          this.observers.push(observer)
     }

     // remove observer from list
     unsubscribe(fn) {
          // filter or splice/indexOf
          this.subscribers = this.subscribers.filter((item) => item !== fn);
     }
     // alerts subscribers can be with information
     notify(data) {
          // iterate through observers and execute each observer method
          this.observers.forEach((observer) => {
               observer(data);
          })
     }
}

// create subject instance
const subject = new Subject;


// create observers
const observer = (data) => {
     console.log("This is the observer." + data);
}

// add observer to subcription list from subject
subject.subscribe(observer);

const notify = (" Lt. Commander Data")

subject.unsubscribe(observer);
???

-------------------------------
-------------------------------
-------------------------------

// Async/Await

