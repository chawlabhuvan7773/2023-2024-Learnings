// IN-HERITENCE EXAMPLE

// Base class (Superclass)
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  speak() {
    console.log("This animal makes a sound.");
  }
}

// Derived class (Subclass)
class Dog extends Animal {
  constructor(name) {
    super(name, "Canine");
  }

  speak() {
    console.log("Woof!");
  }
}

// Create instances
const dog = new Dog("Buddy");
const genericAnimal = new Animal("Generic", "Unknown");

// Using the inherited and overridden methods
dog.speak(); // Output: Woof!
genericAnimal.speak(); // Output: This animal makes a sound.

// POLYMOREPHISM EXAMPLE

function getName() {
  console.log(this.name);
}

function add_Address(add) {
  console.log(add, "add");
}

let aFunction = new getName("hello");

add_Address("delhi");
