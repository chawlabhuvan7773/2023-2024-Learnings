/**
 * A closure is the combination of a function bundled together with references to its surrounding
 * state (the lexical environment). It gives you access to the outer function scope from an inner
 * function. In Javascript, closures are created every time a function is created, at function
 * creation time.
 */

var a = 10;
function example1(baseNum) {
  return (argValue) => baseNum + argValue;
}
const example1Value = example1(2);
console.log(example1Value(23));

function example2() {
  var a = 10;
  function Z() {
    var b = 10;
    (() => console.log(a + b))();
  }
  Z();
}
console.log(example2());

for (var i = 0; i < 5; i++) {
  // using var I printed 0 to 5
  ((i) => {
    setTimeout(() => {
      console.log(i + 1);
    }, 1000);
  })(i);
}

function Fun() {
  var aValue = 0;
  return function () {
    var bValue = 1;
    console.log(bValue + aValue);
  };
}

function aExample2() {
  var aValue = 0;
  function b(additionalValue) {
    var bValue = 1;
    return () => console.log(bValue + aValue + additionalValue);
  }
  return b;
}

aExample2()(10)();
