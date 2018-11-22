class Pizza {
  constructor(size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
  }

  addTopping(topping) {
    this.toppings = topping;
  }
} //blue-print the skeleton of the clasee

let pizza = {
  size: "large",
  crust: "thin",
  toppings: ["cheese"]
}; //fill the class
console.log("example: ", pizza);
let pizza1 = new Pizza(); // to create a new class based on the blueprint
// console.log(pizza1.toppings); // ["cheese"]
// pizza1.addTopping("mushrooms");
// pizza1.addTopping("peppers");
// console.log(pizza1.toppings); // ["cheese", "mushrooms", "peppers"]

const pizza1 = {
  toppings: ["cheese"], //pre-construct a property
  addTopping: function(topping) {
    this.toppings.push(topping);
  }
};

let pizza2 = new Pizza();
console.log(pizza2.toppings); // ["cheese"]
pizza2.addTopping("more cheese");
console.log(pizza2.toppings); // ["cheese", "more cheese"];
