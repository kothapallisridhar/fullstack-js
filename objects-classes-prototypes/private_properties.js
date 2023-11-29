class Product {
  #name;
  #price;
  description;
  set name(n) {
    if (typeof n != "string") {
      console.log("invalid name passed");
      return;
    }
    this.#name = n;
  }
  set price(p) {
    if (p < 0) return;
    this.#price = p;
  }
  get name() {
    return this.#name;
  }
  get price() {
    return this.#price;
  }
  display() {
    console.log(this.#name, this.#price, this.description);
  }
}

const p = new Product("bag", 200, "cool new bag");
p.name = "LV";
p.price = 500;

p.display();
