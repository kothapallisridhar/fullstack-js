const GITHUB_API = "https://api.github.com/users/akshaymarch7";

const user = fetch(GITHUB_API); // fetch() returns a promise

console.log();
console.log(user);
