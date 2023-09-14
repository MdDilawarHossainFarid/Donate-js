/**
 * Advance js2 \ Async js
 *
 * Callbacks | inversion of control
 *
 * class 1
 *
 * 1. Inversion of control (Promises can resolve this issue)
 * 2. Callback hell -> readability problem
 */

function doTask(fn, x) {
  // whole implementation is done by team A
  //   fn(x * x); case 1 if some one remove function call
  //   fn(x * x); case 2 if it is calling is twice
} //team A

// here team B tries to use it
doTask(function exec(num) {
  // due to call back , i am passing control of how exect should be called to doTask
  // this is call as inversion of contorl
  console.log(num);
}, 9);

// you don't how your exec function is calling inside doTask() // it is call inversion of controll
// i am passing control of my implementation exec function doTask function
