const reverse = (str) => str.split("").reverse().join("");
const get6Characters = (str) => str.substring(0, 6);
const uppercase = (str) => str.toUpperCase();
const getName = (data) => data.name;
const ans = reverse(get6Characters(uppercase(getName({ name: "Buckethead" }))));
console.log(ans);

/**
 * Pipe
 * The concept of pipe is simple — it combines n functions.
 * It’s a pipe flowing left-to-right, calling each function with the output of the last one.
 **/

const pipe =
  (...fns) =>
  (init) =>
    fns.reduce((val, fun) => {
      console.log(val, fun, "val fun");
      return fun(val);
    }, init);

const res = pipe(
  getName,
  uppercase,
  get6Characters,
  reverse
)({ name: "Buckethead" });

console.log(res);

/**
 * Compose
 * It is pipe in the other direction
 **/

const compose =
  (...fns) =>
  (init) =>
    fns.reduceRight((val, fun) => fun(val), init);

const output = compose(uppercase, get6Characters, reverse)("Buckethead");

console.log(output);
