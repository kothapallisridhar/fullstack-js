function pattern4(n) {
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
pattern4(5);
