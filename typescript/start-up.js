var marks = 100;
var isLight;
var myName;
var id;
var user;
user = {
    name: "Sri",
    age: 36,
    isAdmin: true,
};
//user = {};
console.log(user);
var hobbies;
hobbies = ["sports", "reading", "cooking"];
console.log(hobbies);
function add(a, b) {
    return a + b;
}
function calculate(a, b, calcFn) {
    var result = calcFn(a, b);
    console.log(result);
}
calculate(6, 8, add);
// Union of types
var idNum = "1212";
idNum = 1212;
console.log(idNum);
var ids = [1, 2, 3, 4, 5];
console.log(ids);
var hetero = ["Sridhar", 9, true];
console.log(hetero);
// arrays in the form of typed tuple
var hetero1 = ["Sridhar", 7, true];
console.log(hetero1);
var idAny = "Sridhar1212";
idAny = 1212;
console.log(idAny);
