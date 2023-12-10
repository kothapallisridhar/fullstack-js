function patternOne(n) {
  for (let row = 1; row <= n; row += 1) {
    let stars = "";
    let space = "";
    for (let col = 1; col <= n - row; col += 1) {
      space += " ";
    }
    for (let col = 1; col <= row; col += 1) {
      stars += "*";
    }
    console.log(space + stars);
  }
}
patternOne(6);
