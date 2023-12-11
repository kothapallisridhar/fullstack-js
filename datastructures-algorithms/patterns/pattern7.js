//   *       *
//   **     **
//   ***   ***
//   **** ****
//   *********
//   **** ****
//   ***   ***
//   **     **
//   *       *
function upperComponent(n) {
  for (let row = 1; row <= (n - 1) / 2; row++) {
    let str = "";
    let space = n - 2 * row;
    for (let i = 1; i <= row; i++) {
      str += "*";
    }
    for (let j = 1; j <= space; j++) {
      str += " ";
    }
    for (let k = 1; k <= row; k++) {
      str += "*";
    }
    console.log(str);
  }
}
function middleComponent(n) {
  str = "";
  for (let i = 1; i <= n; i++) {
    str += "*";
  }
  console.log(str);
}
function lowerComponent(n) {
  for (let row = 1; row <= (n - 1) / 2; row++) {
    let star = (n - 1) / 2 - row + 1;
    let space = n - 2 * row;
    let str = "";
    for (let i = 1; i <= star; i++) {
      str += "*";
    }
    for (let j = 1; j <= 2 * row - 1; j++) {
      str += " ";
    }
    for (let k = 1; k <= star; k++) {
      str += "*";
    }
    console.log(str);
  }
}
function pattern7(n) {
  upperComponent(n);
  middleComponent(n);
  lowerComponent(n);
}
pattern7(9);
