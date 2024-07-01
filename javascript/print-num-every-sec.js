let printNumsUsingLet = () => {
  for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
};

let printNumsUsingVar = () => {
  for (var i = 1; i <= 10; i++) {
    function print(num) {
      setTimeout(() => {
        console.log(num);
      }, num * 1000);
    }
    print(i);
  }
};

printNumsUsingVar();
