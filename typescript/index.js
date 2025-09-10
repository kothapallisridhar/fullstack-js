var firstName = "SaiSarath";
//firstName = '';
var json = JSON.parse("55");
console.log(typeof json);
console.log(firstName);
var userName = "Deiter";
userName = 3;
var otherName;
var secondName;
otherName = 'Klaas';
//let sec = secondName as String;
var sec = secondName;
sec = "Jane";
sec = "Stephane";
//otherName = 2;
//otherName = true; 
var x;
var w;
var y = undefined;
var z = y;
z = 3;
var n = null;
// arrays
var names = ["Klaas", "Lene", "Jane", "Kene"];
var morenames = ["Kothapalli", "Sridhar"];
//morenames.push("Sridhar");
// tuple
// datatypes to be defined, length is fixed
var ourTuple;
ourTuple = [3, true, "Codepro"];
console.log(ourTuple);
var num = ourTuple[0], bool = ourTuple[1], str = ourTuple[2];
console.log("destructured values: ", num, bool, str);
console.log(ourTuple);
//ourTuple.push("something"); // works without readonly
console.log(ourTuple);
console.log(names[0]);
// object type
// let car:{make:string, model:string, year:number} = {
//     make: 'Lamborghini',
//     model: 'Urus',
//     year: 2025,
// }
var car = {
    make: 'Ferrari',
};
car.mileage = 7;
var nameAgeMap = {};
nameAgeMap.Jack = 25;
// enum
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 1] = "North";
    CardinalDirections[CardinalDirections["East"] = 2] = "East";
    CardinalDirections[CardinalDirections["South"] = 3] = "South";
    CardinalDirections[CardinalDirections["West"] = 4] = "West";
})(CardinalDirections || (CardinalDirections = {}));
console.log('North', CardinalDirections.North);
console.log('East', CardinalDirections.East);
console.log('South', CardinalDirections.South);
console.log('West', CardinalDirections.West);
var currentDirection = CardinalDirections.North;
console.log(currentDirection);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
var sume = 'Sunil';
var carYear = 2025;
var carMake = 'Porsche';
var carModel = 'Panamera';
var car2 = {
    year: carYear,
    make: carMake,
    mode: carModel,
};
var rectangle = {
    height: 20,
    width: 10,
    color: 'golden',
};
var status = 404; // union 
status = "client error"; // union. either string or number type can be assigned
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
function multiply(a, b, c) {
    return a * b * (c || 1);
}
console.log(multiply(3, 5));
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 }));
function add(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    console.log(rest);
    return a + b + rest.reduce(function (p, c) { return p + c; }, 0);
}
console.log(add(1, 2, 3, 4, 5, 6, 7));
