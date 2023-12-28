let marks: number = 100;
let isLight: boolean;
let myName: string;
let id: number | string;
let user: object;

type StringOrNumber = string | number;
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};
type addFn = (a: number, b: number) => number;
user = {
  name: "Sri",
  age: 36,
  isAdmin: true,
};
//user = {};
console.log(user);

let hobbies: Array<string>;

hobbies = ["sports", "reading", "cooking"];

console.log(hobbies);

function add(a: number, b: number): number {
  return a + b;
}
function calculate(
  a: number,
  b: number,
  calcFn: (a: number, b: number) => number
) {
  const result = calcFn(a, b);
  console.log(result);
}

calculate(6, 8, add);

// Union of types
let idNum: string | number = "1212";
idNum = 1212;
console.log(idNum);

let ids: number[] = [1, 2, 3, 4, 5];
console.log(ids);

let hetero: (number | string | boolean)[] = ["Sridhar", 9, true];
console.log(hetero);

// arrays in the form of typed tuple
let hetero1: [string, number, boolean] = ["Sridhar", 7, true];
console.log(hetero1);

let idAny: any = "Sridhar1212";
idAny = 1212;
console.log(idAny);
