// arrays are custom objects in JS
// index of element is the key and the element itself is the value

// Higher Order Functions: These are functions that depends & operate on other function. Higher Order Functions takes another function as an argument or return a function as an argument.

/**
 * map function
 *
 */
const arr = [1, 2, 3, 4, 5];

function square(el) {
  return el * el;
}

const result = arr.map(square);
console.log(result);

/** If the function that we are passing in map takes two arguments then the first argument will be a accessing the actual value and the second argument will be accessing index of that value. */

function fun2(el, ind) {
  console.log(`Element at index ${ind} is ${el}`);
}
arr2 = [15, 32, 66, 64, 83, 89];
arr2.map(fun2);
