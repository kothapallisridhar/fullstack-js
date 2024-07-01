let sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    } else {
      return a;
    }
  };
};

let sumES6 = (a) => (b) => b ? sumES6(a + b) : a;

console.log(sum(10)(20)(30)(6)());
console.log(sumES6(1)(2)(3)());
