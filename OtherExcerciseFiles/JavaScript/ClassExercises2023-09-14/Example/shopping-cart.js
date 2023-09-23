class ShoppingCartSubject{
     //subcribers
     subscribers = [];
     items = [];

     addItem(item){
          this.items.push(item);
          this.notify();
     }
     subscribe(observer){
          this.subscribers.push(observer);
     }

     unsubscribe(observer){
          this.observers.filter(sub => sub !== observer);
     }

     notify(){
          this.subscrivers.forEach(sub => sub(this.items));
     }
}

const shoppingCartSubject = new ShoppingCartSubject;

// observer - dealing with the car number in the header
const observerCart = (items) => {
     console.log("Update cart");
     // <li id="header-cart">Cart(0)</li

     // step 1: get header cart element with document.getElementById
     const cartElem = document.getElementById("header-cart")
     // step 2: change the content with innerText
     cartElem.innerText = `Cart(${items.length})`;
}

// observer - adjust the pop up notification
const observerPopUpNotification = () => {
     console.log("Update Pop up notification")

     const popUpElem = document.getElementById("pop-up");

     popUpElem.innerText = `You have added ${items[items.length-1]}`

     popUpElem.style.display = "block";
     setTimeout(() => {
          // execut after 2 seconds
          popUpElem.style.display = "none";
     }, 2000)
}

shoppingCartSubject.subscribe(observerCart);
shoppingCartSubject.subscribe(observerPopUpNotification);