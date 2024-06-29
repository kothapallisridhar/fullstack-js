let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyClosure = function (x) {
  return function (y) {
    return x * y;
  };
};

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(10));
let multiplyByThree = multiplyClosure(3);
console.log(multiplyByThree(6));
