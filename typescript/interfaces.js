var Car = /** @class */ (function () {
  function Car(name) {
    this.name = name;
  }
  Car.prototype.display = function (name) {
    console.log("Car name", this.name);
  };
  return Car;
})();
var c = new Car("Porsche");
console.log(c);
var p1 = {
  name: "iPhone",
  price: 100000,
  model: "14 pro max",
  display: function () {
    console.log("Product", this);
  },
};
console.log(p1);
