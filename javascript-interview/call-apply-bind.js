
let name1 = {
    firstname: "Sridhar",
    lastname: "Kothapalli",
}

let printFullName = function(hometown, country) {
    console.log(this.firstname + " " + this.lastname + " from "+ hometown + ", " + country);
}

let name2 = {
    firstname: "Sachin",
    lastname: "Tendulkar",
}
// "call" method
// function borrowing
printFullName.call(name1, "Munich", "Germany");
printFullName.call(name2, "Mumbai", "India");

// "apply" method
printFullName.apply(name1, ["Stuttgart", "Germany"]);

// "bind" method
let printMyName = printFullName.bind(name1, "Berlin", "Germany");
console.log(printMyName);
printMyName();
