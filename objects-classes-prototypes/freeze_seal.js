obj = {
  x: 10,
  y: 20,
};

Object.freeze(obj);
obj.x = 30;
obj.z = 39;

console.log("obj: ", obj);
obj1 = {
  x: 10,
  y: 20,
};
Object.seal(obj1);
obj1.x = 30;
obj1.z = 59;

console.log("obj1: ", obj1);
