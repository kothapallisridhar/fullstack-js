class Product {
  name;
  price;
  description;
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
    // return 10; // primitive => no effect
    // return {x:10}
    // return this;  // if you don't return anything, it is equal to saying return this
  }
  display() {}
}
const p = new Product("bag", 100, "cool new bag");
console.log(p);
