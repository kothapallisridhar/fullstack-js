obj = {
  name: "Sridhar",
  company: "Google",
  display: () => {
    console.log(this.name + " works at " + this.company);
  },
};

obj1 = {
  name: "Sridhar",
  company: "Google",
  display: () => {
    setTimeout(() => {
      console.log(this.name + " works at " + this.company);
    }, 2000);
  },
};

obj2 = {
  name: "Sridhar",
  company: "Google",
  display: function () {
    console.log(this.name + " works at " + this.company);
  },
};

obj.display();
obj1.display();
obj2.display();
