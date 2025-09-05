// Global execution context (GEC)


// hoisting
console.log(x);
//console.log(y);
var x = 10;
//let y = 12;
print();
//add();
function print() {
    console.log("Hello");
}

var add = function() {
    console.log("Addition!");
}

function test() {
    console.log(a);
    var a = 20;
    console.log(a);
}

test();
console.log(globalThis); // window
var userName = "Sridhar";
let marks = 100;
let percentage = 99.8;
console.log(window === this); // true
// let and const are hoisted but they will be in TDZ(Temporal Dead Zone)