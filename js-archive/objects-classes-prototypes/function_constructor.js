function Product(n, p, d) {
  this.name = n;
  this.price = p;
  this.desc = d;
  //return this;
}
const p = new Product("bag", 100, "cool new bag");
console.log(p);
