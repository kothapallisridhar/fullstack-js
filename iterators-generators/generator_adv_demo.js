function* fetchNextElement() {
  console.log("inside generator function");
  const x = 10;
  yield 11;
  console.log("entering after a yield");
  const y = x + (yield 30);
  console.log("value of y is:", y);
}

console.log("start");
const iter = fetchNextElement();
console.log("called generator");
console.log(iter.next());
console.log(iter.next());
console.log(iter.next(17));
