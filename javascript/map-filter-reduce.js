const arr = [5, 4, 6, 7, 9, 8, 3, 2, 12, 16, 18, 19, 22, 25, 29];

const doubleArr = arr.map(x => 2*x);
console.log(doubleArr)

const oddArr = arr.filter(x => x%2 === 1);
console.log(oddArr);

const evenArr = arr.filter(x => x%2 === 0);
console.log(evenArr);