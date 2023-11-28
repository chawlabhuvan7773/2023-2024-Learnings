/**
 * Notes
 * 1. This refers to an object
 * 2. The value of this depends on how the function is invoked
 *
 * Behaviour of this in a Function: this refers to window object
 * Behaviour of this in a object: this refers to the object
 *
 * Arrow Functions: Arrow Functions don't have defined this. Instead they treat
 * it as a variable and they try to get the value lexically (inherit from parent scope)
 * **/

/* What is lexically Scooped
In a lexically scoped language like JavaScript, for example, when you define a variable within a function,
that variable is only accessible within that function and any nested functions or blocks inside it. 
Variables defined outside of a function are considered to be in the global scope and are accessible from anywhere in the code.
*/

/* Example 1 */
console.log(this); // --> At this moment that is on the global level

function a() {
  var ab = "1";
  console.log(this.ab, "this"); // In this case it will be undefiend becausue its looking for global window variable
  // because it will target to there parent object, parent object mean is that this.ab is not in a function object
  // but if you put this ab out side of the this function then you will get the value because now the variable is decalred and initilize in the global object
}
// a();

/* Example 2*/
function ab() {
  var abvalue = "1";
  function testAbvalue() {
    //  (This is only for function not for methods in method its behave differently)
    console.log(this.abvalue, "this");
    // In this case that will be undefiend because that is in function not in method
    // function case it will always look around the global variable not the parent function variables
  }
  testAbvalue();
}
// ab();

/* Example 3*/
var abvalue = "1";
var abObj = {
  testAbvalue: function () {
    // In this case this is attached to abObj
    console.log(this.abvalue, "this Example 3"); // In that case that will be undefiend because it will is not able to find inside the parent object which is  abObj
  },
};
abObj.testAbvalue();

/* Example 4 with Arrow Function*/
let user = {
  name: "Piyush",
  age: 2,
  a: () => {
    console.log(this.age, "this user"); // in this case it will be undeiend because its
    // looking for value from the parent object or you can say to parent function but at this moment parent of the arrow is global not user object
    // this.age is only print the value when you wrapped in a function then that function parent object is user then it will print the value as 2
  },
};
user.a();

/* Example 5 with Arrow Function*/
let userArrow = {
  name: "Piyush",
  age: 2,
  a: () => {
    const nestedF = () => console.log(this.age); // In nested arrow function the value would be again undefiend because arrow funtion always look for global variable
    nestedF();
  },
};
userArrow.a();

/* Example 6 with Arrow Function*/
let userArrow2 = {
  name: "Piyush",
  age: 2,
  getDetails() {
    const nestedF = () => console.log(this.age); // in this case value will be present because its parent object is userArrow2 object
    nestedF();
  },
};
userArrow2.getDetails();

/* Example 7 with Arrow Function*/
const afn = () => {
  var as = 3;
  console.log(this.as, "afn"); // In this example as well as will be undefiend and its look for gloabal window object its not entitled with afn function
};
afn();

/* Example 8 with Normal Function*/
let personInfo = {
  name: "bhuvan",
  tryFn() {
    console.log(this.name, "tt");
  },
};

setTimeout(personInfo.tryFn(), 1000); // --> In that case it will not trigger  with undefiend value because at this time tryFun look the global object not have that variable present only that object have that access of that variable

/* Example 8 with Normal Function*/
let personInfo2 = {
  name: "bhuvan",
  tryFn() {
    console.log(this.name, "tt");
  },
};

setTimeout(function (params) {
  personInfo2.tryFn();
}, 1000);
// --> In that case it will not trigger  with undefiend value because at this time tryFun look the global object
// --> Not have that variable present only that object have that access of that variable

/* Example 9 */

const user2 = {
  name: "Bhuvan",
  greet() {
    return `Hello, ${this.name}`; // In function this will get the value always b
  },
  farewell: () => {
    return `Good bye ${this.name}`;
    // In this case that will be undefiend because
    // it will look out to there parent object there is not parent object so it will always look into the global variable  and due that it will return undefiend
  },
};

console.log(user2.greet()); // What it will be logged
console.log(user2.farewell()); // Then what it will be logged

// Example 10

let calculator = {
  read() {
    this.a = prompt("a = ", 0);
    this.b = prompt("b =", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

// console.log(calculator.read());
// console.log(calculator.sum());
// console.log(calculator.mul());

// Example 11
var s = 4;
const object = {
  s: 5,
  method() {
    arguments[0].bind(this)();
  },
};
function callBack() {
  console.log(this.s, "length");
  console.log(this, " thislength");
}

object.method(callBack);
