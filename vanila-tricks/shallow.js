const shallow = {
  shallowName: "shallowD",
  shallowClass: "shallowG",
  shallowFeatures: {
    shallowPattern: {
      underStanding: "Aplhabet",
    },
  },
};

// without spread operator

// const shallowCopy = shallow;

// if you use Spread Operator Copy Object it will still not change because its not create there own copy of object in call stack

const shallowCopy = { ...shallow };

shallowCopy.shallowFeatures.shallowPattern = "hello";

console.log(shallow.shallowFeatures.shallowPattern, "shallowCopy");
