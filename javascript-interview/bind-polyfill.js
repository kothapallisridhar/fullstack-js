
// polyfill: browser fallback

let name1 = {
    firstname: "Sridhar",
    lastname: "Kothapalli",
}

let printName = function(hometown, country) {
    console.log(this.firstname + " " + this.lastname + " from " + hometown + ", " + country);
}

let printMyName = printName.bind(name1);
printMyName("Bremen", "Germany");

Function.prototype.mybind = function(...args) {
    let obj = this;
    let params = args.slice(1);
    return function(...args2) {
        obj.apply(args[0],[...params, ...args2])
    }
}

let printMyName2 = printName.mybind(name1, "Frankfurt");
printMyName2("Germany");