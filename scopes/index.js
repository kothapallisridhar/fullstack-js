let globalVar = "I am in hte global scope";

function outerFunction() {
    let outerVar = "I am in the outer scope";

    function innerFunction() {
        let inVar = "I am in the inner " 
    }
}


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