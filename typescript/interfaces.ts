interface Product {
  name: string;
  price: number;
  model: string;
}

class Car {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  display(name) {
    console.log("Car name", this.name);
  }
}
let c = new Car("Porsche");
console.log(c);

interface Product {
  name: string;
  price: number;
  model: string;
  display(): void;
}
let p1: Product = {
  name: "iPhone",
  price: 100000,
  model: "14 pro max",
  display(): void {
    console.log("Product", this);
  },
};
console.log(p1);
