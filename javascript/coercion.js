/**
 * JavaScript internally uses Abstract Operations
 * for type conversions
 */

console.log(1 - 10); // -9
console.log(1 - "453"); // 1- 453 = -452
console.log(1 - null); // 1 - 0 = 1
console.log(1 - undefined); // 1 - NaN = NaN
console.log(1 - "12tyr04"); // 1 - NaN = NaN
console.log(1 - "0xa"); // 1 - 10 = -9

console.log(1 + 10); // 11
console.log(1 + "453"); // "1" + "453" = 1453
console.log(1 + null); // 1 + 0 = 1
console.log(1 + undefined); // 1 + NaN = NaN
console.log(1 + "23tyR1"); // "1" - "23tyR1" = 123tyR1
console.log(1 + "0xa"); // "1" + "0xa" = 10xa
