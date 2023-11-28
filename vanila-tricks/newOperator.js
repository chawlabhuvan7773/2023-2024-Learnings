/* What is new opertaor in javascript 
--> New Operator is instance creator of use defiend constructore and built in constructore 

Create a New Object: The new operator creates a new, empty object. This object will be the instance of the class or constructor function.

Set the Constructor's Prototype: It sets the [[Prototype]] (also known as __proto__ in some environments) of the newly created object to the prototype property of the constructor function or class. This linkage allows the instance to inherit properties and methods defined on the constructor's prototype.

Execute the Constructor Function: The constructor function or class is called with the new object as its this value. This allows the constructor to initialize the object by setting its properties and performing other setup operations.

Return the New Object: If the constructor function or class does not explicitly return an object, the new operator implicitly returns the newly created object.
*/

function Person(name, email) {
  this.name = name;
  this.email = email;
}

const PersonInfoDetails = new Person("bhuvan", "bhuvancha@gmai.com");
console.log(PersonInfoDetails.name); // OUT PUT --> bhuvan
console.log(PersonInfoDetails.email); // OUT PUT --> bhuvanchaww@gmai.com

/*
Now what is Built In Constructor is it refer to creating the object using for example 
*/
class PersonClass {
  consrtuctor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const PersonInfo = new PersonClass("bhuvan", "bhuvancha@gmail.com");
console.log(PersonInfo.name); // OUT PUT --> bhuvan
console.log(PersonInfo.email); // OUT PUT --> bhuvanchaww@gmai.com
