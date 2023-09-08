// Higher order function -> there are functions which take another function as arguments
// these are called higher order fucntions

function f(x, fn) {
  /**
   * x -> number
   * fn -> function
   */

  console.log(x);
  console.log(fn);
  fn();
}

f(10, function exec() {
  console.log("i am an expressin passed to a HOF");
});
