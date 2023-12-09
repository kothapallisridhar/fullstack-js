// *
// * *
// * * *
function patternOne(n) {
  for (let row = 1; row <= n; row += 1) {
    let stars = "";
    for (let col = 1; col <= row; col += 1) {
      stars += "*  ";
    }
    console.log(stars);
  }
}
patternOne(6);
