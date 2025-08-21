// Function Statement
a();
function a() {
    console.log("a called")
}
//a();

// Function Expression
//b();
var b = function() {
    console.log("b called")
}
//b();

// Function Anonymous Function
// => function without a name is called anonymous function
// can be used as values => assign it to a variable
var c = function() {

}

// Named Function Expression
var fe = function xyz() {
    console.log("fe called")
    console.log(xyz)
}

fe();
//xyz(); // cannot call named function

// Difference between Parameters & Arguments
var ap = function(param1, param2) {
    console.log(param1, param2)
}
ap(1,2) // 1,2 are arguments


// First Class Functions
// you can pass functions as an argument to another function,
// you can return a function from a function
/* 
 the ability of functions 
    to be used as values and 
    can be passed to another functions as arguments and 
    can be returned from functions
 
 functions are 
    first class citizens
*/

// Arrow Functions