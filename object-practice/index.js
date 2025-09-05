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