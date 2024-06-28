let name = {
  firstName: "Sridhar",
  lastName: "Kothapalli",
};

let printFullname = function (city, state) {
  console.log(
    this.firstName + " " + this.lastName + " is from " + city + ", " + state
  );
};

let name2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

// function borrowing
printFullname.call(name, "Munich", "Germany");
printFullname.apply(name2, ["Mumbai", "Maharashtra"]);

// bind method
let printDetails = printFullname.bind(name, "Bremen", "Germany");
printDetails();
