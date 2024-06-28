//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

function upperTriangle(n) {
  for (let row = 1; row <= n; row++) {
    let stars = "";
    let spaces = n - row;
    for (let j = 1; j <= spaces; j++) {
      stars += " ";
    }
    for (let s = 1; s <= 2 * row - 1; s++) {
      stars += "*";
    }
    console.log(stars);
  }
}
function lowerTriangle(n) {
  for (let row = 1; row <= n - 1; row++) {
    let str = "";
    let spaces = row;
    for (let j = 1; j <= spaces; j += 1) {
      str += " ";
    }
    let stars = 2 * (n - row) - 1;
    for (let k = 1; k <= stars; k += 1) {
      str += "*";
    }
    console.log(str);
  }
}
function pattern6(n) {
  upperTriangle(n);
  lowerTriangle(n);
}
pattern6(5);
