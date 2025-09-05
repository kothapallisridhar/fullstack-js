console.log("JavaScript");

const dhoni = {
    name: "Mahendra Singh Dhoni",
    age: 42,
    isCaptainCool: true,
    teams: ["India", "CSK"],
    stats: {
        matches: 538,
        runs: 17266,
        centuries: 16,
    },
    retire: function() { 
        return `${this.name} retired from International cricket in 2020.`
    }
}

console.log(dhoni.retire());

console.log(dhoni.name);
console.log(dhoni.stats.runs);
console.log(dhoni.teams[0]);
console.log(dhoni.retire());

console.log(Object.keys(dhoni));
console.log(Object.values(dhoni));
console.log(Object.entries(dhoni));

let student = {
    name: "Sridhar",
    phone: 8877788777,
    address: "Munich, Germany",
    marks: 99,
}

console.log(student.hasOwnProperty("marks"));

const student1 = Object.create(student);
console.log(student1);
console.log(student1.hasOwnProperty("marks")); // "marks" property is in the parent.
console.log(student1.marks);

console.log("marks" in student1); // checks the "marks" in the entire prototype chain