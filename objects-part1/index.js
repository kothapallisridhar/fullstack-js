console.log("JavaScript");

/* let student2 = {
    name: "Sridhar",
    phone: 8870188888,
    address: "Munich, Germany"
};

console.log(student2); */

class Book {
    constructor(title, price, nPages, author) {
        this.title = title;
        this.price = price;
        this.noOfPages = nPages;
        this.author = author;
    }
}

class Student {
    static COLLEGE_NAME = "Technical University Munich";
    constructor(name, phone, address) {
        this.name = name;
        this.phone = phone;
        this.address = address;
    }
}

let student1 = new Student("Sri", 8870188888, "Munich, Germany");
console.log(student1 instanceof Student);
console.log(student1);
console.log(Student.COLLEGE_NAME);
let obj = new Object();
console.log(obj);

// object creattion using object literals

let student = {
    name: "Sridhar",
    phone: 8877788777,
    address: "Berlin, Germany",
}

console.log(student);