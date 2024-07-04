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

let obj = function () {
  console.log(this.getDetails());
};
let x = obj.bind(player1);
x();
