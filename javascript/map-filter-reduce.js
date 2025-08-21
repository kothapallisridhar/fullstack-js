const arr = [5, 4, 6, 7, 9, 8, 3, 2, 12, 16, 18, 19, 22, 25, 29];

// map
const doubleArr = arr.map(x => 2*x);
console.log(doubleArr)

// filter
const oddArr = arr.filter(x => x%2 === 1);
console.log(oddArr);

const evenArr = arr.filter(x => x%2 === 0);
console.log(evenArr);

// reduce
// find sum
const output = arr.reduce(function(acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);
console.log("sum is: ", output);

// reduce 
// find max number
const maxNum = arr.reduce(function(max, curr) {
    if(curr > max) {
        max = curr;
    }
    return max;
},0);
console.log("Max number is: ", maxNum);

const users = [
    { firstName: "Sridhar", lastName: "K", age: 25},
    { firstName: "Adi", lastName: "N", age: 46},
    { firstName: "Krishna", lastName: "R", age: 47},
    { firstName: "Surya", lastName: "Kumar", age: 58},
];

// list of full names
const fullNames = users.map(x => x.firstName + " " + x.lastName);
console.log("Full Names: ", fullNames);

// how many people are of a unique age groups
const output1 = users.reduce(function(acc, curr) {
    if(acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {})

console.log(output1);