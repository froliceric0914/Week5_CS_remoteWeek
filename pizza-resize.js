class Pizza {
  constructor() {
    this.toppings = ["cheese"];
  }
  addTopping(topping) {
    this.toppings.push(topping);
  }
  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + this.toppings.length * toppingPrice;
  }

  //   set size(size) {
  //     // if (size === "s" || size === "m" || size === "l") {
  //     this.size = size;
  //     // }
  //   }
}

// DRIVER CODE
const pizza = new Pizza();
pizza.addTopping("mushroom");
pizza.size = "s";
console.log(pizza.price); // instead of getPrice()
console.log(pizza);
