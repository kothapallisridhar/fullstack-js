Promise.resolve("foo")
  .then(function p1(string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        string += "bar";
        resolve(string);
      }, 10000);
    });
  })
  .then(function p2(string) {
    setTimeout(() => {
      string += "baz";
      console.log(string);
    }, 1);
    return string;
  })
  .then(function p3(string) {
    console.log(string);
  });
