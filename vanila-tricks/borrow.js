let hero = {
  name: "bhuvan",
  classA: "G-CLASS",
  area: "DownTown",
};

function borrowFunction(funOwner) {
  return this.name + "" + this.classA + " " + funOwner;
}

// Call Method with the provided Context | You can also arguments value in array form as well
console.log(
  borrowFunction.call(hero, [
    "Call Method with array passing as paramater  is the Owner",
  ])
);
console.log(
  borrowFunction.call(hero, "Call Method without passing array is the Owner")
);

// apply Method with the provided Context | You can also pass value in array form as well
// If you pass object in that it will take as object object
console.log(borrowFunction.apply(hero, ["Apply Method is the Owner"]));

//  bind Method with the provided Context | You can also pass arguments in sting form as well
console.log(borrowFunction.bind(hero, ["bind Method is the Owner"])());
