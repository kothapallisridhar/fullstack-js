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

arr_tosort = [1, 3, 5, 18, 38, 4, 14, 8, 90, 67, 56, 54];

const sorted = arr_tosort.sort((a, b) => {
  // if a < b then a-b will be negative. If comparator function gives then a is placed before b (a < b).
  return a - b;
});

console.log(sorted);
/**
 * filter(): filters out the array based on the function passed
 */
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenArray = arr3.filter((el) => {
  return el % 2 == 0;
});
console.log("Even Array", evenArray);
