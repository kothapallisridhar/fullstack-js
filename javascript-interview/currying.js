
// sum(1)(2)(3)(4)

// let sum = function(x) {
//     return function(y) {
//         return function(z) {
//             return function(r) {
//                 return x + y + z + r;
//             }
//         }
//     }
// }

//console.log(sum(1)(2)(3)(4));

// ES6 format

// let sumES6 = a => b => c => d => a + b + c + d;
// console.log(sumES6(10)(20)(30)(40))

// using recursion
// let sum = function(a) {
//     return function(b) {
//         if(b) {
//             return sum(a + b);
//         }
//         return a;
//     }
// }

let sum = a => b => b? sum(a + b):a;
console.log(sum(1)(2)(3)(4)());

