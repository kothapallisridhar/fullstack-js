const GITHUB_API = "https://api.github.com/users/akshaymarch7";

const user = fetch(GITHUB_API); // fetch() returns a promise

// promise states: pending, fulfilled, rejected
// data returned by promise is immutable

console.log();
console.log(user);

user.then(function (data) {
  console.log(data);
});
