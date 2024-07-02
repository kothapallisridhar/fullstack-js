const GITHUB_API = "https://api.github.com/users/akshaymarch7";

const user = fetch(GITHUB_API); // fetch() returns a promise

// promise states: pending, fulfilled, rejected
// data returned by promise is immutable

// what is promise?
// a container for a future value
// A promise is an object representing eventual completion of an asynchronous operation.

console.log();
console.log(user);

user.then(function (data) {
  console.log(data);
});
