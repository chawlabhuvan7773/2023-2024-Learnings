// Simple Methods
const a = {
  key: "value",
};

// Using Constructor Function
function createObjConstructor(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// In the below line we are creating instance of the objects using new keyword
const personDetails = new createObjConstructor("hello", "name");

// console.log(personDetails, "personDetails");

// using object.create() create object using an exisiting object as the prototype of the newly created object
const personPrototype = {
  sayHello: function () {
    console.log("hello" + " " + this.name);
  },
};

const tryPrototype = Object.create(personPrototype);
tryPrototype.name = "dear";

tryPrototype.sayHello();

///--------------------------

// ES6 Class way :

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHello() {
    console.log("Hello, " + this.firstName);
  }
}

const person = new Person("John", "Doe");

person.sayHello();

//-----------------------------------------

// using new Object() method;

const personObjectMethod = new Object();
personObjectMethod.firstName = "John";
personObjectMethod.lastName = "Doe";
