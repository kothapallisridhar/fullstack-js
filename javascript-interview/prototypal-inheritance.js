// 

//let arr = ["Sridhar", "Surya"];

// function fun() {
// }

let object = {
    name: "Sridhar",
    city: "Munich",
    getIntro: function() {
        console.log(this.name + " from " + this.city);
    }    
}

let object2 = {
    name: "Aditya"
}

// never do this in your coding due to performance issues
object2.__proto__ = object;

Function.prototype.mybind = function() {
    console.log("mybind");
}

function fun() {

}

function fun2() {

}