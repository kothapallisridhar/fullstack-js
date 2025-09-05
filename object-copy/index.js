console.log("JavaScript");

let student = {
    studentName: "Sridhar",
    phone: 8877788777,
    address: "Berlin, Germany",
}

const obj1 = {a: 1, b: 2};
const obj2 = {b: 3, c: 4};

let obj3 = Object.assign({}, obj1, obj2);

console.log("obj3: ", obj3);

const target = {a: 1};

Object.assign(target, {b: 2}, {c: 3});
console.log("target: ", target);

