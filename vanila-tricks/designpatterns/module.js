// Module pattern using an IIFE (Immediately Invoked Function Expression)
const myModule = (function () {
  // Private variable
  let privateVar = 0;

  // Private function
  function privateFunction() {
    return privateVar;
  }

  // Public API
  return {
    increment() {
      privateVar++;
    },
    getValue() {
      return privateFunction();
    },
  };
})();

myModule.increment();
console.log(myModule.getValue()); // Outputs: 1
