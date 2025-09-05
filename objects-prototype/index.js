"use strict"

let animal = {
    eats: true,
    walk: function() {
        console.log("Animal walks!");
    }
}

let dog = {
    barks: true,
}

Object.setPrototypeOf(dog, animal);
//dog.__proto__ = animal;
console.log(dog.eats);
console.log(dog.walk());
console.log(Object.getPrototypeOf(dog));

console.log(Object.getPrototypeOf(animal));

let emptyObject = {};
Object.setPrototypeOf(emptyObject, null);
console.log("emptyObject: ", emptyObject);

let student = {
    name: "Sridhar",
    phone: 8877788777,
    address: "Munich, Germany",
}

console.log(student.hasOwnProperty("marks"));

const student1 = Object.create(student);
console.log(student1);
console.log(student1.hasOwnProperty("marks")); // "marks" property is in the parent.
console.log(student1.marks);

console.log("marks" in student1); // checks the "marks" in the entire prototype chain

console.log(Object.keys(student));
console.log(Object.values(student));

for(let key in student) {
    console.log(key); // key
}

for(let key in student) {
    console.log(student[key]); // value
}
console.log("----------------");

student1.marks = 100;

console.log(Object.keys(student1));

for(let key in student1) {
    console.log(key); // key
}

// Object.freeze()  --> to make an object immutable
// Object.seal() --> can update existing object properties


