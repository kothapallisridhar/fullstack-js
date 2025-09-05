
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