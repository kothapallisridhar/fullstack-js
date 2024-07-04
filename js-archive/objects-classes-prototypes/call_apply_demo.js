player1 = {
  firstname: "Virat",
  lastname: "Kohli",
  battingOrder: 3,
  canBowl: false,
  getDetails: function () {
    console.log(
      this.firstname,
      this.lastname,
      " comes at No.",
      this.battingOrder
    );
  },
};

let obj = function (x, y) {
  console.log("Sum:", x + y);
  console.log(this.getDetails());
};
obj.call(player1, 23, 56);
obj.apply(player1, [23, 46]);
