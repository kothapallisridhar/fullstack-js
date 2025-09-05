console.log("JavaScript");

let student = {
    studentName: "Sridhar",
    phone: 8877788777,
    address: {city: "Berlin", country: "Germany"},
    // wish: function() {
    //     console.log("Happy Birthday");
    // },
}


let student2 = structuredClone(student);

console.log(student2);

