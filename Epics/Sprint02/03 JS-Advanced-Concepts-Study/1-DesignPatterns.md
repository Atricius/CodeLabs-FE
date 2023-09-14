// Summary Notes: Provide a brief rundown of the significant points, insights, and observations for each video segment.
// Questions & Clarifications: Document any questions or aspects that are unclear, serving as a foundation for future learning or discussions.

Design Patterns Summary:
    A design pattern is a general, reusable solution to a commonly occurring problem within a given context. It is a description or template for how to solve a problem that can be used in many different situations. Design patterns are formalized best practices that programmers can use to solve common problems when designing an application or system. They typically show relationships and interactions between classes or objects, without specifying the final classes or objects involved.

Insight:
    Proper use of design patterns helps to keep your code organized and easier to reuse and maintain.

-------------------------
-------------------------
-------------------------

Builder Pattern:
    Summary:
        A function that takes an object as its argument and returns a new object with the properties of the original object and the properties that were added by the function.
    Usage:
        To build objects with many interlinking parts or fields that need to come together to create one single object.
Example:
class Address {
    constructor(zip, street) {
         this.zip = zip
         this.street = street
    }
}

class User {
    constructor(name, { age, phone = '1234567890', address } = {}) {
        this.name = name
        this.age = age
        this.phone = phone
        this.address = address
    }
}

let user = new User('Bob', {age: 10, phone: '11111', address: new Address ('1', 'Main')})
console.log(user)

-------------------------
-------------------------
-------------------------

Facade Pattern:
    Summary:
        Lets you build code using a non-optimized solution that you can replace with an optimal solution later.
    Usage:
        To make it easier to change your code in the future by making the needed changes in fewer places.
Example:
function getUsers() {
    return getFetch('https://jsonplaceholder.typicode.com/users')
}

function getUserPosts(userId) {
    return getFetch('https://jsonplaceholder.typicode.com/posts', {
        userId: userId
    })
}

getUsers().then(users => {
    users.forEach(user => {
        getUserPosts(user.id).then(posts => {
            console.log(user.name)
            console.log(posts.length)
        })
    })
})

//function getFetch(url, params = {}) { //facade pattern - fetch
//    const queryString = Object.entries(params).map(param => {
//        return `${param[0]}=${param[1]}`
//    }).join('&')
//    return fetch(`${url}?${queryString}`, {
//        method: "GET",
//        headers: { "Content-Type": "application/json" }
//    }).then(res => res.json())
//}

function getFetch(url, params = {}) { //facade pattern - axios
    return axios({
        url: url,
        method: "GET",
        params: params
    }).then(res => res.data)
}

-------------------------
-------------------------
-------------------------

Observer Pattern:
    Summary:
        An object (the subject) maintains a list of dependents (observers) and notifies them wen state changes, usually by calling a broadcast method. RxJS uses observables often.
    Usage:
        To 
Example:
    // EventTarget.addEventListener()

function createObservable () {
    return {
        subscribers: [],

        subscribe(fn) {
            this.subscribers.push(fn);
        },
        unsubscribe(fn) {
            this.subscribers = this.subscribers.filter((item) => item !== fn);
        },
        broadcast(data) {
            for(let i = 0; i < this.subscribers.length; i++) {
                this.subscribers[i](data);
            }
        },
    };
}

const observer = createObservable();

const fn = (data) => {
    console.log("Callback was executed with data", data);
};

observer.subscribe(fn);

Observer.broadcast("Hello from the observable");


<html>
    <body>
        <div> id="count">0</div>

        <button id="inc">+</button>
        <button id="dec">-</button>

        <script defer>
        function createObservable() {
            const observer = createObservable();
            function callbackFn(count) {
                document.getElementById("count").innerText = count;
            }

            observer.subscribe(callbackFn);
            document.getElementById('inc').addEventListener("click", function () {
                observer.broadcast(
                    parseInt(document.getElementById("count").innerText, 10) + 1
                );
            });
            document.getElementById('dec').addEventListener("click", function () {
                observer.broadcast(
                    parseInt(document.getElementById("count").innerText, 10) - 1
                );
            });
        }
        </script>
    </body>
</html>
