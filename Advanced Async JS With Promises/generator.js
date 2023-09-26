function* featchNextFunction() {
  console.log("I am inside the generator function");
  yield 1;
  yield 2;
  console.log("somewhere in the middle");
  yield 3;
  yield 4;
}

const iterator = featchNextFunction();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
