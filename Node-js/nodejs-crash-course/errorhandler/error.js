const { CustomError } = require("./customError");
function doSomething() {
  const data = fetch("localhost:3000/api");
  return data;
}
/* One Way ---> */
// const error = new Error("Something with new");
// console.log(error.message, "message");
// console.log(error.stack, "stack");

/* Sec Way ---> */
// throw new Error("Hello This is Default Error Object Error message");

/* Third Way ---> */

// throw new CustomError("This is custom error object message");

// Fourth Way --->
// try {
//   doSomething();
// } catch (error) {
//   throw new CustomError(error);
// }
