function timeConsumingByLoop() {
  console.log("loop starts");
  for (let i = 0; i < 1000000000; i++) {
    // some task
  }
  console.log("loop ends");
}

function timeConsumingByRuntimeFuciton0() {
  console.log("Starting timer");
  setTimeout(function exec0() {
    console.log("Completed the timer 0");
    for (let i = 0; i < 1000000000; i++) {
      // some task
    }
  }, 5000); // 5 sec timer
}

function timeConsumingByRuntimeFuciton1() {
  console.log("Starting timer");
  setTimeout(function exec1() {
    console.log("Completed the timer 1");
    // while (true) {
    //   // ifinite loop
    // for this exec1 ,exec2 waiting forever
    // }
  }, 0); //0 sec timer
}

function timeConsumingByRuntimeFuciton2() {
  console.log("Starting timer");
  setTimeout(function exec2() {
    console.log("Completed the timer 2");
  }, 200); //200ms sec timer
}

console.log("hi");

timeConsumingByLoop();

timeConsumingByRuntimeFuciton0();

timeConsumingByRuntimeFuciton1();

timeConsumingByRuntimeFuciton2();

timeConsumingByLoop();

console.log("Hi");
