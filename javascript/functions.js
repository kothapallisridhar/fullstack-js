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



// Arrow Functions