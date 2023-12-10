function pattern5(n) {
  for (let row = 0; row < n; row++) {
    let str = "";
    for (let j = 1; j <= n - row; j++) {
      str += "*";
    }
    console.log(str);
  }
}
pattern5(5);
